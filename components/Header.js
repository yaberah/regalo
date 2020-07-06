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
   }
   header.open{
     height: 100vh;
   }
   header > a{
     display:inline-block;
     margin: 12px 24px;
   }
   header figure img{
     height: 50px;
   }
   .hamburger{
     width:24px;
     height:19px;
     margin-right:24px;
     position:relative;
     margin-top: 24px;
   }
   .hamburger-line{
     position:absolute;
     top:0;
     display:inline-block;
     width: 100%;
     height:3px;
     background-color:#42B4D1;
     border-radius:3px;
   }
   .hamburger-line::before,
   .hamburger-line::after{
     position:absolute;
     content:"";
     display:inline-block;
     width: 100%;
     height:3px;
     background-color:#42B4D1;
     border-radius:3px;
   }
   .hamburger-line::before{
     top:8px;
   }
   .hamburger-line::after{
     top:16px;
   }
   .hamburger
}
`

export default Header;
