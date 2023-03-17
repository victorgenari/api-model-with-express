# Exemplo de API com (Node.js + Express):

- Até o momento, o projeto consiste numa API para cadastro de pessoas;
- A aplicação ainda está em desenvolvimento, então novas funcionalidades irão surgir;
- O intuito da criação, seria aprimorar/continuar os estudos voltados para Backend;

# Techs/Libs/Frameworks:

- Node.js;
- Express;
- Cors;
- Dotenv;
- MySQL;
- MySQL-Migrations;
- nodemon; -D

# Estrutura:

## O projeto está dividido nas seguintes pastas:

`routes:` Contém as rotas da API e seus respectivos controladores;
`controllers:` Contém as funções que manipulam os dados da API;
`repositories:` Contém as funções que comunicam com o Banco de Dados;

# Como executar/rodar a aplicação:

## Pré-requisitos:

- Node.js instalado na máquina;
- Banco de Dados;
- Clone o repositório em sua máquina;
- Abra o terminal e navegue até a pasta do projeto;
- Instale as dependências do projeto utilizando o comando `npm install`;
- Se atente ao exemplo de uso para varíaveis de ambiente, dessa forma o projeto irá funcionar corretamente, `.env_example`;
- Verifique no arquivo Package.json os Scripts para rodar a aplicação `npm run dev` / `npm start`;
- Acesse a API através do endereço http://localhost:3002;

# Endpoints disponíveis:

<Table>
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>HTTP Method</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>/people</td>
            <td>GET</td>
            <td>Get all people</td>
        </tr>

        <tr>
            <td>/people/:id</td>
            <td>GET</td>
            <td>Get people by id</td>
        </tr>

        <tr>
            <td>/people</td>
            <td>POST</td>
            <td>Create people</td>
        </tr>

        <tr>
            <td>/people/:id</td>
            <td>PUT</td>
            <td>Update people</td>
        </tr>

        <tr>
            <td>/people/:id</td>
            <td>DELETE</td>
            <td>Delete people</td>
        </tr>
    </tbody>
</Table>