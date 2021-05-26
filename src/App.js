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

handlePerformance = content => {
  const { result } = this.state
if (result === undefined) {
  this.setState({
    result: content
  })
} else {
  switch(content) {
      case 1:
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "1")
        })
      } else {
      this.setState({
        result: result + "1"
      })}
      break;
      case 2: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "2")
        })
      } else {
      this.setState({
        result: result + "2"
      })}
      break;
      case 3: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "3")
        })
      } else {
      this.setState({
        result: result + "3"
      })}
      break;
      case 4: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "4")
        })
      } else {
      this.setState({
        result: result + "4"
      })}
      break;
      case 5:
        if (result === 0) {
          this.setState({
            result: parseFloat(result + "5")
          })
        } else {
        this.setState({
          result: result + "5"
        })}
      break;
      case 6: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "6")
        })
      } else {
      this.setState({
        result: result + "6"
      })}
      break;
      case 7: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "7")
        })
      } else {
      this.setState({
        result: result + "7"
      })}
      break;
      case 8: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "8")
        })
      } else {
      this.setState({
        result: result + "8"
      })}
      break;
      case 9: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "9")
        })
      } else {
      this.setState({
        result: result + "9"
      })}
      break;
      case 0: 
      if (result === 0) {
        this.setState({
          result: parseFloat(result + "0")
        })
      } else {
      this.setState({
        result: result + "0"
      })}
      break;
      case "+": 
      this.setState({
        result: result + " + "
      })
      break;
      case "-": 
      this.setState({
        result: result + " - "
      })
      break;
      case "*": 
      this.setState({
        result: result + " * "
      })
      break;
      case "÷": 
      this.setState({
        result: result + " / "
      })
      break;
      case "=": 
      this.setState({
        result: eval(result)
      })
      break;
      case "Clear": 
      this.setState({
          result: 0
        })
      break;
      case "Del last num":
      this.setState({
          result: result.toString().substring(0, result.length - 1)
        })
      break;
      default:
          throw Error
  }
}
}

render() {
    const {result, types} = this.state
    return (
      <>
        <Output 
        types={types} 
        result={result} />
        <ButtonList 
        result={result} 
        types={types} 
        click={this.handlePerformance} />
      </>
    )
}

}
export default App;

