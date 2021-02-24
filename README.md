# Chrome extension starter project

The goal of this project is to allow you to quickly start creating extensions for Chrome using typescript and sass.

## Workflow

To start working on project use command below, it will start live server, and automaticly update extension

<pre>
npm run start
<span style="opacity: .5">or</span>
yarn start
</pre>
<hr>

To build extension

<pre>
npm run build
<span style="opacity: .5">or</span>
yarn build
</pre>
<hr>

To build production version

<pre>
npm run build:prod
<span style="opacity: .5">or</span>
yarn build:prod
</pre>

## Project structure

<pre>
src
├── index.html  <span style="opacity: .5"><- main file of extension popup</span>
├── manifest.json  <span style="opacity: .5"><- chrome extension configuration file</span>
├── background
│   └── background.ts  <span style="opacity: .5"><- entry point for background bundle</span>
├── content
│   ├── assets
│   │   └── scss
│   │       └── content.scss  <span style="opacity: .5"><- entry point for content styles</span>
│   └── content.ts  <span style="opacity: .5"><- entry point for content bundle</span>
├── popup
│   ├── assets
│   │   └── popup.scss  <span style="opacity: .5"><- entry point for popup window styles</span>
│   └── popup.ts  <span style="opacity: .5"><- entry point for popup bundle</span>
└── shared  <span style="opacity: .5"><- directory with shared parts of project like utils etc.</span>
</pre>

You can read more about `manifest.json` and extension configuration at: https://developer.chrome.com/docs/extensions/mv2/manifest/
