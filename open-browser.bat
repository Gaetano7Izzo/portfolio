@echo off
echo Apertura browser per il portfolio...
echo.

REM Aspetta un po' per sicurezza
timeout /t 3 /nobreak >nul

REM Prova prima la porta 3000
echo Tentativo apertura su porta 3000...
start http://localhost:3000

REM Aspetta un po' e prova la porta 3001
timeout /t 2 /nobreak >nul
echo Tentativo apertura su porta 3001...
start http://localhost:3001

echo.
echo Browser aperto! Se il sito non si carica, ricarica la pagina (F5)
echo.
pause 