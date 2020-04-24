# !/bin/bash

username=pedrocpires

cd
cd desktop/dh/fullStack/not_so_Instagram/

echo ""
echo ""
echo "Commit automático de todas as alterações de projeto na branch mastes/ commited by $username"
echo "==========================================================================================="
echo "Gostaria de continuar [y/n]"
read iniciar

if [ "$iniciar" = "y" ]
then
    sudo git status
    sudo git add .
    sudo git status
    echo "Todos os arquivos adicionados"
    echo ""
    echo "Qual a mensagem do commit?"
    echo ""
    read msg
    sudo git commit -m "$msg"
    sudo git pull origin master
    sudo git push origin master
else
    echo "Saindo do script..."
fi