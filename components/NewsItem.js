import React from 'react';
import Link from 'next/Link';
import css from 'styled-jsx/css';

const NewsItem = (props) => {
  return(
    <li>
      <span>{props.date}</span>
      <Link href="#">
        <a className="title">{props.title}</a>
      </Link>
      <Link href="#">
        <a className="more">もっと見る</a>
      </Link>
      <style jsx>{styles}</style>
    </li>
  )
}

const styles = css`
li {
  border-top : 1px #F7F7F7 solid;
  padding:  32px 0;
  display:flex;
}
span{
  margin-right: 32px;
}
.title{
  color: #8A969A;
  text-decoration:underline;
}
.more{
  margin-left:auto;
}
.more::after{
  content: ">";
  display:inline-block;
  margin-left:8px;
}
li:last-child{
  border-bottom:1px solid #F7F7F7;
}
`

export default NewsItem;
