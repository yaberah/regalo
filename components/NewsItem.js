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
  padding:  32px 0;
  display:flex;
  width: 100%;
}
span{
  margin-right: 32px;
}
.title{
  color: #8A969A;
  text-decoration:underline;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
