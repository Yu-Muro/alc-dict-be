# alc-dict-be


## Directory tree

### How to create

```sh
$ tree -I node_modules
```

### Directory description

``` tree
.
├── .alc-dict-be.code-workspace
├── .editorconfig
├── .github
│   └── workflows
│       └── .gitkeep
├── .gitignore
├── Dockerfile
├── README.md
├── Taskfile.yml
├── app
│   ├── .eslintrc.json
│   ├── .prettierrc
│   ├── migrations
│   │   └── .gitkeep
│   ├── package-lock.json
│   ├── package.json
│   ├── sql
│   │   └── schema.sql
│   ├── src
│   │   ├── config.ts
│   │   ├── controllers
│   │   │   └── health.ts
│   │   ├── index.ts
│   │   ├── models
│   │   │   └── whisky.ts
│   │   └── route.ts
│   ├── tsconfig.json
│   └── wrangler.toml
└── compose.yml
```

## Using packages

- [Hono](https://hono.dev) [GitHub](https://github.com/honojs)
- [Drizzle ORM](https://orm.drizzle.team) [GitHub](https://github.com/drizzle-team/drizzle-orm)
