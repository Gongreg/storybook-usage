# Storybook Usage

This addon let you display the story's declaration inside a panel. This project extends initial 
[Storybook usage addon project](https://github.com/mthuret/storybook-addon-usage) created by mthuret.
But since it wasn't maintained and PR were ignored I created a new project for it.

![](docs/screenshot.png)

## Should I use it?

There is another great addon [Info addon](https://github.com/storybooks/storybook/tree/master/packages/addon-info).
It has a lot more functionality, but it doesn't use sidebar location. That makes it difficult to use with react-native-storybook. If you manage to set it up, try to use it instead of this one, since this project is not going to get any new functionality.

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
