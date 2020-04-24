# !/bin/bash

username=pedrocpires

echo "Commit automático de todas as alterações de projeto na branch mastes/ commited by $username"
echo "==========================================================================================="
echo "Gostaria de continuar [y,n]"
read iniciar

if [ "$iniciar" = "y" ]
then
    sudo git status
    sudo git add .
    echo "Qual a mensagem do commit?"
    read msg
    sudo git commit -m "$msg"
    sudo git pull origin master
    sudo git push origin master
else
    exit
fi