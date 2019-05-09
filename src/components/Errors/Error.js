import React from 'react';
import Hero from '../Layout/Hero';
import Banner from '../Layout/Banner';
import {Link} from "react-router-dom";

const Error = () => {
  return <Hero>
    <Banner title="404" subtitle="page not found">
      <Link to='/' className='btn-primary'>home</Link>
    </Banner>
  </Hero>
  
}

export default Error
