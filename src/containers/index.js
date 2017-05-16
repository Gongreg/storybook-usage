import React, {Component} from 'react';
import UsageComponent from '../components';
import {EVENT_ID} from '../';

export default class Usage extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = { storybook: ''};
    this._listener = d => {
      this.setState({storybook: d.storybook})
    };
  }

  componentDidMount() {
    this.props.channel.on(EVENT_ID, this._listener);
  }

  componentWillUnmount() {
    this.props.channel.removeListener(EVENT_ID, this._listener);
  }

  render() {
    const {storybook} = this.state;
    return <UsageComponent storySource={storybook}/>;
  }
}
