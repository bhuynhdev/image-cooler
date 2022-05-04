:: Open scripts in Windows Terminal
:: Windows terminal CLI arguments doc: https://docs.microsoft.com/en-us/windows/terminal/command-line-arguments
:: Note: Angular CLI replaces the tab's title (https://github.com/angular/angular-cli/issues/19205),
:: so the first --title is actually useless
wt.exe --title "Angular client" "runclient.bat"; sp --title "Image API" "runapi.bat"
