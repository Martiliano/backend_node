# API NODE.JS

## Dependencias

* Typescript
* Express
* MongoDB
* Bycript
* Jwt by jsonwebtoken

## Descrição

Estrutura basica de uma API RESTFUL utilizando o NODE.JS, implementada funcionalidade de inclusão de conta (usuario), upload, login e autenticação.

## Implementado utilizando

* Factory
* Singleton
* SOLID
* Testes
* Design Patterns

## Executar em modo desenvolvedor

yarn dev

## Teste cadastra account

curl -X POST \
  "http://localhost:5050/api/signup" \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  -d '
  {
    "name": "Test Name",
    "email": "test@email.com",
    "password": "123456",
    "role": "Test",
    "phone": "5554988776655"
  }'

## Teste Login

curl -X POST \
  "http://localhost:5050/api/login" \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  -d '
  {
    "email": "test@email.com",
    "password": "123456"
  }'

* Resultado:

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQ0M2YxOWVhYWJmMDE1YTA4NmRmMCIsImlhdCI6MTY1NzAyOTc1MywiZXhwIjoxNjU3MTE2MTUzfQ.63HLgdqJGHd_3jHcU8o03NDmNTjyMfWm56EExWr0hIQ"}
