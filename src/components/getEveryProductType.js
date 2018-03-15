/**
 * Created by 22935 on 2018/3/15.
 */
import React from 'react';
import {PREFERENTIAL_PRODUCT_LIST} from '../data/preferentialProduct';

function GetEveryProductType(props) {
  let itemBarcode = props.barcode;
  let preferentialProctList = PREFERENTIAL_PRODUCT_LIST;
  let indexInPreferentialProctList = preferentialProctList[0].barcodes.indexOf(itemBarcode);

  if(indexInPreferentialProctList!=-1){
    return '买二赠一';
  }else{
    return '无';
  }

}

export default GetEveryProductType;
