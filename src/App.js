import React, {
  Component
} from "react";
import Buttons from './components/buttons.jsx';
import Result from './components/result.jsx';
import "./components/calc.css";
/**this is the main class */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
  
      result: "0",
    }
    this.handleclicks = this.handleclicks.bind(this);
  }

  handleclicks = (value) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
        if (this.state.result === "0") {
          this.setState({
        
            result: value
          });

        } else {
          this.setState({
           
            result: this.state.result + value
          });
        }
        break;
      case '=':
        //todo add a regex test to see if the statment is correct before passing it to eval
        //todo limit the result  to 14
        console.log("eq") ; 
        console.log(this.state.result);
        this.setState({
          result: eval(this.state.result) ,
        })
        break;
      case 'c':
        this.setState({
          result: '' ,
        
        })
        break;
       
      default:
        break;
    }

  }

  render() {
    return ( < div className = "myCalculator" >

      <h2>Calculator</h2>
      <
      Result result = {
        this.state.result 
        
      }
      /> <
      Buttons Buttonclicked = {
        this.handleclicks
      }
      /> </div>
    );
  }
}

export default App;