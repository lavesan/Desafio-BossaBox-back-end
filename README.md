Pré-requisitos:
1. Ter postgresql
2. Ter node com npm
3. Ter nestjs, se não tiver execute na linha de comando npm i -g nestjs
## Usando a aplicação
1. Faça o git clone deste repositório
2. Execute npm i
3. Configure o banco de dados
  * Usa a ferramenta para mexer no postgres de sua escolha (pgAdmin, Datagrip, VSCode...)
  * Crie o usuário postgres se não tiver, colocando sua senha como postgres
  * Execute a SQL que está no arquivo evolution.sql dentro desde projeto
4. Execute npm run start
5. Pronto! Agora já pode usar o Postman, Insominia ou algum outro simulador de http requests de sua preferência para testar!
## Testando
1. Tenha feito até o passo 3 acima
2. Execute npm run test