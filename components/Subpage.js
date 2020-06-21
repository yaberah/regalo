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
`


export default Subpage;
