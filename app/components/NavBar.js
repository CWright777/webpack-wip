import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default props => {
  return(
    <div>
      <AppBar
        style={{backgroundColor: 'purple'}}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={
          <img 
            src="https://s3-us-west-1.amazonaws.com/ulyngo/ULY_Logo_Turquoise+copybigger.png"
            className="UlyngoLogo"
          />
        }
      />
    </div>
  )
}
