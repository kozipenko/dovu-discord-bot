
# Dovu Discord Bot

A serverless discord bot made for [Dovu](https://dovu.earth) and built on Vercel.
See it in action on the [Dovu Discord](https://discord.gg/y2dbChAD6N).


## Features

- **/tvl [currency]**: Shows the current total amount & total value locked of [$DOV](https://coinmarketcap.com/currencies/dovu/) in multiple currencies. 


## Deployment

Set environment variables

```bash
APP_ID="<Application ID>"
APP_TOKEN="<Token>"
APP_PUBLIC_KEY="<Public Key>"
```

Install & deploy

```bash
npm install

vercel
```


## Endpoints

`GET /api/register`

* Creates and registers global commands

`GET /api/invite`

* Generates discord invitation link

`POST /api/interactions`

* Discord interactions endpoint


## Authors

- [@kozipenko](https://www.github.com/kozipenko)
