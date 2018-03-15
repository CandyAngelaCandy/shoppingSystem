/**
 * Created by 22935 on 2018/3/15.
 */
import React from 'react';
import '../stylus/productListItem.styl';
import GetEveryProductType from '../components/getEveryProductType';
import SelectedProductAmount from '../components/selectedProductAmount';

class ProductListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let productItem = this.props.productItem;
    let indexInPreferentialProctList = null;
    return (
        <ul className="item-content clearfix">
          <li className="td td-name">{productItem.name}</li>
          <li className="td td-unit">{productItem.unit}</li>
          <li className="td td-price">{productItem.price}</li>
          <li className="td td-type">
            <GetEveryProductType barcode={productItem.barcode}></GetEveryProductType>
          </li>
          <li className="td td-amount">
            <SelectedProductAmount></SelectedProductAmount>
          </li>
          <li className="td td-op"><a href="">购买</a></li>
        </ul>
    )

  }
}

export default ProductListItem;
