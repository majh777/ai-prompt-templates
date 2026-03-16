# Try to get GitHub credentials
Add-Type -AssemblyName System.Security

# Using CredentialManager package approach
try {
    $cred = Get-StoredCredential -Target "git:https://github.com" -ErrorAction SilentlyContinue
    if ($cred) {
        Write-Host "Found credential"
        $cred.GetNetworkCredential().Password
    }
} catch {
    Write-Host "Error: $_"
}

# Alternative: try Windows.Security.Credentials
try {
    $vault = New-Object Windows.Security.Credentials.PasswordVault
    $creds = $vault.FindAllByResource("git:https://github.com")
    foreach ($c in $creds) {
        $c.RetrievePassword()
        Write-Host "User: $($c.UserName)"
        Write-Host "Pass: $($c.Password)"
    }
} catch {
    Write-Host "Vault error: $_"
}
