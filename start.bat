@echo off
title Aysan Hotel Server
cd /d "%~dp0backend"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install the LTS version from https://nodejs.org and run this file again.
  start https://nodejs.org
  pause
  exit /b
)

if not exist node_modules (
  echo Installing packages, please wait...
  call npm install
)

set /p DB_PASSWORD=Type your MySQL root password and press Enter: 

echo.
echo Starting the server. Keep this window open. Press Ctrl+C to stop it.
start "" http://localhost:3000
node server.js
pause
