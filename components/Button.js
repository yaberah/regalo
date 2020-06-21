import React from 'react';
import Link from 'next/Link';
import css from 'styled-jsx/css'

const Button = ({children}) => {
  return(
    <Link href="#">
        <a>
          <span>{children}</span>
          <img src="../static/Icon_arrow.svg" alt="arrow"/>
          <style jsx>{styles}</style>
        </a>
    </Link>
  )
}

const styles = css`
a {
  display: flex;
  justify-content: center;
  width:100%;
  color: #fff;
  background-color : #68B9CE;
  border-radius: 8px;
  border-bottom: solid #53A4B9 4px;
  line-height:58px;
  margin-bottom:16px;
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
