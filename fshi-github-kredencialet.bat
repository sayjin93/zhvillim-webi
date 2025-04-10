@echo off
chcp 65001 >nul
title GitHub account unlink - JK

echo.
echo	 +----------------------------------------------------------------+
echo	 ^|                 Fshirja e Kredencialeve GitHub                 ^|
echo	 ^|----------------------------------------------------------------^|
echo	 ^| Ky script fshin kredencialin: git:https://github.com           ^|
echo	 ^| nga Windows Credential Manager, per te mbrojtur llogarine.     ^|
echo	 ^|----------------------------------------------------------------^|
echo	 ^|                    ©2025 JK - www.jkruja.com                   ^|
echo	 +----------------------------------------------------------------+
echo.

echo [^>] Duke fshire "git:https://github.com" nga Windows Credentials...

cmdkey /delete:git:https://github.com
echo.
if %errorlevel%==0 (
    echo [OK] Kredencialet u fshine me sukses!
) else (
    echo [X] Kredencialet nuk u gjeten ose dicka shkoi keq!
)

echo.
echo [!] Tani jeni i shkeputur nga GitHub ne kete kompjuter.
echo.
pause
