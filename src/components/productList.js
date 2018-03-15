/**
 * Created by 22935 on 2018/3/13.
 */
import React from 'react';
import ProductListItem from '../components/productListItem';

class ProductList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let listEle = null;
    listEle = this.props.currentProductList.map((item) => {
       return (
         <ProductListItem key={item.barcode} productItem={item}></ProductListItem>
       )
    });
    return (
     <ul>
       {listEle}
     </ul>
    )
    
  }
}

export default ProductList;
