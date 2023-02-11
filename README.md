Para rodar o projeto:
- Gerar um arquivo .env com algo parecido com o exemplo:
  PORT = 3000
  JWT_SECRET = "38669e21-8a7c-4265-b1c1-ff3db01ad7da"
  JWT_EXPIRES_IN = 1d
- Comando npm install para instalar todas as dependências do projeto
- Para gerar uma nova migração de table(caso queira, mas já tem todas prontas), npm run typeorm migration:create src/shared/typeorm/migrations/CreateUsersTable
- Para rodar as migrations(isso sim necessário), npm run typeorm -- -d ./src/shared/typeorm/index.ts migration:run
- Para subir o servidor npm run dev
