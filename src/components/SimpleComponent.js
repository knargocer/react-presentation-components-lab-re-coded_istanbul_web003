// Code SimpleComponent Here
import React, {Component} from 'react';
class SimpleComponent extends Component {
  constructor(props) {
    super(props);
 
    // Initial state here...
    this.state = {
      mood:"happy",
    };
  }
 
  render() {
        return (
        <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
        )
    }
  }
  export default SimpleComponent; 