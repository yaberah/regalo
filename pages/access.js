import React from 'react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import Subpage from '../components/Subpage';
import Button from '../components/Button';
import Access from '../components/Access';
import { googlemapsAPI } from '../lib/googlemapsAPI';

const access = ({ mapData }) => {
  return(
    <div>
      <Layout>
        <Subpage title="アクセス" enTitle="ACCESS">
          <Access
            type="sub"
            apiKey={mapData.key}
            lat={mapData.lat}
            lng={mapData.lng}
            defaultZoom={mapData.defaultZoom}
            />
        </Subpage>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const mapData = await googlemapsAPI() || [];
  return { props : { mapData } }
}

export default access;
