# Own Chat

> Own a Chat AI with collaboration

## Introduction

Own Chat is tool to help you create your own chatGPT, Our mission is to make everyone to own
a ai assistant easily.

## Features

- Team management, Collaboration for one OpenAI API key
- Share your ChatGPT conversations with one-click
- One-click to deploy a provider
- Elegant UI, Responsive design, dark mode

## One-Click to deploy

One-Click to deploy and get a OwnChat provider server.

1. Get a [OpenAI API Key](https://platform.openai.com/account/api-keys);

2. Click to deploy [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fforsigner%2Fown-chat-provider-next&env=OPENAI_API_KEY,AUTHORIZATION_CODE)

3. Set `OPENAI_API_KEY` and `AUTHORIZATION_CODE`

4. Get a personal ChatGPT server like https://own-chat-official-provider.vercel.app

## Develop

After clone the repo, in the root dir:

```bash
yarn install # Install the dependencies

yarn build # First time, you need to build
```

Run the web app:

```bash
cd apps/web
yarn dev
```

## ⚖️ License

AGPL 3.0
