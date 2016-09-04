import addons from "@kadira/storybook-addons";
import {EVENT_ID} from "./";
import _ from "lodash";

export function Usage(fn) {
  let story = fn();
  let first = `<${story.type.name} `;
  _.toPairs(story.props).forEach((p) => {
    let value;
    if (typeof p[1] === 'function') {
      value = p[1].name ? `{${p[1].name}}` : '{anonymous}';
    } else if (typeof p[1] === 'string') {
      value = `${JSON.stringify(p[1])}`;
    }
    else if (_.isObject(p[1]) && !_.isArray(p[1])) {
      value = `{${objToString(p[1])}}`;
    }
    else {
      value = `{${JSON.stringify(p[1])}}`;
    }
    first += ` ${p[0]}=${value}\n`;
  });
  first += " />";
  const channel = addons.getChannel();
  channel.emit(EVENT_ID, {storybook: first});
  return fn();
}

function objToString (obj) {

  var str = '{';
  for(let p in obj){
    if (obj.hasOwnProperty(p)) {
      let value;
      if(_.isObject(obj[p]) && !_.isArray(obj[p])) {
        value = objToString(obj[p]);
      }else{
        value = JSON.stringify(obj[p]);
      }
      str += p + ': ' + value;
    }
  }
  str += '}';
  return str;
}