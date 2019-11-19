# Products REST API

A simple REST API for querying and performing CRUD operations on a collection of products.

## Project Goals

This project is meant to showcase a very simple REST API implementation, using knowledge I picked up from Robert Bunch's [Just Express](https://www.udemy.com/course/just-express-with-a-bunch-of-node-and-http-in-detail) Udemy tutorial series, as well as some stuff I've learned checking out the Express docs. 

I'm working through the following concepts:

- App vs. router middleware
- Express error-handling middleware
- HTTP status codes and well-formed error messages
- Basic search functionality
- Most CRUD operations (Create, Read, Delete)

---
### Caveats

As I'm trying to understand the Express framework at a very basic level, I will *NOT* be using:

- Any client-side technology
- A database 
- User accounts 
- Testing
- Sessions or cookies

## Installation

Clone the repo and run `npm install`

```
git clone https://github.com/Dayun123/products-rest-api
npm install
```

## Usage

Start the server

```
DEBUG=products-api:* npm start
```

All requests can then be made to the base url 

```bash
http://localhost:3000
``` 

---
### Routes

Accepts requests at the following routes

|  Method | Path          | Description           |
| --------| ------------- | ----------------------|
| GET     | /products     | Returns all products  |
| GET     | /products/:id | Return a product      |
| POST    | /products     | Create a product      |
| DELETE  | /products/:id | Delete a product      |

---
### API Key

Access to all routes requires an `apiKey` query string parameter, which is setup as `abc123` in the default app. 

So, to get a listing of all products, the following request would be neccessary:

`GET http://localhost:3000/products?apiKey=abc123`

---
### Search

To search for a product, append the `keyword` query string to the `GET /products` route, like so

`GET http://localhost:3000/products?apiKey=abc123&keyword=dell`

The number of results can be filtered with the `numResults` query string parameter:

`GET http://localhost:3000/products?apiKey=abc123&keyword=dell&numResults=3`

---
### Response Format

All successful responses will be a JSON object with either an array of products or a single product. If there are no products for a given query, an empty JSON object is returned in the response.

Error responses will consist of a JSON object with `statusCode` and `statusMessage` properties, like so:

```
{
  "statusCode": 401,
  "statusMessage": "Must provide a valid API Key"
}
```

---
### Creating A Product

To create a product, send a JSON object in the request body with the format:

```
{
  "id": 1,
  "name": "Pencil Sharpener",
  "price": 12.99,
  "category": "Office Supplies"
}
```

Make sure the request has the following header:

```
Content-Type: 'application/json'
```

You can add any fields you like, those are the ones that come 'stock' with the app and are required in order to create a new product.