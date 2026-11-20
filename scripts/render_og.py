"""Render og-image.svg -> og-image.png (1200x630) with Pillow.

Social platforms can't render SVG previews, so the PNG must exist and must
match the SVG. This renders the same design directly with Pillow.

Usage: python scripts/render_og.py
"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
# Always write to the repo root, whatever the current working directory is.
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "og-image.png")

# Palette from og-image.svg
BG_A = (26, 26, 46)      # #1a1a2e
BG_B = (22, 33, 62)      # #16213e
ACCENT_A = (37, 99, 235)  # #2563eb
ACCENT_B = (16, 185, 129)  # #10b981
WHITE = (255, 255, 255)
GREY = (156, 163, 175)   # #9ca3af
DARKGREY = (107, 114, 128)  # #6b7280
GREEN = (16, 185, 129)
AMBER = (251, 191, 36)   # #fbbf24


def lerp(a, b, t):
    return tuple(int(round(a[i] + (b[i] - a[i]) * t)) for i in range(3))


def gradient():
    """Diagonal gradient background (SVG linearGradient 0%,0% -> 100%,100%)."""
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        for x in range(0, W, 4):
            t = (x / W + y / H) / 2.0
            c = lerp(BG_A, BG_B, t)
            for k in range(4):
                if x + k < W:
                    px[x + k, y] = c
    return img


def font(path_candidates, size):
    for p in path_candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()


def find_font(names, size):
    roots = [
        r"C:\Windows\Fonts",
        os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\Windows\Fonts"),
    ]
    cands = []
    for n in names:
        for r in roots:
            cands.append(os.path.join(r, n))
    return font(cands, size)


def main():
    img = gradient()
    d = ImageDraw.Draw(img, "RGBA")

    # Decorative circles (SVG opacity 0.1)
    d.ellipse([100 - 200, 100 - 200, 100 + 200, 100 + 200], fill=ACCENT_A + (26,))
    d.ellipse([1100 - 250, 530 - 250, 1100 + 250, 530 + 250], fill=ACCENT_B + (26,))

    # Lightning bolt polygon
    bolt = [(620, 80), (680, 160), (640, 160), (660, 260), (580, 170), (620, 170)]
    d.polygon(bolt, fill=AMBER)

    black = find_font(["ariblk.ttf", "Arial Black.ttf", "ARiblk.ttf"], 72)
    reg = find_font(["arial.ttf", "Arial.ttf"], 32)
    reg20 = find_font(["arial.ttf", "Arial.ttf"], 20)
    black36 = find_font(["ariblk.ttf", "Arial Black.ttf"], 36)

    def ctr(text, y, f, fill):
        try:
            bbox = d.textbbox((0, 0), text, font=f)
            w = bbox[2] - bbox[0]
            asc, desc = f.getmetrics()
            d.text((W / 2 - w / 2, y - asc), text, font=f, fill=fill)
        except Exception:
            d.text((W / 2, y), text, font=f, fill=fill, anchor="mm")

    ctr("AI Prompt Templates", 310, black, WHITE)
    ctr("50 Ready-to-Use Prompts That Convert", 380, reg, GREY)

    # Divider line with horizontal gradient
    for x in range(400, 800):
        t = (x - 400) / 400.0
        d.rectangle([x, 410, x, 413], fill=lerp(ACCENT_A, ACCENT_B, t))

    ctr("Copy | Paste | Profit", 470, reg, GREEN)

    # Price badge (rounded rect)
    d.rounded_rectangle([460, 500, 740, 570], radius=35, fill=ACCENT_A)
    ctr("$39 one-time", 547, black36, WHITE)

    ctr("Growth | Customer Success | Content | Productivity", 610, reg20, DARKGREY)

    img.save(OUT, "PNG")
    print("wrote", OUT, img.size)


if __name__ == "__main__":
    main()
