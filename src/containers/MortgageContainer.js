import React, {Component} from 'react';
import UserInputForm from '../components/UserInputForm';
import HouseValueView from '../components/HouseValueView';
import './MortgageContainer.css';

class MortgageContainer extends React.Component{
constructor(props){
  super(props)
  this.state = {
    salary: 0,
    deposit: 0,
    houseValue: "",
    interest: 0,
    years: 0,
    mortgageRepayment: 0
  }

  this.handleInputValues = this.handleInputValues.bind(this);
}

handleInputValues(salary, deposit, interest, years){
  this.setState({salary: salary, deposit: deposit, interest: interest, years: years})

}

calculateHouseValue(){

    const calculatedValue = ((this.state.deposit) + (this.state.salary*3));
    this.setState({houseValue: calculatedValue});

}
calculateRepayments(){
  let mortgage = this.state.houseValue - this.state.deposit;
  let int = this.state.interest;



  const calculated = ((int/100)*(mortgage))*(1/12);
  this.setState({mortgageRepayment: calculated});

}

componentDidUpdate(prevProps, prevState){
  if (prevState.salary !== this.state.salary){
  this.calculateHouseValue();
  }
  else if (prevState.houseValue !== this.state.houseValue) {
    this.calculateRepayments();
  }

}



  render(){
    return(
      <div className="main-container">
        <h1>Mortgage Calculator</h1>
        <UserInputForm onInputSubmit={this.handleInputValues}/>
        <HouseValueView data={this.state} />

      </div>
    )
  }
}

export default MortgageContainer;
