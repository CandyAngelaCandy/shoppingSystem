/**
 * Created by 22935 on 2018/3/17.
 */
import React from 'react';
import '../stylus/siteNavBanner.styl';

class SiteNavBanner extends React.Component {
  constructor(props){
    super(props);
    this.state ={arr:this.props.cartProductData};
  }

  render() {
    return (
      <div className="site-nav-bd">
        <ul className="site-nav-bd-list">
          <li className="site-nav-system-title">购物系统</li>
          <li className="site-nav-my-cart">
            <a href="">我的购物车</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SiteNavBanner;
