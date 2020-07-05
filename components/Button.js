import React from 'react';
import NextLink from 'next/link';
import css from 'styled-jsx/css'

const Button = (props) => {
  const button_type = props.type === 'primary' ? 'primary' : 'secondary' ;
  return(
    <NextLink href={`${props.href}`}>
        <a className={`${button_type}`}>
          <span>{props.children}</span>
          <img src="../static/Icon_arrow.svg" alt="arrow"/>
          <style jsx>{styles}</style>
        </a>
    </NextLink>
  )
}

const styles = css`
a {
  display: flex;
  justify-content: center;
  color: #fff;
  border-radius: 8px;
  line-height:58px;
  margin-bottom:16px;
}
a.primary{
  background-color : #68B9CE;
  border-bottom: solid #53A4B9 4px;
}
a.secondary{
  background-color : #B0CCD3;
  border-bottom: solid #92B4BC 4px;
}
a:active {
  transform: translateY(4px);
  border-bottom: none;
}
img{
  display:inline-block;
  transform:rotate(270deg);
  margin-left:8px;
}
`

export default Button;
