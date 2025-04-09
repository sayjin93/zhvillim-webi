@echo off
chcp 65001 >nul
title GitHub account unlink - JK

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                [🧹] Fshirja e Kredencialeve GitHub             ║
echo ╠════════════════════════════════════════════════════════════════╣
echo ║ Ky script fshin kredencialin: git:https://github.com           ║
echo ║ nga Windows Credential Manager, për të mbrojtur llogarinë.     ║
echo ║----------------------------------------------------------------║
echo ║                    ©2025 JK - www.jkruja.com                   ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

echo 🔍 Duke fshirë "git:https://github.com" nga Windows Credentials...

cmdkey /delete:git:https://github.com

if %errorlevel%==0 (
    echo ✅ Kredencialet u fshinë me sukses!
) else (
    echo ⚠️  Kredencialet nuk u gjetën ose diçka shkoi keq!
)

echo.
echo 🔒 Tani jeni i shkëputur nga GitHub në këtë kompjuter.
pause
