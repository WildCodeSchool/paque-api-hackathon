# Easter Wild Hackaton
## Easter Universe (HTTP)

These HTTP endpoints, allow you to explore the Easter universe... 

### Available endpoints and response example

GET `/api/eggs`:
```javascript
[
  {
    "id": "",
    "name": "",
    "avatar": "",
  },
  {
    "id": "",
    "name": "",
    "avatar": ""    
  },
  {
    "id": "",
    "name": "",
    "avatar": ""    
  }
]
```
GET `/api/eggs/:id` or `/api/eggs/random`:
```javascript
{
    "id": "",
    "name": "",
    "color": "red",
    "caliber": "S",
    "animal": "chicken",
    "farming": 1, // 1 » : Plein air  –  « 2 » : Au sol –   « 3 » : En cage  –  « 0 » : Bio ;
    "country": "FR",
    "validity": new Date(),
    "rarity": "",
    "avatar": "",
    "powers": "string separate by semicolon"
}
```

GET `/api/characters`:
```javascript
[
  {
    "id": "",
    "name": "",
    "avatar": "",
  },
  {
    "id": "",
    "name": "",
    "avatar": ""    
  }
]
```
GET `/api/characters/:id` or GET `/api/characters/random`:

```javascript
{
    "id": "",
    "firstName": "",
    "lastName": "",
    "species": "",
    "height": "", 
    "weight": "",
    "age": "",
    "avatar": "",
    "skills": "string separate by semicolon"
}
```
## Easter Stock Market (WebSocket)

These WebSocket endpoints, help you to track share prices of both chocolate, milk and egg !

### Available endpoints and response example

`/api/stocks/chocolates`:
```javascript
{
  "date": "2019-03-24T23:07:36.601Z",
  "price": "7.85",
  "amount": 500,
  "unit": "g",
  "trend": "up",
  "trades": 1434
}
```

`/api/stocks/milks` :
```javascript
{
  "date": "2019-03-24T23:06:07.277Z",
  "price": "36.78",
  "amount": 1000,
  "unit": "l",
  "trend": "flat",
  "trades": 1961
}
```

`/api/stocks/eggs` :
```javascript
{
  "date": "2019-03-24T23:16:53.632Z",
  "price": "5.52",
  "amount": 1000,
  "unit": "g",
  "trend": "flat",
  "trades": 1449
}
```
