# Node.js Setup Guide for Windows

## Issue
Node.js and npm are not installed or not in your system PATH.

## Solution: Install Node.js

### Option 1: Download and Install from Official Website (Recommended)

1. **Visit Node.js Official Website**
   - Go to: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Run the Installer**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - **Important**: Make sure to check "Add to PATH" option during installation
   - Complete the installation

3. **Verify Installation**
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v18.17.0 and 9.6.7)

4. **Restart Your Terminal**
   - Close and reopen PowerShell/Command Prompt
   - Navigate to your project directory

### Option 2: Install Using Chocolatey (If you have Chocolatey)

```powershell
# Run PowerShell as Administrator
choco install nodejs-lts
```

### Option 3: Install Using Winget (Windows 10/11)

```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installation

1. **Restart your terminal/PowerShell**

2. **Verify Node.js is installed:**
   ```powershell
   node --version
   npm --version
   ```

3. **Navigate to backend directory:**
   ```powershell
   cd C:\Users\User\hello-demo\backend
   ```

4. **Install dependencies:**
   ```powershell
   npm install
   ```

5. **Verify Prisma is set up:**
   ```powershell
   npm run db:generate
   ```

## Troubleshooting

### Node.js installed but command not found

1. **Check if Node.js is installed:**
   - Look in: `C:\Program Files\nodejs\` or `C:\Program Files (x86)\nodejs\`

2. **Add to PATH manually:**
   - Open System Properties → Environment Variables
   - Edit "Path" variable
   - Add: `C:\Program Files\nodejs\`
   - Restart terminal

3. **Or reinstall Node.js** with "Add to PATH" option checked

### Permission Issues

If you get permission errors, run PowerShell as Administrator:
- Right-click PowerShell → "Run as Administrator"
- Navigate to project: `cd C:\Users\User\hello-demo\backend`
- Run: `npm install`

### Clear npm cache (if needed)

```powershell
npm cache clean --force
```

## Required Versions

- **Node.js**: v18.0.0 or higher (LTS recommended)
- **npm**: Comes with Node.js (v9.0.0 or higher)

## Next Steps After Installation

Once Node.js is installed:

1. **Install backend dependencies:**
   ```powershell
   cd C:\Users\User\hello-demo\backend
   npm install
   ```

2. **Install frontend dependencies:**
   ```powershell
   cd C:\Users\User\hello-demo\frontend
   npm install
   ```

3. **Set up environment variables** (see SETUP.md)

4. **Run database migrations:**
   ```powershell
   cd C:\Users\User\hello-demo\backend
   npm run db:generate
   npm run db:migrate
   ```

## Quick Test

After installation, test with:

```powershell
# Check versions
node --version
npm --version

# Test npm install
cd C:\Users\User\hello-demo\backend
npm install
```

If all commands work, Node.js is properly installed!
