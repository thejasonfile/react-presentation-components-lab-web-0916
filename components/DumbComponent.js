const React = require('react');

class DumbComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      mood: 'happy'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    var newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood: newMood});
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

module.exports = DumbComponent;