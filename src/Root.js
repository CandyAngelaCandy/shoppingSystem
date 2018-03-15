/**
 * Created by 22935 on 2018/3/13.
 */
import React from 'react';
import ListPageHeader from './components/listPageHeader';
import ProductList from './components/productList';
import {PRODUCT_LIST} from './data/productListData';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentProductList:PRODUCT_LIST};
    //this.state = {currentProductList:2};
  }
  render() {
    return (
      <div>
        <ListPageHeader></ListPageHeader>
        <ProductList currentProductList = {this.state.currentProductList}></ProductList>
      </div>
    )

  }
}



export default Root;
