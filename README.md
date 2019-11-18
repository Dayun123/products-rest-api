# Products REST API

A simple REST API for querying and performing CRUD operations on a collection of products.

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
#### Routes


Accepts requests at the following routes

|  Method | Path          | Description           |
| --------| ------------- | ----------------------|
| GET     | /products     | Returns all products  |
| GET     | /products/:id | Return a product      |
| POST    | /products     | Create a product      |
| DELETE  | /products/:id | Delete a product      |

---
#### API Key

Access to all routes requires an `apiKey` query string parameter, which is setup as `abc123` in the default app. 

So, to get a listing of all products, the following request would be neccessary:

`GET http://localhost:3000/products?apiKey=abc123`

---
#### Search

To search for a product, append the `keyword` query string to the `GET /products` route, like so

`GET http://localhost:3000/products?apiKey=abc123&keyword=dell`

The number of results can be filtered with the `numResults` query string parameter:

`GET http://localhost:3000/products?apiKey=abc123&keyword=dell&numResults=3`

---
#### Response Format

All successful responses will be a JSON object with either an array of products or a single product. If there are no products for a given query, an empty JSON object is returned in the response.


Error responses will consist of a JSON object with `statusCode` and `statusMessage` properties, like so:

```
{
  "statusCode": 401,
  "statusMessage": "Must provide a valid API Key"
}
```

---
#### Creating A Product

To create a product, send a JSON object in the request body with the format:

```
{
  "name": "Pencil Sharpener",
  "price": 12.99,
  "brand": "X-Acto"
}
```

Make sure the request has the following header:
```
Content-Type: 'application/json'
```

You can add any fields you like, those are the ones that come 'stock' with the app and are required in order to create a new product.