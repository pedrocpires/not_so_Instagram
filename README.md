# not_so_Instagram

## Instalação

Instalamos as dependencias do projeto:

```bash
$ npm install
```

Rodamos o script definido em `package.json`:

```bash
$ npm run dev
```

## MySql docker container

Construção da imagem do MySQL:

1- Na pasta raiz do projeto execute para criar a imagem:

```bash
$ sudo docker build -t mysql -f ./database/dockerFile .
```

2- Criação do container de docker permanente:

```bash
$ sudo docker run -d -v $(pwd)/database/data:/var/lib/mysql --rm --name mysql mysql
```
3- Execução do script SQL para criação do Banco de Dados e tabelas:

```bash
$ sudo docker exec -i mysql mysql -uroot -proot < database/script.sql
```

4- Acessar o container especificando bash como linguagem:

```bash
$ sudo docker exec -it mysql /bin/bash
```

5- Acessar o banco de dados:

```bash
$ mysql -uroot -proot
```

6 - Selecionar o banco de dados not_so_instagram:

```bash
$ use not_so_instagram;
```

7- Executar os comando SQL que forem necessários para alteração, criação, exclusão e inserção de tabelas e dados (exemplo abaixo):

```bash
$ select * from user;
```

## Tecnologias utilizadas

### Ambiente de produção

- [express](https://expressjs.com/pt-br/): framework minimalista que orquestra
  toda a aplicação. Nele podemos definir rotas, controllers, models, views,
  middlewares, serviços e validações.

- [ejs](https://ejs.co/#docs): linguagem de templating que nos permite manipular
  e executar código javascript na geração das views, possibilitando um conteudo
  dinamico.

### Ambiente de desenvolvimento

- [nodemon](https://github.com/remy/nodemon#usage): monitora e recarrega
  automaticamente as mudanças nos arquivos enquanto codamos.

- [faker](https://github.com/Marak/faker.js): cria dados randomicos como nomes,
  emails, avatars de usuários, endereços, lorem ipsums, etc.

## To do list

- Páginas para serem criadas:
  - [x] Edição de perfil;
  - [ ] Edição de senha do usuário;
  - [ ] Vizualização de perfil de outro usuário;
  - [x] Vizualização do Banco de Dados para desenvolvedor;
  - [x] Criação de nova publicação;
  - [x] Vizualização de publicação;

- Funções para serem implementadas: 
  - [ ] Ambiente de desenvolvedor;
   - [ ] Criação de menu lateral para funções de desenvolvedor;
  - [x] Implementar [faker](https://github.com/Marak/faker.js);
    - [ ] Criar script para faker post;
    - [ ] Criar script para faker like;
    - [ ] Criar script para faker comment;
    - [ ] Criar script para faker login;
    - [ ] Criar script para faker signUp;
    - [ ] Criar script para faker follow;
  - [ ] Script em `package.json` para rodar 2 servidores:
      - [ ] Servidor de desenvolvimento;
      - [ ] Servidor de usuário;
  - [ ] Implementação de likes;
  - [x] Implementação de comments;
  - [ ] Implementação de followers;
  - [ ] Criação do feed de post vizualizando os following's

- Tarefas para o Banco de dados;
  - [ ] Finalizar script do Banco de Dados;
  - [x] Implemetar funções do sequelize;
  - [ ] Salvar banco de dados no [Docker-Hub](https://hub.docker.com/)
