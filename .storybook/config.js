import * as storybook from '@kadira/storybook';
import {Usage} from "../src"


const req = require.context('./', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

storybook.addDecorator(Usage);
storybook.configure(loadStories, module);
