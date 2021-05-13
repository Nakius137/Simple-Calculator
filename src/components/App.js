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

hadnlePerformance = props => {
  switch(props.content) {
      case 1: 
      return console.log("1")
      break;
      case 2: 
      return console.log("2")
      break;
      case 3: 
      return console.log("3")
      break;
      case 4: 
      return console.log("4")
      break;
      case 5: 
      return console.log("5")
      break;
      case 6: 
      return console.log("6")
      break;
      case 7: 
      return console.log("7")
      break;
      case 8: 
      return console.log("8")
      break;
      case 9: 
      return console.log("9")
      break;
      case 0: 
      return console.log("9")
      break;
      case "+": 
      return console.log("+")
      break;
      case "-": 
      return console.log("-")
      break;
      case "*": 
      return console.log("*")
      break;
      case "/": 
      return console.log("/")
      break;
      case "=": 
      return console.log("=")
      break;
      default:
          return console.log('fuck')
  }
}

render() {
    const {result, types} = this.state
    return (
      <>
        <Output result={result} />
        <ButtonList types={types} click={this.hadnlePerformance} />
      </>
    )
}

}
export default App;

