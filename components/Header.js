import React from 'react';
import NextLink from 'next/link';
import css from 'styled-jsx/css'


const Header = () => {
  return(
    <header>
      <NextLink href="/">
        <a>
          <h1>
            <figure><img src="../static/logo.svg" alt=""/></figure>
          </h1>
        </a>
      </NextLink>
      <nav>
        <ul>
          <li><NextLink href="/about"><a>はじめに</a></NextLink></li>
          <li><NextLink href="/menu"><a>メニュー</a></NextLink></li>
          <li><NextLink href="/news"><a>お知らせ</a></NextLink></li>
          <li><NextLink href="/access"><a>アクセス</a></NextLink></li>
        </ul>
      </nav>
      <div className="telephone">
        <p><img src="../static/Icon_telephone.svg" /><a href="tel:09061069510">090-6106-9510</a></p>
        <span>受付時間 9:00-13:00 / 14:30-17:00</span>
      </div>
      <NextLink href="#contact">
        <a className="button">ご予約・お問い合わせ<img src="../static/Icon_arrow.svg" /></a>
      </NextLink>
      <style jsx>{styles}</style>
    </header>
  )
}

const styles = css`
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
`

export default Header;
