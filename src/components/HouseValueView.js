import React from 'react';

const HouseValueView = (props) => {
  console.log(props.houseValue);
  console.log(props.mortgageRepayment);
  return(
  <div className="house-value">

    <h3>Maximum value of property: £{props.data.houseValue}</h3>
    <h4>Monthly repayments for your interest-only mortgage would be: £{props.data.mortgageRepayment}</h4>
  </div>
)
}

export default HouseValueView;
