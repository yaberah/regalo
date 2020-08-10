import React from 'react';
import NextLink from 'next/link';
import css from 'styled-jsx/css'

const Line = () => {
  return(
      <a href="https://lin.ee/7SRSgNo">
        <div className="lineat">
          <figure><img src="../static/logo_line.svg" alt="lineのアイコン"/></figure>
          <span>LINEでご予約</span>
        </div>
        <style jsx>{styles}</style>
      </a>
  )
}

const styles = css`
@media screen and (min-width: 415px) {
  a{
    width:60px;
    height:200px;
    display: block;
    position:fixed;
    right:0;
    top:65%;
    background-color:#00B900;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.08);
    border-radius: 20px 0 0 20px;
    z-index:100;
  }
  a:hover{
    opacity:0.9;
  }
  .lineat{
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .lineat figure{
    text-align:center;
    margin-top:10%;
  }
  span{
    writing-mode: vertical-rl;
    color: #fff;
    text-orientation: upright;
    position:absolute;
    right: 38%;
    bottom: 10%;
  }
}
@media screen and (max-width: 415px) {
  a{
    width:44px;
    height:160px;
    display: block;
    position:fixed;
    right:0;
    top:75%;
    background-color:#00B900;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.08);
    border-radius: 20px 0 0 20px;
    z-index:100;
    font-size:11px;
  }
  a:hover{
    opacity:0.9;
  }
  .lineat{
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .lineat figure{
    text-align:center;
    margin-top:25%;
  }
  .lineat figure img{
    width:85%;
  }
  span{
    writing-mode: vertical-rl;
    color: #fff;
    text-orientation: upright;
    position:absolute;
    right: 38%;
    bottom: 15%;
  }
}
`

export default Line;
