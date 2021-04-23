# Video App

This is a repo for a recruitment task for [Digimonkeys](http://digimonkeys.com/) company.
You can reach app here: [video-app-snowy.vercel.app](https://video-app-snowy.vercel.app/)

## Description

This app stores videos added by user. Only YT and Vimeo videos can be added.
There are some additional functions like:

- you can play added videos
- you can add videos to _favorites_

## Instalation

Before run application you have to install dependencies. I used `yarn` so there is a lockfile in specific for `yarn` format. You can use `npm` but it will take more time.

```
npm i -g yarn
yarn
```

or

```
npm i
```

## Env Variables

Copy content of `.env.example` to new file `.env`. Now you have to create two apps ([YouTube](https://developers.google.com/youtube/v3/getting-started) and [Vimeo](https://developer.vimeo.com/api/guides/start)) and put keys to `.env`.

## Start app

Run

```
yarn dev
```

or

```
npm run dev
```

Now open http://localhost:3000 in your browser.
