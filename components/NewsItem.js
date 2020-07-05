import React from 'react';
import NextLink from 'next/link';
import css from 'styled-jsx/css';

const NewsItem = (props) => {
  return(
    <li>
      <span>{props.date}</span>
      <NextLink href="/posts/[id]" as={`/posts/${props.id}`}>
        <a className="title">{props.title}</a>
      </NextLink>
      <NextLink href="/posts/[id]" as={`/posts/${props.id}`}>
        <a className="more">もっと見る</a>
      </NextLink>
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
