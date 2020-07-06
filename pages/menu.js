import React from 'react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import Subpage from '../components/Subpage';
import Button from '../components/Button';
import css from 'styled-jsx/css'

const menu = () => {
  return(
    <div>
      <Layout>
        <Subpage title="メニュー" enTitle="Menu">
          <section className="sub">
            <p>REGALO(レガ-ロ)では患者の皆さんの不調を改善できる背術を提供し、体だけでなく心も健康になれるようにサポート致します。</p>
            <h4>スリムバンビ</h4>
            <p>初回体験45分 ¥5,000
  →2回目以降45分 ¥8,000
5回数券 ¥30,000（¥6,000/回）
10回回数券 ¥50,000（¥5,000/回）</p>
            <h3>整体・リラクゼーション</h3>
            <p>60分 ¥6,000
90分 ¥8,000</p>
            <h3>セットメニュー</h3>
            <p>①整体60分 ＋ スリムバンビ45分：¥10,000
②ヘッドスパ15分 ＋ スリムバンビ45分：¥7,000</p>
            <h3>コースメニュー</h3>
            <p>痩身エステコース3ヶ月：¥200,000
スポーツトレーニングコース3ヶ月：¥150,000
疼痛改善コース3ヶ月：¥150,000</p>
          </section>
        </Subpage>
      </Layout>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`

`

export default menu;
