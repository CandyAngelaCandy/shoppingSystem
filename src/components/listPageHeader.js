/**
 * Created by 22935 on 2018/3/13.
 */
import React from 'react';
import ReactDom from 'react-dom';
import '../stylus/listPageHeader.styl';

class ListPageHeader extends React.Component {
  render() {
    return (
      <div className="component-listPageHeader">
        <div className="product-table-th">
           <div className="wp">
             <div className="th th-name">名称</div>
             <div className="th th-unit">单位</div>
             <div className="th th-price">单价</div>
             <div className="th th-type">类型</div>
             <div className="th th-amount">数量</div>
             <div className="th th-op">操作</div>
           </div>
        </div>
      </div>
    )
  }
}

export default ListPageHeader;
