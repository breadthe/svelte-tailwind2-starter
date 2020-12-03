# Svelte + TailwindCSS 2.0 + RollupJS starter

Starter template for [Svelte](https://svelte.dev) + [TailwindCSS](https://tailwindcss.com) apps.

It has built-in support for TailwindCSS 2.0, while the bundling is handled by Rollup.

**Note** At the time of this posting (November 18, 2020), some of the required tools for PostCSS 8.0 haven't been updated yet. In the interim, this template uses the [PostCSS 7.0 compatibility build](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build).

There's also a simple dark/light mode switch 👇

![Light theme](https://user-images.githubusercontent.com/17433578/100961350-d4f75200-34e7-11eb-8b0a-148fb11cd766.png)

![Dark theme](https://user-images.githubusercontent.com/17433578/100961354-d9236f80-34e7-11eb-9f37-3d682bc47255.png)

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
