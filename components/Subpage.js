import React from 'react';
import css from 'styled-jsx/css';
import Style from '../static/Style';

const Subpage = (props) => {
  return(
    <div>
      <h2>{props.title}<span>{props.enTitle}</span></h2>
      {props.children}
      {Style}
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
@media screen and (min-width: 415px) {
  div{
    position:relative;
    padding-top:190px;
  }
  h2{
    padding:80px 120px 56px;
    background-color:#fff;
    font-size:50px;
    color:#42B4D1;
    letter-spacing: 0.15em;
    display:flex;
  }
  span{
    font-size:20px;
    color:#E5E5E5;
    padding-left:40px;
    line-height:54px;
  }
}
@media screen and (max-width: 415px) {
  div{
    padding-top:140px;
  }
  h2{
    padding:24px 24px 40px;
    background-color:#fff;
    font-size:30px;
    color:#42B4D1;
    letter-spacing: 0.15em;
    display:flex;
    align-items: center;
    border-bottom:1px #F7F7F7 solid;
  }
  span{
    font-size:12px;
    color:#E5E5E5;
    padding-left:40px;
  }
}
`


export default Subpage;
