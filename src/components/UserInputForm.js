import React, {Component} from 'react';
import './UserInput.css';

class UserInputForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      salaryInput: "",
      depositInput: "",
      interestRate:"",
      yearsInput: ""
    }
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleYearsChange = this.handleYearsChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSalaryChange(event){
    this.setState({salaryInput: event.target.value})
  }
  handleDepositChange(event){
    this.setState({depositInput: event.target.value})
  }
  handleInterestChange(event){
    this.setState({interestRate: event.target.value})
  }
  handleYearsChange(event){
    this.setState({yearsInput: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const salary = parseInt(this.state.salaryInput);
    const deposit = parseInt(this.state.depositInput);
    const interest = parseInt(this.state.interestRate);
    const years = parseInt(this.state.yearsInput);
    if(!salary || !deposit || !interest || !years) return;

    this.props.onInputSubmit(salary, deposit, interest, years);
    this.setState({salaryInput: "", depositInput: "", interest: "", years: ""});
  }



  render(){
    return(
      <form className= "salary-input" onSubmit={this.handleSubmit}>
        <label for="salary">Salary: </label>
        <input type="integer"
                name="salary"
                placeholder="salary"
                value={this.state.salaryInput}
                onChange={this.handleSalaryChange}/>

                <label for="deposit">Deposit: </label>
        <input type="integer"
                name="deposit"
                placeholder="deposit"
                value={this.state.depositInput}
                onChange={this.handleDepositChange}/>

                <label for="interest-rate">Current Interest Rate: </label>
        <input type="integer"
                name="interest-rate"
                placeholder="interest rate"
                value={this.state.interstRate}
                onChange={this.handleInterestChange}/>

                <label for="years">How many years would you like to take your mortgage over? </label>
        <input type="integer"
                name="years"
                placeholder="years"
                value={this.state.yearsInput}
                onChange={this.handleYearsChange}/>
            <input type="submit" value="Calculate"/>
        </form>
    )
  }
}

export default UserInputForm;
