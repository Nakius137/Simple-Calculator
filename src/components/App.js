import React from 'react'
import ButtonList from "./ButtonList"

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    result: 0,
    types: [
      {
        id: 0, 
        content: 1
      },
      {
        id: 1, 
        content: 2
      },
      {
        id: 2, 
        content: 3
      },
      {
        id: 3, 
        content: 4
      },
      {
        id: 4, 
        content: 5
      },
      {
        id: 5, 
        content: 6
      },
      {
        id: 6, 
        content: 7
      },
      {
        id: 7, 
        content: 8
      },
      {
        id: 8, 
        content: 9
      },
      {
        id: 9, 
        content: 0
      },
      {
        id: 10, 
        content: "+"
      },
      {
        id: 11, 
        content: "-"
      },
      {
        id: 12, 
        content: "*"
      },
      {
        id: 13, 
        content: "/"
      },
      {
        id: 14, 
        content: "="
      }]
}
}


render() {
    const { 
      type, 
      id, 
      content,
    } = this.state.types;
    return (
      <>
        <ButtonList type={type} content={content} key={id}/>
      </>
    )
}
}






export default App;

