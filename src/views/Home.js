import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';

import API from '../utils/Api'

const Home = () => {

  const [recent, setRecent] = useState([])

  useEffect(() => {
    API.get('/tweets', { crossdomain: true } )
      .then(res => {
        setRecent(res.data.values)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      <FeaturesSplit recentTweet={recent} invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider />
      <Cta split /> */}
    </>
  );
}

export default Home;