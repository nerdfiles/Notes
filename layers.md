## CQRS / DDD / Microservices

    Apps
      (...entities)
    Domains
      (...entities)
    Infrastructure 
      Loggers, 
      Encryption, 
      Database, 
      Repositories, 
      Migrations, 
      Seeders, 
      Support (Fakers)
      Auth (JWT)
    Interface
      (...types)
        Loggers, 
        Middlewares/Utils (Loggers)
        Modules (Routes)
        Server
        Router

## Monolithic

    Modules (Routes, Controllers, Models)
    Utilities
    Actions
    App (Loggers)
    Database
    Auth
    Server
    Router

## Client

    Modules
      Directives
      Services
      Pipes (Filters)
      Components (Presentational, Stateful, Pure, Impure, etc.)
    Resolvers
    Animations
    Routes
    App (Module)
