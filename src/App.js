import React from 'react'
import ButtonList from "./components/ButtonList"
import Output from './components/Output'
import "./styles.css"

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
        content: "÷",
        type: "operator"
      },
      {
        id: 14, 
        content: "=",
        type: "operator"
      },
      {
        id: 15, 
        content: "Clear",
        type: "operator"
      },
      {
        id: 16, 
        content: "Del last num",
        type: "operator"
      },
    ]    
}
  }

handlePerformance = (content,result) => {
  switch(content) {
      case 1: 
      return this.setState({
        result: result + "1"
      })
      case 2: 
      return this.setState({
        result: result + "2"
      })
      case 3: 
      return this.setState({
        result: result + "3"
      })
      case 4: 
      return this.setState({
        result: result + "4"
      })
      case 5: 
      return this.setState({
        result: result + "5"
      })
      case 6: 
      return this.setState({
        result: result + "6"
      })
      case 7: 
      return this.setState({
        result: result + "7"
      })
      case 8: 
      return this.setState({
        result: result + "8"
      })
      case 9: 
      return this.setState({
        result: result + "9"
      })
      case 0: 
      return this.setState({
        result: result + "0"
      })
      case "+": 
      return this.setState({
        result: parseFloat(result) + " + "
      })
      case "-": 
      return this.setState({
        result: parseFloat(result) + " - "
      })
      case "*": 
      return this.setState({
        result: parseFloat(result) + " * "
      })
      case "÷": 
      return this.setState({
        result: parseFloat(result) + " / "
      })
      case "=": 
      return this.setState({
        result: eval(result)
      })
      case "Clear":
        return this.setState({
          result: 0
        })
      case "Del last num":
        return this.setState({
          result: result.substring(0, result.length - 1)
        })
      default:
          throw Error
  }

}

render() {
    const {result, types} = this.state
    return (
      <>
        <Output types={types} result={result} />
        <ButtonList result={result} types={types} click={this.handlePerformance} />
      </>
    )
}

}
export default App;

