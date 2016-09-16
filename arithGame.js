let Game = React.createClass({
  getInitialState() {
        return {
      num1: (Math.floor(Math.random() * 25)),
      num2: (Math.floor(Math.random() * 25)),
      answer: '',
      count: 0
    }
  },

  render() {
    let {answer} = this.state;
    let count = this.state.count;
    return (     
      <div>
        <h2>Can you add these numbers?</h2><span id="score">Score: {count}</span>
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
        <div className="btnContainer2">
          <button className="btn btn-danger btn-md col-xs-6" onClick={this.reset}>Reset</button>
          <button className="btn btn-primary btn-md col-xs-6" onClick={this.skip}>Skip</button>
        </div>
      </div>
      );
  },

  addScore(){
    this.setState({
      count: this.state.count + 1
    });
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
      this.addScore();
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
  },

  reset() {
    this.setState({
      count: 0
    });
    this.clearNum();
    this.randomNum();
  },

  skip() {
    let numTotal = this.state.num1 + this.state.num2;
    let notifier = document.getElementById("answer");
    this.clearNum();
    this.randomNum();
    notifier.innerHTML = "The Answer Was</br>" + numTotal;
    setTimeout(function() {
      notifier.innerHTML = '';
    },1200);
  }

}); //END of Game component

ReactDOM.render(
  <Game/>,
  document.getElementById('mainContainer')
  );