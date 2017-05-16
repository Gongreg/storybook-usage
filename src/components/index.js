import React from 'react';

export default ({storySource}) => (
  <div style={style.wrapper}>
    {storySource.split('\n').map((item, idx) => (
      <span key={idx}>
        {item} <br/>
      </span>
    ))}
  </div>
);

const style = {
  wrapper:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    color: 'rgb(68, 68, 68)',
    fontSize: 12,
    letterSpacing: 1,
    textDecoration: 'none',
    listStyleType: 'none',
    backgroundColor: 'rgb(250, 250, 250)',
    padding: '10px',
    margin: '10px'
  },
};
