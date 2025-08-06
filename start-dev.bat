@echo off
echo Avvio Portfolio di Gaetano Izzo...
echo.
cd /d "C:\Users\gaeiz\OneDrive\Desktop\project\portfolio"
echo Cartella: %CD%
echo.
echo Avvio server di sviluppo...
echo.

REM Avvia il server e aspetta che sia pronto
npm run dev

REM Quando il server si ferma, aspetta un momento
timeout /t 2 /nobreak >nul

echo.
echo Server fermato. Premi un tasto per chiudere...
pause 