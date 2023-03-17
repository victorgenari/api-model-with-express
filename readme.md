# Exemplo de API com (Node.js + Express):

- Até o momento, o projeto consiste numa API para cadastro de pessoas;
- A aplicação ainda está em desenvolvimento, então novas funcionalidades irão surgir;
- O intuito da criação, seria aprimorar/continuar os estudos voltados para Backend;

# Techs/Libs/Frameworks:

- Node.js;
- express;
- cors;
- dotenv;
- mysql;
- mysql-migrations;
- nodemon;

# Estrutura:

## O projeto está dividido nas seguintes pastas:

- `routes:` Contém as rotas da API e seus respectivos controladores;
- `controllers:` Contém as funções que manipulam os dados da API;
- `repositories:` Contém as funções que comunicam com o Banco de Dados;

# Como executar/rodar a aplicação:

## Pré-requisitos:

- Node.js instalado na máquina;
- Banco de Dados;
- Clone o repositório em sua máquina;
- Abra o terminal e navegue até a pasta do projeto;
- Instale as dependências do projeto utilizando o comando `npm install`;
- O arquivo `.env_example` mostra um exemplo para varíaveis de ambiente, caso necessário;
- Verifique no arquivo Package.json os Scripts para rodar a aplicação `npm run dev` / `npm start`;
- Acesse a API em sua máquina através do endereço `http://localhost:3002`;

# Endpoints disponíveis:

| Endpoint       | HTTP Method | Description      |
| -------------- | -----------| ---------------- |
| /people        | GET        | Get all people   |
| /people/:id    | GET        | Get people by id |
| /people        | POST       | Create people    |
| /people/:id    | PUT        | Update people    |
| /people/:id    | DELETE     | Delete people    |