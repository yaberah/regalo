import React from 'react';
import NextLink from 'next/link';
import css from 'styled-jsx/css'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = { showMenu : false }
  }
  handleClick = () => {
    this.setState({ showMenu : !this.state.showMenu })
  }
  render(){
    return(
      <header className={ this.state.showMenu ? 'open' : '' }>
        <NextLink href="/">
          <a>
            <h1>
              <figure><img src="../static/logo.svg" alt=""/></figure>
            </h1>
          </a>
        </NextLink>
        <nav className="pc">
          <ul>
            <li><NextLink href="/about"><a>はじめに</a></NextLink></li>
            <li><NextLink href="/menu"><a>メニュー</a></NextLink></li>
            <li><NextLink href="/news"><a>お知らせ</a></NextLink></li>
            <li><NextLink href="/access"><a>アクセス</a></NextLink></li>
          </ul>
        </nav>
        <div className="telephone pc">
          <p><img src="../static/Icon_telephone.svg" /><a href="tel:09061069510">090-6106-9510</a></p>
          <span>受付時間 9:00-13:00 / 14:30-17:00</span>
        </div>
        <NextLink href="#contact">
          <a className="button pc">ご予約・お問い合わせ<img src="../static/Icon_arrow.svg" /></a>
        </NextLink>
        <div className="hamburger sp" onClick={this.handleClick}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <div className="sp hamburger-inner">
          <nav>
            <ul>
              <li><NextLink href="/about"><a>はじめに</a></NextLink></li>
              <li><NextLink href="/menu"><a>メニュー</a></NextLink></li>
              <li><NextLink href="/news"><a>お知らせ</a></NextLink></li>
              <li><NextLink href="/access"><a>アクセス</a></NextLink></li>
            </ul>
          </nav>
          <a href="tel:09061069510" className="telephone">
            <div>
              <p>電話をかける</p>
              <span><img src="../static/Icon_telephone.svg" />090-6106-9510</span>
            </div>
          </a>
          <span className="business-hours">受付時間 9:00 - 13:00 / 14:30 - 17:00 <br/>(定休日 日曜日・祝日)</span>
        </div>

        <style jsx>{styles}</style>
      </header>
    )
  }
}



const styles = css`
@media screen and (min-width: 415px) {
  header {
    position:fixed;
    z-index:100;
    margin-top:4vh;
    height:11vh;
    max-width: 1200px;
    width: 100%;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.08);
    border-radius: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #fff;
  }
  header > a{
    padding : 17px 32px;
    margin-right: auto;
  }
  nav{
    margin-right:24px;
  }
  li{
    display: inline-block;
    margin-left : 24px;
  }
  .telephone{
    height: 36px;
    border-left: 1px solid #F7F7F7;
    padding: 0px 24px;
  }
  .telephone > p{
    font-size: 21px;
    margin-bottom:2px;
    display: flex;
  }
  .telephone > span{
    font-size: 11px;
    font-family: "游ゴシック";
    font-weight: 100;
    color: #D3D3D3;
  }
  .button {
    max-height: 44px;
    color: #fff;
    background-color : #68B9CE;
    padding: 14px 27px;
    border-radius: 8px;
  }
  .button > img{
    margin-left:4px;
  }
}
@media screen and (max-width: 415px) {
   header {
     position: fixed;
     width:100%;
     height: 74px;
     background-color:#fff;
     box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.08);
     display:flex;
     justify-content:space-between;
     transition: height 0.3s ease 0s;
     z-index:100;
     flex-wrap: wrap;
     box-sizing: border-box;
   }
   header.open{
     height: 100vh;
   }
   header > a{
     display:inline-block;
     margin: 12px 24px;
     height:50px;
   }
   header figure img{
     height: 50px;
   }
   .hamburger{
     width:24px;
     height:19px;
     position:relative;
     margin-top: 24px;
     margin-right: 24px;
   }
   .hamburger-line{
     position:absolute;
     display:inline-block;
     width: 100%;
     height:3px;
     background-color:#42B4D1;
     border-radius:3px;
     transition: all 0.3s ease 0s;
   }
   .hamburger-line:nth-child(1){
     top:0;
   }
   .hamburger-line:nth-child(2){
     top:8px;
   }
   .hamburger-line:nth-child(3){
     top:16px;
   }
   .open .hamburger-line:nth-child(1){
     top:8px;
     transform:rotate(-45deg);
   }
   .open .hamburger-line:nth-child(2){
     opacity:0;
   }
   .open .hamburger-line:nth-child(3){
     top:8px;
     transform:rotate(45deg);
   }
   .hamburger-inner{
     display:none;
     position:absolute;
     top: 104px;
     padding: 0 24px;
     box-sizing: border-box;
     width: 100%;
   }
   .hamburger-inner li{
     margin-top:24px;
   }
   .hamburger-inner li a{
     color: #68B9CE;
     text-decoration:none;
     font-weight:bold;
   }
   .open .hamburger-inner{
     display:block;
   }
   .open .hamburger-inner .telephone{
     margin-top : 54px;
     border: 1px solid #68B9CE;
     width: 100%;
     padding: 16px;
     box-sizing: border-box;
     text-align: center;
     display:block;
     border-radius: 8px;
     font-weight:bold;
     text-decoration:none;
     color: #42B4D1;
   }
   .open .hamburger-inner .telephone p{
     font-size:22px;
   }
   .open .hamburger-inner .telephone span{
     margin-top:4px;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .business-hours{
     display:block;
     text-align: center;
     width:100%;
     margin: 0 auto;
     font-family: 'Yu Gothic';
     font-size:14px;
     color:#68B9CE;
     margin-top: 16px;
   }


}
`

export default Header;
