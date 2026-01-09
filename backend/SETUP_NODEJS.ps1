# Node.js Setup Check Script for Tax Academy Backend
# Run this script to verify Node.js installation

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Node.js Setup Check for Tax Academy" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[OK] Node.js is installed" -ForegroundColor Green
        Write-Host "Version: $nodeVersion" -ForegroundColor Green
        Write-Host ""
    }
} catch {
    Write-Host "[ERROR] Node.js is NOT installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Download the LTS version and make sure to check 'Add to PATH'" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternative installation methods:" -ForegroundColor Yellow
    Write-Host "  - Using Winget: winget install OpenJS.NodeJS.LTS" -ForegroundColor Yellow
    Write-Host "  - Using Chocolatey: choco install nodejs-lts" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[OK] npm is installed" -ForegroundColor Green
        Write-Host "Version: $npmVersion" -ForegroundColor Green
        Write-Host ""
    }
} catch {
    Write-Host "[ERROR] npm is NOT installed" -ForegroundColor Red
    Write-Host "npm should come with Node.js installation" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

# Check Node.js version (should be 18+)
$versionMatch = $nodeVersion -match 'v(\d+)'
if ($versionMatch) {
    $majorVersion = [int]$matches[1]
    if ($majorVersion -ge 18) {
        Write-Host "[OK] Node.js version is 18 or higher" -ForegroundColor Green
    } else {
        Write-Host "[WARNING] Node.js version should be 18 or higher" -ForegroundColor Yellow
        Write-Host "Current version: $nodeVersion" -ForegroundColor Yellow
    }
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Check Complete" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: npm install" -ForegroundColor White
Write-Host "2. Run: npm run db:generate" -ForegroundColor White
Write-Host "3. Configure .env file (copy from .env.example)" -ForegroundColor White
Write-Host "4. Run: npm run db:migrate" -ForegroundColor White
Write-Host ""
