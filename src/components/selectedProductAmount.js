/**
 * Created by 22935 on 2018/3/15.
 */
import React from 'react';
import '../stylus/selectedProductAmount.styl';

class SelectedProductAmount extends React.Component {
  constructor(props){
    super(props);
    this.handleProductAmountChange = this.handleProductAmountChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {value:1};
  }

  convertToNumber(input){
    let value = parseInt(input);

    if(value.toString() === 'NaN') {
      value = 0;
    }

    return value;
  }

  handleProductAmountChange(e){

    let el = e.target;//获取点击的DOM元素
    let elClassName = el.className;//获取点击元素的类名
    let inputEle = this.refs.inputAmount;
    let inputValue = parseInt(inputEle.value);
    let reduceEle = this.refs.proMinus;

    switch (elClassName){
      case 'pro_minus':
        if(inputValue>1){
          inputEle.value = inputValue - 1;
        }
        if(inputEle.value<=1){
         reduceEle.style.color = '#e5e5e5';
        }
         break;
      case 'pro_plus':
        inputEle.value = inputValue + 1;
        reduceEle.style.color  = 'rgb(60, 60, 60)';
         break;
      default:
         break;
    }
    this.setState({value:inputEle.value});
    this.props.onInputValueChange(inputEle.value);
  }

  handleInputChange(e) {
    let value = 1;


    if(e.target.value) {
      value = this.convertToNumber(e.target.value);
    }

    this.setState({
      value,
    });

    this.props.onInputValueChange(value);
  }

  //如何将当前input标签的值传递出去。
  render() {
    return (
      <div className="amount-wrapper">
         <div className="item-amount">
           <a href="#" className="pro_minus" ref="proMinus" onClick={this.handleProductAmountChange}>-</a>
           <input type="text" value={this.state.value} className="text-amount" data-max="7"
                  data-now="1" ref="inputAmount" onChange={this.handleInputChange}/>
           <a href="#" className="pro_plus" onClick={this.handleProductAmountChange}>+</a>
         </div>
      </div>
    )
  }
}

export default SelectedProductAmount;
