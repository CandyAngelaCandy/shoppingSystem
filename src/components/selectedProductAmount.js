/**
 * Created by 22935 on 2018/3/15.
 */
import React from 'react';
import '../stylus/selectedProductAmount.styl';

class SelectedProductAmount extends React.Component {
  render() {
    return (
      <div className="amount-wrapper">
         <div className="item-amount">
           <a href="#" className="pro_minus">-</a>
           <input type="text" value="1" className="text-amount" data-max="7" data-now="1"/>
           <a href="#" className="pro_plus">+</a>
         </div>
      </div>
    )
  }
}

export default SelectedProductAmount;
