# Projeto de Backend usando MongoDB
Este é um projeto de backend desenvolvido em JavaScript para um desafio da empresa PreparoVC. O objetivo do projeto era criar um servidor que armazenasse dados em um banco de dados MongoDB e pudesse ser acessado por um frontend.

# Como rodar o projeto localmente
Antes de começar, certifique-se de ter o Node.js instalado em seu computador.

# Clone este repositório em sua máquina.

Execute o comando npm install na pasta raiz do projeto para instalar as dependências.

``` Crie um arquivo auth.json na pasta config com a seguinte estrutura:
{
  "secret": "3f71fa497b6855a8d334c6b1ec0ed5ed"
}
```
Este arquivo é necessário para a geração de tokens JWT.

Certifique-se de ter uma instância do MongoDB rodando localmente ou configure as credenciais de acesso ao MongoDB na pasta config/database.js.

Execute o comando npm start na pasta raiz do projeto para iniciar o servidor.

# Tecnologias usadas
As principais tecnologias utilizadas neste projeto são:
```
MongoDB - banco de dados NoSQL
Express.js - framework web para Node.js
Node.js - ambiente de tempo de execução do JavaScript
bcrypt.js - biblioteca para criptografia de senhas
jsonwebtoken - biblioteca para geração de tokens JWT
body-parser - middleware para parsing de corpos de requisição HTTP
consign - biblioteca para carregamento automático de arquivos em um objeto do aplicativo Express
```
```
# Endpoints
/auth/register
Método: POST

Descrição: Registra um novo usuário na aplicação.

Corpo da requisição:
{
  "name": "Nome do usuário",
  "email": "email@exemplo.com",
  "password": "senha do usuário"
}
Corpo da resposta:

{
  "user": {
    "_id": "id do usuário",
    "name": "Nome do usuário",
    "email": "email@exemplo.com",
    "createdAt": "data de criação do usuário",
    "updatedAt": "data de atualização do usuário"
  },
  "token": "token de autenticação JWT"
}

/auth/authenticate
Método: POST

Descrição: Autentica um usuário na aplicação.

Corpo da requisição:
{
  "email": "email@exemplo.com",
  "password": "senha do usuário"
}

Corpo da resposta:
{
  "user": {
    "_id": "id do usuário",
    "name": "Nome do usuário",
    "email": "email@exemplo.com",
    "createdAt": "data de criação do usuário",
    "updatedAt": "data de atualização do usuário"
  },
  "token": "token de autenticação JWT"
}

/basicData
Esta rota lida com os dados básicos dos usuários. Os seguintes endpoints estão disponíveis:

GET /basicData: retorna todos os dados básicos dos usuários.
GET /basicData/:basicDataId: retorna os dados básicos de um usuário específico.
POST /basicData: cria um novo conjunto de dados básicos de um usuário.
PUT /basicData/:basicDataId: atualiza os dados básicos de um usuário específico.
DELETE /basicData/:basicDataId: exclui os dados básicos de um usuário específico.

/localization
Esta rota lida com a localização dos usuários. Os seguintes endpoints estão disponíveis:

GET /localization: retorna todos os dados de localização dos usuários.
GET /localization/:localizationId: retorna os dados de localização de um usuário específico.
POST /localization: cria um novo conjunto de dados de localização de um usuário.
PUT /localization/:localizationId: atualiza os dados de localização de um usuário específico.
DELETE /localization/:localizationId: exclui os dados de localização de um usuário específico.
```

