let Game = React.createClass({
  getInitialState() {
        return {
      num1: (Math.floor(Math.random() * 10)),
      num2: (Math.floor(Math.random() * 10)),
      answer: ''
    }
  },

  render() {
    let {answer} = this.state;
    return (     
      <div>
        <h2>Can you add these numbers?</h2>
        <h1 id="answer"></h1>
        <h3>{this.state.num1} + {this.state.num2} = <span><input className="answerInput" ref="answer" value={answer} type="number" onChange={this.getVal}/></span></h3>
        <div className="BtnContainer text-center">
         <button className="btn btn-md btn-primary numBtn col-xs-4" id = "1" onClick={this.btnPress}>1</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="2" onClick={this.btnPress}>2</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="3" onClick={this.btnPress}>3</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="4" onClick={this.btnPress}>4</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="5" onClick={this.btnPress}>5</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="6" onClick={this.btnPress}>6</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="7" onClick={this.btnPress}>7</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="8" onClick={this.btnPress}>8</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="9" onClick={this.btnPress}>9</button>
         <button className="btn btn-md btn-danger  numBtn col-xs-4" onClick={this.clearNum}>Clear</button>
         <button className="btn btn-md btn-primary numBtn col-xs-4" id="0" onClick={this.btnPress}>0</button>
         <button className="btn btn-md btn-success numBtn col-xs-4" onClick={this.submitAnswer}>Submit</button>
        </div>
      </div>
      );
  },

  getVal(e) {
     let answer = this.refs.answer.value;
       this.setState({answer: answer + e.target.id}); 
  },

  randomNum () {
    this.setState({
      num1: (Math.floor(Math.random() * 10)),
      num2: (Math.floor(Math.random() * 10))
    });
  }, //End of randomNum

  clearNum() {
    this.setState({
      answer: ''
    });
  },

  submitAnswer() {
    let userAnswer = parseInt(this.refs.answer.value);
    let numTotal = this.state.num1 + this.state.num2;
    let notifier = document.getElementById("answer");
    if (userAnswer === numTotal) {
      notifier.innerHTML = "Good Job!</br>" + numTotal;
    } else {
      notifier.innerHTML = "INCORRECT</br> The correct answer is: " + numTotal;
    }
    setTimeout(function() {
      notifier.innerHTML = '';
    }, 1600);
    this.randomNum();
    this.clearNum();
  },

  btnPress(e) {
    this.getVal(e);
    console.log(e.target.id);
  
  }

}); //END of Game component

ReactDOM.render(
  <Game/>,
  document.getElementById('mainContainer')
  );