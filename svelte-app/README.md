# Svelte + TailwindCSS 2.0 + RollupJS starter

Starter template for [Svelte](https://svelte.dev) + [TailwindCSS](https://tailwindcss.com) apps.

It has built-in support for TailwindCSS 2.0, while the bundling is handled by Rollup.

There's also a simple dark/light mode switch, and a surprise button 👇

![Light theme](https://user-images.githubusercontent.com/17433578/103722821-7285eb80-4f96-11eb-85d8-07549005b98c.png)

![Dark theme](https://user-images.githubusercontent.com/17433578/103722826-774a9f80-4f96-11eb-97c6-fa4a34587f9b.png)

## 🚨 Limitations

In **development** mode (running `npm run dev` / `yarn dev`), the CSS bundle includes *all* of TailwindCSS and weighs in at ~6.8MB. You don't want to deploy this to production.

In **production** mode (running `npm run build` / `yarn build`), all the unused CSS styles are purged, dropping the bundle to a much more manageable size (~7KB in this case). However, I haven't yet found a way to stop Tailwind from purging dynamic Svelte classes (such as `class:dark` or `class:from-blue-700={$dark}`).

As a result, the production bundle won't contain such dynamic classes. To get around this, in `tailwind.config.js`, under `purge`, add an `options` object with a `safelist` array containing all the classes you wish to protect from purging:

```diff
purge: {
    enabled: production,
    content: [
        './src/**/*.html',
        './src/**/*.svelte',
    ],
    options: {
        safelist: [
            'border-blue-300',
            'border-orange-500',
            'border-pink-100',
            'border-pink-900',
            'dark',
            'from-blue-500',
            'from-blue-700',
            'from-yellow-200',
            'text-pink-100',
            'text-pink-900',
            'to-blue-800',
            'to-pink-300',
            'to-purple-800',
            'to-yellow-500',
        ],
    }
},
```

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

To create an optimised (production) version of the app:

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
