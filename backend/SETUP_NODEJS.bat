@echo off
echo ========================================
echo Node.js Setup Check for Tax Academy
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js is installed
    node --version
    echo.
) else (
    echo [ERROR] Node.js is NOT installed or not in PATH
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Download the LTS version and make sure to check "Add to PATH"
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] npm is installed
    npm --version
    echo.
) else (
    echo [ERROR] npm is NOT installed
    echo npm should come with Node.js installation
    echo.
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo Node.js version: %NODE_VERSION%
echo.

REM Check if version is 18 or higher
echo %NODE_VERSION% | findstr /R "^v1[89] ^v2" >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js version is 18 or higher
    echo.
) else (
    echo [WARNING] Node.js version should be 18 or higher
    echo Current version: %NODE_VERSION%
    echo.
)

echo ========================================
echo Setup Check Complete
echo ========================================
echo.
echo Next steps:
echo 1. Run: npm install
echo 2. Run: npm run db:generate
echo 3. Configure .env file
echo.
pause
