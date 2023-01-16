Para rodar o projeto:
- Gerar um arquivo .env
- Comando npm install para instalar todas as dependências do projeto
- Para gerar uma nova migração de table(caso queira, mas já tem todas prontas), npm run typeorm migration:create src/chared/typeorm/migrations/CreateUsersTable
- Para rodar as migrations(isso sim necessário), npm run typeorm -- -d ./src/shared/typeorm/index.ts migration:run
- Para subir o servidor npm run dev
