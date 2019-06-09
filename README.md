Pré-requisitos:

1. Ter postgresql
2. Ter node 8+ com npm
3. Ter nestjs, se não tiver execute na linha de comando **npm i -g nestjs**
4. Ter yarn, não havendo execute na linha de comando **npm i -g yarn**

## Usando a aplicação

1. Faça o git clone deste repositório
2. Execute **yarn install**
3. Configure o banco de dados

  * Usa a ferramenta para mexer no postgres de sua escolha (pgAdmin, Datagrip, VSCode...)
  * Crie o usuário postgres se não tiver, colocando sua senha como postgres
  * Execute a SQL que está no arquivo **evolution.sql** dentro desde projeto (cria o usuário, database, tabelas e insere valores mocados)

4. Digite na linha de comando **cd Desafio-BossaBox-back-end**
5. Execute **npm run start**
6. Pronto! Agora já pode usar o Postman, Insominia ou algum outro simulador de http requests de sua preferência para testar!

## Rotas

Todas as informações de rotas estão no API Blueprint que está contido no diretório: apiBlueprint/api.apib neste projeto.

## Testando

1. Tenha feito até o passo 3 acima
2. Execute **npm run test**