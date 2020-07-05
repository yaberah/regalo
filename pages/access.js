import React from 'react';
import NextLink from 'next/link';
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
