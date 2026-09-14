import { Component } from "react"

class Message extends Component {
  constructor ( ) {
    super( )
    this.state = { count: 0 }
    this.getCount = this.getCount.bind(this)
  }

  getCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.getCount}>Submit</button>
    </div>)
  }
}

export default Message