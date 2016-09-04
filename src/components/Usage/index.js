import React, {Component, PropTypes} from "react";
import style from "./style";

export default class Usage extends Component {

  render() {
    let {storySource} = this.props;
    return (<div style={style.wrapper}>
      {storySource.split('\n').map(function (item, idx) {
        const tab = idx > 0 ? style.tab : null;
        return (
          <span style={tab} key={idx}>
            {item} <br/>
          </span>
        )
      })}</div>)
  }
}
