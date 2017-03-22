import React, {Component, PropTypes} from "react";
import style from "./style";

export default class Usage extends Component {

  render() {
    let {storySource} = this.props;
    const lines = storySource.split('\n');
    return (<div style={style.wrapper}>
      {lines.map(function (item, idx) {
        return (
          <span key={idx}>
            {item} <br/>
          </span>
        )
      })}</div>)
  }
}
