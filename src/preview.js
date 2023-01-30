import React from 'react';
import addons from '@storybook/addons';
import {EVENT_ID} from './consts';
import _ from 'lodash/fp';
import { inspect } from 'util';

export function Usage(fn) {
  let story = fn();
  const storybook = getComponentRepresentation(story);

  const channel = addons.getChannel();
  channel.emit(EVENT_ID, {storybook});
  return fn();
}

const getSpaces = depth => _.repeat(depth * 4, '\u00a0');

const getArrayOfAllNonDefaultProps = (props, defaultProps) => _.toPairs(props).filter(
  ([name, value]) => !defaultProps || defaultProps[name] !== value
);

const getFuncName = value => value.name || 'anonymous';
const isObject = (value) => _.isObject(value) && !_.isArray(value);

const renderValue = _.cond([
  [_.isFunction, getFuncName],
  [isObject, objToString],
  [_.stubTrue, inspect]
]);

function objToString(obj) {
  const representation =
    _.toPairs(obj)
      .map(([key, value]) => `${key}: ${isObject(value) ? objToString(value) : renderValue(value)}`)
      .join(', ');

  return `{${representation}}`;
}

function getComponentRepresentation(story) {
  const name = story.type.displayName || story.type.name;
  const props = getArrayOfAllNonDefaultProps(story.props, story.type.defaultProps);

  if (props.length === 0) {
    return `<${name}/>\n`;
  }

  const propsWithoutChildren = props.filter(([name, value]) => name !== 'children');
  const propsRepresentation = propsWithoutChildren.map(
    ([name, value]) => getSpaces(1) + (value === true ? name : `${name}={${renderValue(value)}}`) + '\n'
  ).join('');

  const childRepresentation = story.props.children && React.Children.map(story.props.children,
      child => _.isObject(child)
        ? getComponentRepresentation(child).split('\n').map(x => x && getSpaces(1) + x).join('\n')
        : getSpaces(1) + child + '\n'
    ).join('');
  
  // if storybook-usage is present in props, then we don't want to render the component since it's the storybook-usage component
  if (propsRepresentation.includes('storybook-usage')) {
    return [
      childRepresentation
    ].filter(_.identity).join('');
  }

  return [
    `<${name}`,
    propsRepresentation && '\n' + propsRepresentation,
    !childRepresentation && '/>\n',
    childRepresentation && '>\n' + childRepresentation + `</${name}>\n`
  ].filter(_.identity).join('');
}
