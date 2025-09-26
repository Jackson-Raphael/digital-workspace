# Database

## Migrations

Schema changes are handled using migrations published alongside the app.

Migrations should NEVER change once they are merged to the main branch. They represent the set of steps it took to reach our current databases schema. This might feel a little unintuitive at first, but it allows us to very clearly tie schema changes with app updates, and most importantly, allows us to return the database schema to a previous state in case of catastrophy.

Migrations essentially formalize and document the various scripts you would run on the dev db during development, ensuring an exact match when we deploy to production and a clear undo path.

Will probably use postgrator to run these. We dont need an ORM and postgrator is dead simple.

# Rules

Our hosted databases should not allow schema changes from any account but the one used in our CI/CD process for migrations.

We should NEVER, run schema changes directly on our deployed databases, doing so would break the "history" of changes migrations give us, and make it hard for our local databases to accurately match the deployed ones.

While we follow this approach in PowerApps, its far more important here.

Local -> Development -> Testing -> Production

Experiment with schema changes etc in your local database (docker) at will. It can always be restored to match the deployed schemas by recreating it from the migrations.