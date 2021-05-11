import './App.css';
import React from 'react'
import ButtonList from "./ButtonList"

class App extends React.Component {
  state = {
    types: [
      {
        id: 0, 
        type: 1
      },
      {
        id: 1, 
        type: 2
      },
      {
        id: 2, 
        type: 3
      },
      {
        id: 3, 
        type: 4
      },
      {
        id: 4, 
        type: 5
      },
      {
        id: 5, 
        type: 6
      },
      {
        id: 6, 
        type: 7
      },
      {
        id: 7, 
        type: 8
      },
      {
        id: 8, 
        type: 9
      },
      {
        id: 9, 
        type: 0
      },
      {
        id: 10, 
        type: "+"
      },
      {
        id: 11, 
        type: "-"
      },
      {
        id: 12, 
        type: "*"
      },
      {
        id: 13, 
        type: "/"
      },
      {
        id: 14, 
        type: "="
      }]
}
  render() {
    return (
      <>
        <ButtonList types={this.state.types}/>
      </>
    )
  }
}

export default App;
