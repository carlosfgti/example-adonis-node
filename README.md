# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Using

Fist, clone project:

```bash
git clone https://github.com/carlosfgti/example-adonis-node.git

cd example-adonis-node/

npm install
```

### Migrations

File .env define access:
```text
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=name_database
```

```js
adonis migration:run
```

### Run

Start project:
```bash
adonis serve --dev
```
