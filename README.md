# Storybook Usage

This addon let you display the story's declaration inside a panel. This project extends initial 
[Storybook usage addon project](https://github.com/mthuret/storybook-addon-usage) created by mthuret.
But since it wasn't maintained and PR were ignored I created a new project for it.

![](docs/screenshot.png)

## Getting Started

First, install the addon

```shell
npm install storybook-usage
```

Add this line to your `addons.js` file (create this file inside your storybook config directory if needed).

```js
import 'storybook-usage/register';
```


Add those lines to your storybook config file

```js
import {Usage} from 'storybook-usage'
storybook.addDecorator(Usage);
```
