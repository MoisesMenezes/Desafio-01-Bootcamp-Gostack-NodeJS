# Desafio 01: Módulo do Bootcamp Gostack https://rocketseat.com.br/bootcamp

## Conceitos de NodeJS

- Criar uma aplicação do zero utilizando Express.

### Rotas

- **POST /projects:** A rota deve receber `id` e `title` dentro do corpo da requisição para cadastrar um novo projeto.
- **GET /projects:** A rota que lista todos os projetos.
- **PUT /projects/:id** A rota que deve alterar apenas o título do projeto com o `id` presente no parâmetro da rota.
- **DELETE /projects/:id** A rota deve deletar o projeto com o `id` passado pelo parâmetro da rota.
- **POST /project/:id/tasks** A rota deve receber um campo `title` e armazena uma nova tarefa de um projeto escolhido através do `id` presente no parâmetro da rota;

### Middlewares

- Foi criado um middleware que verifica se o projeto com aquele ID existe.

### Formato JSON dos projetos

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```
