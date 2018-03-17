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
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.state = {CurrentProductAmount:1};//保存为这种形式：'ITEM000003-2'
  }

  handleAddToCart(e,productBarcode){//问题1：渲染时候数据已经传递一遍；2.为什么点击button不触发该点击事件。
     e.stopPropagation();
     //console.log("点击购买的商品："+productBarcode);
     this.props.updateCartData(this.state.CurrentProductAmount,productBarcode);
  }

  handleInputValueChange(inputValue){
    //console.log("点击购买的商品数量："+inputValue);
    this.setState({
      CurrentProductAmount:inputValue //CurrentProductAmount保存用户输入的产品数量
    });
  }

  render() {
    let productItem = this.props.productItem;
    let productBarcode = productItem.barcode;

    return (
          <ul className="item-content clearfix">
            <li className="td td-name">{productItem.name}</li>
            <li className="td td-unit">{productItem.unit}</li>
            <li className="td td-price">{productItem.price}</li>
            <li className="td td-type">
              <GetEveryProductType barcode={productBarcode}></GetEveryProductType>
            </li>
            <div className="addToCartPro">
              <li className="td td-amount">
                <SelectedProductAmount onInputValueChange={this.handleInputValueChange}></SelectedProductAmount>
              </li>
              <li className="td td-op">
                <a  onClick={(e,proBarcode) => this.handleAddToCart(e,productBarcode)}>购买</a>
              </li>
            </div>
          </ul>
    )

  }
}

export default ProductListItem;
