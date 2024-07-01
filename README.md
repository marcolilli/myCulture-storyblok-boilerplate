# MyCulture Storyblok Boilerplate

This project serves as a starting point for a frontend project using Storyblok as a CMS.

It is based on [React](https://reactjs.org/) and build with [Vite](https://vitejs.dev/). It uses [Storyblok's React](https://github.com/storyblok/storyblok-react) SDK to fetch content from Storyblok.

## Getting started
Before you start, make sure you have a Storyblok account and a space to work with. You will need an access token to fetch content from Storyblok.
You can find your access token in the **Get Started** tab or in the **Space settings**.

Insert your access token into the `main.js` file.

> 💡 Please note, that this project is using the **draft** version of the Storyblok API. This means that you will see unpublished content in your project.
In a production environment, you should use the **published** version of the API and you should not expose your access token to the public.

### Install dependencies
Install the dependencies by running the following command in your terminal:
```bash
npm install
```

## Start the project
To start the project, run the following command in your terminal:
```bash
npm run dev
```

The server will start on `http://localhost:3000`. You can now open your browser and navigate to this URL to see the project.

> 💡 If you want to change the port, you can do so in the `vite.config.js` file. Please note that you will also need to change the port in `public/editor.html` to make the Storyblok editor work.