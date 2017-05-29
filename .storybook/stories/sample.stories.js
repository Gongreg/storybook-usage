import React from "react";
import {storiesOf, action} from "@storybook/react";

const stories = storiesOf('Button', module);

const Button = ({text, onClick, names}) => {
  return <div>{names.map(n => {
    return (
      <button key={n} onClick={onClick}>
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
