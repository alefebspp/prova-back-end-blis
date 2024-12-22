# prova-back-end-blis

## Requisitos para executar o projeto:

- Tenha o docker desktop instalado no computador. Será necessário para executar o container que contém a imagem do banco de dado Mysql.
- Caso não queria executar com o docker, tenha algum cliente de MySQL instalado no computador e garanta que o banco de dados tenha as mesmas informações passadas no arquivo .env

## Passos:

- Baixe as dependências do projeto com o comando "npm install"
- Crie um arquivo chamado .env na raiz do projeto e copie o contéudo das variáveis de ambiente que enviei via e-mail para esse arquivo.
- Execute o comando "docker compose up" na raiz do projeto (caso esteja usando docker)
- Uma vez que o banco de dados estiver pronto para receber conexões, execute o comando "npx prisma migrate dev" para aplicar as migrations no banco de dados
- Após todas as migrations serem aplicadas, execute o comando "npm run start:dev" para iniciar o servidor.

## Observações:

- Existe uma rota com toda a documentação da API, ela pode ser acessada por: http://localhost:3000/api-docs
- O método de autenticação utilizado foi o Bearer Token, que deve ser passado no header das requisições que precisam de autenticação
- A atividade extra que fiz foi possibilitar que os pdfs enviados pudessem ter seus conteúdos extraídos para um arquivo txt. A rota para esse recurso está documentada na documentação da API. Entretanto, a API que utilizei (ilovepdf) começou a retornar 500 nos últimos testes que fiz.
