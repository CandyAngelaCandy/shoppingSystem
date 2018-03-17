/**
 * Created by 22935 on 2018/3/13.
 */
import React from 'react';
import ListPageHeader from './components/listPageHeader';
import ProductList from './components/productList';
import SiteNavBanner from './components/siteNavBanner';
import {PRODUCT_LIST} from './data/productListData';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.handlerGetCartProductData = this.handlerGetCartProductData.bind(this);
    this.state = {arr:[]};
    //this.state = {currentProductList:2};
  }

  handlerGetCartProductData(cartProductData){
    this.setState({arr:cartProductData});
    console.log("购物车数据"+ this.state.arr);
  }

  render() {
    return (
      <div>
        <SiteNavBanner cartProductData = { this.state.arr}></SiteNavBanner>
        <ListPageHeader></ListPageHeader>
        <ProductList currentProductList = {PRODUCT_LIST}
                     getCartProductData = {this.handlerGetCartProductData}>

        </ProductList>
      </div>
    )

  }
}



export default Root;
