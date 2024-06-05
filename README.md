This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the required packages :

```bash
npm install yarn -g
yarn global add prisma
yarn global add dotenv-cli
yarn install --ignore-scripts
```

Init Prisma and the local database :

- Rename the `env.local.sample` to `env.local` and provide your local database configuration.

- Run the following command to init the prisma schema and run the DDL tables creation scripts :

```bash
yarn db:init
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Naming convention

components file name -> PascalCase
components function name -> PascalCase
next.js page and layout file name -> standard
next.js page and layout function name -> PascalCase

## Running the Application with Docker

Before running the application, ensure that Docker and Docker Compose are installed on your machine.

To launch the application along with the Postgre database, you can use the following command:

```bash
docker-compose up
```

This command will spin up the environment with Next.js application and Postgre database.
