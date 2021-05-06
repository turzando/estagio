<p align="center"><a href="https://nodejs.org/en/" target="_blank"><img src="https://cdn.ourcodeworld.com/public-media/articles/articleocw-57e139c25d2be.png" width="400"></a></p>

## O que você precisa:
Após realizar o **download** do projeto é **necessário verificar** se o **Software(s)** a seguir está **baixado**:

- NodeJS (projeto feito na versão **v14.15.4**)

### Banco de Dados: 

Usei o **MySQL** pois já tinha familiaridade. O **.env** trouxe todas as características do DB
~~~css
MYSQL_USER" : "root",
MYSQL_PASSWORD" : "",
MYSQL_DATABASE" : "estagio",
MYSQL_HOST" : "localhost",
MYSQL_PORT" : 3306
~~~

Para *criação* do DB é necessário seguir os seguintes passos:

**1º** create database estagio;

**2º** use estagio;

**3º** CREATE TABLE filmes (id_filme int not null auto_increment, 
nome varchar(45) not null, 
descricao varchar(1000) not null,
avaliacao decimal(2,2), 
primary key(id_filme)
) default charset = utf8;

### E agora?
Feito a instação ou update dos **softwares**, digite **npm install**, para instalar os módulos do Node.
Tendo feito isso, inicie o server usando **npm start**.

**AMBIENTE**
Verbos HTTP | Ambiente  |  URL  |
| ------------------- | ------------------- | ------------------- |
| Post, Get, Put, Delete e Patch |  principal |  localhost:3000/filmes |
| Get |  Recomendação de filme |  localhost:3000/filmes/recomendacao |


## **Descrição**

# URL: localhost:3000/filmes

O verbo **POST** irá criar um novo filme, passando no body o nome e a descrição em formato json;

{
    "nome": "Harry Potter e o Cálice de Fogo",
    "descricao": " ... "
}

O verbo **GET** irá mostrar todos os filmes;

O verbo **PUT** irá atualizar um filme, passando no body o nome, a descrição e o id em formato json;

{
    "nome": "Harry Potter e o Cálice de Fogo",
    "descricao": " ... ",
    "id_filme" : 1
}

O verbo **DELETE** irá deletar um filme, id em formato json;

{
    "id_filme" : 1
}

O verbo **PATCH** irá avaliar o filme, passando o valor da avaliação e o id em formato json;

 {
     "avaliacao" : 8,
     "id_filme" : 1
 }

 # URL: localhost:3000/filmes/recomendacao

 O verbo **GET** irá mostrar **um** (de forma aleatória) de todos os filmes que ainda não foram avaliados;