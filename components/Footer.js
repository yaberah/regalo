import React from 'react';
import NextLink from 'next/link';
import css from 'styled-jsx/css'

const Footer = () => {
  return(
    <footer>
      <div className="footer_inner">
        <div className="address_innter">
          <div>
            <figure><img src="../static/logo.svg" alt=""/></figure>
            <address>
              <p>〒221-0802</p>
              <p>神奈川県横浜市神奈川区六角橋１丁目１１−２<br/>ビルヌーヴ白楽403</p>
              <p>TEL : 090-6106-9510</p>
            </address>
          </div>
          <nav>
            <ul>
              <li><NextLink href="about"><a>はじめに</a></NextLink></li>
              <li><NextLink href="menu"><a>メニュー</a></NextLink></li>
              <li><NextLink href="news"><a>お知らせ</a></NextLink></li>
              <li><NextLink href="access"><a>アクセス</a></NextLink></li>
            </ul>
          </nav>
        </div>
        <NextLink href="#"><a className="back_top"><img src="../static/Icon_arrow2.svg"/></a></NextLink>
        <small>Copyright © 2020 Regalo. All Rights Reserved.</small>
      </div>
      <style jsx>{styles}</style>
    </footer>
  )
}

const styles = css`
@media screen and (min-width: 415px) {
  .sp{
    display:none !important;
  }
  footer{
    height:320px;
    background-color:#fff;
    width:100vw;
    position:relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .footer_inner{
    width:1200px;
    margin: 0 auto;
    padding-top: 48px;
    position:relative;
  }
  figure{
    margin-bottom:24px;
  }
  address{
    font-size: 12px;
    font-family: "Yu-Gothic";
    color:#AAAAAA;
    font-weight:100;
    line-height:1.4em;
    letter-spacing: 0.2em;
  }
  .address_innter{
    width:100%;
    display:flex;
    justify-content:space-between;
  }
  address > p:nth-child(3){
    margin-top:16px;
  }
  small{
    width:100%;
    margin: 0 auto;
    text-align:center;
    display:inline-block;
    margin-top:40px;
    padding: 24px 0;
    font-family:"Yu-Gothic";
    font-size:12px;
    font-weight: 100;
    color:#AAAAAA;
    border-top: 1px solid #F7F7F7;
  }
  ul{
    padding-top:24px;
    display:flex;
  }
  li{
    margin-left:24px;
    color: #68B9CE;
  }
  .back_top{
    position:absolute;
    width:80px;
    height:80px;
    border-radius:80px;
    background-color:#fff;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.08);
    right:0;
    top:-40px;
    line-height:80px;
    text-align:center;
  }
}
@media screen and (max-width: 415px) {
  .pc{
    display:none;
  }
  footer{
    background-color:#fff;
    width:100%;
  }
  .footer_inner{
    margin: 24px;
    padding-top:24px;
    position:relative;
    margin-bottom: 0;
  }
  figure{
    width:165px;
    margin-bottom:16px;
  }
  figure img{
    width:100%;
  }
  address{
    font-size: 12px;
    font-family: "Yu-Gothic";
    color:#AAAAAA;
    font-weight:100;
    line-height:1.4em;
    letter-spacing: 0.2em;
  }
  address > p:nth-child(3){
    margin-top:16px;
  }
  nav{
    margin-top:40px;
  }
  nav ul li{
    color: #68B9CE;
    text-decoration:none;
    font-weight:bold;
    margin-top:24px;
  }
  small{
    width:100%;
    margin: 0 auto;
    text-align:center;
    display:inline-block;
    margin-top:40px;
    padding: 24px 0 24px;
    font-family:"Yu-Gothic";
    font-size:11px;
    font-weight: 100;
    color:#AAAAAA;
    border-top: 1px solid #F7F7F7;
    background-color:#fff;
  }
  .back_top{
    position:absolute;
    width:56px;
    height:56px;
    border-radius:56px;
    background-color:#fff;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.08);
    right:0;
    top:-28px;
    line-height:60px;
    text-align:center;
  }
}
`


export default Footer;
