import React from 'react';

const TitleHeader = () => {
  return(
    <div style={titleStyle}>Janky Chess</div>
  )
}

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'Arial',
  fontSize: '25px',
  marginBottom: '10px'
}

export default TitleHeader;
