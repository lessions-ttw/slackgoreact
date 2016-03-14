import React from 'react';

class Channel extends React.Component{
  render(){
    return (
      <li>Channel name</li>
    )
  }
}

ReactDom.render(<Channel />, document.getElementById('app'));
