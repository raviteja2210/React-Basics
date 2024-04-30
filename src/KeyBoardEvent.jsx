import React from 'react';

class   KeyBoardEvent extends React.Component {
  handleKeyDown = (event) => {
    // eslint-disable-next-line react/jsx-no-undef
    console.log('Key down event:', event.key);
    // Perform actions based on the key pressed
  }

  render() {
    return (
      <div onKeyDown={this.handleKeyDown}>
        Press a key...
      </div>
    );
  }
}

export default KeyBoardEvent;
