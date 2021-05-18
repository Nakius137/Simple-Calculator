import React from 'react'
import ButtonList from "./ButtonList"
import Output from './Output'

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    result: 0,
    types: [
      {
        id: 0, 
        content: 1,
        type: "number"
      },
      {
        id: 1, 
        content: 2,
        type: "number"
      },
      {
        id: 2, 
        content: 3,
        type: "number"
      },
      {
        id: 3, 
        content: 4,
        type: "number"
      },
      {
        id: 4, 
        content: 5,
        type: "number"
      },
      {
        id: 5, 
        content: 6,
        type: "number"
      },
      {
        id: 6, 
        content: 7,
        type: "number"
      },
      {
        id: 7, 
        content: 8,
        type: "number"
      },
      {
        id: 8, 
        content: 9,
        type: "number"
      },
      {
        id: 9, 
        content: 0,
        type: "number"
      },
      {
        id: 10, 
        content: "+",
        type: "operator"
      },
      {
        id: 11, 
        content: "-",
        type: "operator"
      },
      {
        id: 12, 
        content: "*",
        type: "operator"
      },
      {
        id: 13, 
        content: "/",
        type: "operator"
      },
      {
        id: 14, 
        content: "=",
        type: "operator"
      }]    
}
  }

hadnlePerformance = (content,result) => {
  this.setState({
    result: content
  })
  console.log(result)
  // switch(content) {
  //     case 1: 
  //     return console.log("1")
  //     case 2: 
  //     return console.log("2")
  //     case 3: 
  //     return console.log("3")
  //     case 4: 
  //     return console.log("4")
  //     case 5: 
  //     return console.log("5")
  //     case 6: 
  //     return console.log("6")
  //     case 7: 
  //     return console.log("7")
  //     case 8: 
  //     return console.log("8")
  //     case 9: 
  //     return console.log("9")
  //     case 0: 
  //     return console.log("9")
  //     case "+": 
  //     return console.log("+")
  //     case "-": 
  //     return console.log("-")
  //     case "*": 
  //     return console.log("*")
  //     case "/": 
  //     return console.log("/")
  //     case "=": 
  //     return console.log("=")
  //     default:
  //         throw Error
  // }

 
}

render() {
    const {result, types} = this.state
    return (
      <>
        <Output types={types} result={result} />
        <ButtonList types={types} click={this.hadnlePerformance} />
      </>
    )
}

}
export default App;

