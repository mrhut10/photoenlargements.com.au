import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Why from '../components/why-print-with-us';
import Banner from '../components/banner';
import About from '../components/about';
import Testimonials from '../components/testimonials';

const IndexPage = () => (
  <Layout home>
    <SEO title="Photo Enlargements | Scrapbooks | Canvas" />
    <Why />
    <Banner>We offer a variety of enlargement sizes</Banner>
    <About />
    <Testimonials />
  </Layout>
);

export default IndexPage;
