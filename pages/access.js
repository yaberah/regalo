import React from 'react';
import Link from 'next/Link';
import Layout from '../components/Layout';
import Subpage from '../components/Subpage';
import Button from '../components/Button';
import Access from '../components/Access';

const access = () => {
  return(
    <div>
      <Layout>
        <Subpage title="アクセス" enTitle="ACCESS">
          <Access type="sub"/>
        </Subpage>
      </Layout>
    </div>
  )
}



export default access;
