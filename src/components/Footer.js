import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <div className='box'>
        <li className="menu-item">关于</li>
        <li className="menu-item">RubyConf</li>
        <li className="menu-item">Ruby 镜像</li>
        <li className="menu-item">RubyGems 镜像</li>
        <li className="menu-item">Status</li>
        <li className="menu-item">活跃会员</li>
        <li className="menu-item">组织</li>
        <li className="menu-item">API</li>
        <li className="menu-item">贡献者</li>
      </div>
    )
  }
}

export default Footer;
