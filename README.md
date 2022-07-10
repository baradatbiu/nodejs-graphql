## 5 week - RSSchool - Graphql Service task

### Description

BFF app built with Nestjs/Typescript/Apollo

### Installation

1. Clone repo(ssh or https)

```sh

git clone git@github.com:baradatbiu/nodejs-graphql.git
```

or

```sh

git clone https://github.com/baradatbiu/nodejs-graphql.git
```

2. Install dependencies

```sh
npm install
```

### Usage

Copy `env.example` to `.env`

### Running the app

development

```bash
npm run start
```

watch mode

```bash
npm run start:dev
```

production mode

```bash
npm run start:prod
```

Open your web browser and navigate to

```bash
http://localhost:3000/graphql
```

### Modules

#### Users

Mutation - register

```graphql
mutation register($createUserInput: CreateUserInput!) {
  register(createUserInput: $createUserInput) {
    id
    firstName
    secondName
    email
    password
  }
}
```

Input example

```json
{
  "createUserInput": {
    "firstName": "first name",
    "lastName": "last name",
    "password": "secret777",
    "email": "met777@gmail.com"
  }
}
```

Query - user

```graphql
{
  user(id: "62c1a02510c30533de61de54") {
    email
    id
    secondName
    password
    firstName
  }
}
```

Query - jwt

```graphql
{
  jwt(getJWTInput: { email: "met777@gmail.com", password: "secret777" }) {
    jwt
  }
}
```

#### Genres

Mutation - createGenre

```graphql
mutation createGenre($createGenreInput: CreateGenreInput!) {
  createGenre(createGenreInput: $createGenreInput) {
    id
    name
    country
    description
    year
  }
}
```

Query variables

```json
{
  "createGenreInput": {
    "name": "some name",
    "description": "description",
    "country": "country",
    "year": 2049
  }
}
```

HTTP Headers

```json
{
  "Authorization": "Bearer {token_string}"
}
```

Mutation - updateGenre

```graphql
mutation updateGenre($updateGenreInput: UpdateGenreInput!) {
  updateGenre(updateGenreInput: $updateGenreInput) {
    name
    country
    description
    year
  }
}
```

Query variables

```json
{
  "updateGenreInput": {
    "id": "{existed_id}",
    "name": "new-name",
    "description": "new-descriptions",
    "country": "new-country",
    "year": 2222
  }
}
```

HTTP Headers

````json
{
  "Authorization": "Bearer {token_string}"
}

Mutation - deleteGenre

```graphql
mutation deleteGenre($id: String!) {
  deleteGenre(id: $id) {
    acknowledged
    deletedCount
  }
}
````

Query variables

```json
{
  "id": "{existed_id}"
}
```

HTTP Headers

````json
{
  "Authorization": "Bearer {token_string}"
}

Query - genres

```graphql
{
  genres {
    id
    name
    country
    description
    year
  }
}
````

Query - genre

```graphql
{
  genre(id: "{existed_id}") {
    name
    country
    description
    year
  }
}
```

#### Favourites

Mutation - addBandToFavourites

```graphql
mutation addBandToFavourites($id: String!) {
  addBandToFavourites(id: $id) {
    id
    userId
    bands {
      id
    }
    genres {
      id
    }
    artists {
      id
    }
    tracks {
      id
    }
  }
}
```

Query variables

```json
{
  "id": "{existed_id}"
}
```

HTTP Headers

```json
{
  "Authorization": "Bearer {token_string}"
}
```

Query - favourites

```graphql
{
  favourites {
    id
    userId
    bands {
      id
      website
    }
    genres {
      id
    }
    artists {
      id
    }
    tracks {
      id
    }
  }
}
```

HTTP Headers

```json
{
  "Authorization": "Bearer {token_string}"
}
```

#### Artists/Tracks/Bands/Albums/Favourites

You can use docs in graphql playground for these modules
