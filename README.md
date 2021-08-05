# User Management System

## Tecnologias :computer:

- React
- TypeScript
- Styled Components
- Context Api

## Funcionalidades 🚀

- [x] A aplicação está praticamente toda responsiva, ficaram poucos detalhes

### SignIn page
- [x] A aplicação está protegida por login e senha;
- [x] 2 tipos de perfis (ADMIN e USER); 

### Users page
- [x] Interface para pesquisa dos usuários cadastrados
- [x] Clicando no botão add user aparecera modal para cadastro (CRUD) dos usuários da aplicação
- [x] No Header na parte esquerda, existe um link (My Profile) para visualizar o perfil do usuário, podendo alterar a senha e o email
- [x] No Header na parte direita, existe um botão para sair da aplicação
- [x] No Header na parte esquerda aparece a foto do usuário logado da aplicação

### MyProfile page
- [x] Alterar o email e a senha

## O que pode melhorar ? :test_tube:
- A questão de usabilidade, mostrar pro usuário quando ele digitou um login ou senha inválido
- Terminar de criar todos os casos de testes, por questão de tempo não criei todos os casos possiveis
- Não permitir criar um usuário com um email já existente
- Conseguir alterar a foto do usuário logado na aplicação

## Principais desafios :grimacing:

- Os dois principais desafios foram criar os hooks de autenticação e o de CRUD

## Estratégia de autenticação :zipper_mouth_face:

Para fazer uma aplicação protegida por login e senha, eu criei um context do React, um hook chamado useAuth
e também criei um componente chamado Route, que ele retorna o Route do react-router-dom, porém esse componente recebe uma propriedade a mais
chamada isPrivate, a partir dai na hora que a aplicação é iniciada, eu pego o user retornado pelo useAuth, e verifico se existe algum usuário logado na aplicação.

Algumas Regras
- [x] Rota privada e usuário autenticado - ok
- [x] Rota privada e usuário não autenticado - Redirecionar para login
- [x] Rota não privada e usuário autenticado - Redirecionar para lista de usuários
- [x] Rota não privada e usuário não autenticado - ok

Métodos retornados pelo hook useAuth 
- SignIn: Quando o usuário passa o email e a senha na tela de login, ele verifica se existe na API, se sim, ele salva no localStorage
- signOut: Remove o usuário atual do localStorage
- user: retorna os dados do atual usuário logado na aplicação

## Usuários de teste 

- ADMIN: 
email: "douglas@gmail.com",
password: "202020",

- USER: 
email: "pedro@gmail.com",
password: "202020",

## Como utilizar :bangbang:

Clone o repositorio
- ``git clone https://github.com/DglsAlmeida/user-management-system.git``

Entre na raiz do repositório clonado
- Rode ``yarn`` para instalar as dependências

- Depois rode ``yarn start``

- Por padrão a aplicação vai rodar em ``http://localhost:3000``

E para iniciar a API fake, rode em outro terminal:

- ``yarn server``
