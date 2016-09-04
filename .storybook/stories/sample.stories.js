import React from "react";
import {storiesOf, action} from "@kadira/storybook";

const stories = storiesOf('Button', module);

const Button = ({text, onClick, names}) => {
  return <div>{names.map(n => {
    return (
      <button onClick={onClick}>
        {`${text} ${n}`}
      </button>
    )
  })}</div>
};

const fnc = () => {
};

stories.add('Hello World', function () {
  return <Button onClick={action('Hello World')}
                 text="Hello "
                 names={['Mike', 'Mary']}
  />;

});