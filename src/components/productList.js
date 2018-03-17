/**
 * Created by 22935 on 2018/3/13.
 */
import React from 'react';
import ProductListItem from '../components/productListItem';

class ProductList extends React.Component {
  constructor(props){
    super(props);
    this.handleUpdateCartData = this.handleUpdateCartData.bind(this);
    this.state ={arr:[{'heihei001':1}]};
  }

  handleUpdateCartData(CurrentProductAmount,productBarcode){
    let carDataArr = this.state.arr;
    let isBarcodeInObj = false;
    let indexObjInArr;

    for(let i = 0 ; i<carDataArr.length; i++){
      if(carDataArr[i].hasOwnProperty(productBarcode)){
        indexObjInArr = i;
        isBarcodeInObj = true;
        break;
      }
    }

    if(isBarcodeInObj){
      carDataArr[indexObjInArr][productBarcode] += parseInt(CurrentProductAmount);

      //console.log('cart num '+carDataArr[indexObjInArr][productBarcode]);
     //console.log('exist index' + indexObjInArr);
    }else{
      let obj = {};
      obj[productBarcode] = parseInt(CurrentProductAmount);
      carDataArr.push(obj);
    }

    this.setState({arr:carDataArr});
    //console.log(this.state.arr);
    console.log(carDataArr);
    this.props.getCartProductData(carDataArr);
  }

  render() {
    let listEle = null;
    listEle = this.props.currentProductList.map((item) => {
       return (
         <ProductListItem key={item.barcode} productItem={item} updateCartData={this.handleUpdateCartData}></ProductListItem>
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
