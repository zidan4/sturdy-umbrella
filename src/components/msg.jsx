import { Component } from "react"

class Message extends Component {
  constructor ( ) {
    super( )
    this.state = { count: 0 }
    this.getCount.bind(this)
  }  
  getCount ( ) {
    this.setCount( prevState => { count: prevState.count + 1 } )
  }

  render ( ) {
    return <p>{this.count}</p>
  }
}

export default Message