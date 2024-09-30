import React, { forwardRef } from 'react';
import MainHeader from '../../components/mainHeader/MainHeader';
import Programs from '../../components/programs/Programs';
import Services from '../../components/services/Services';
import Values from '../../components/values/Values';
import FAQs from '../../components/FAQ/FAQs';
import Testimonials from '../../components/testimonials/Testimonials';
import Footer from '../../components/footer/Footer';

import './Home.css';

const Home = forwardRef(({ HomeRef, servicesRef, valuesRef, faqsRef, testimonialsRef, footerRef }) => {
  return (
    <>
      <section ref={HomeRef}>
        < MainHeader />
      </section>
      <section ref={servicesRef}>
        < Services />
      </section>

      <section ref={valuesRef}>
        <Values />
      </section>
      <section ref={testimonialsRef}>
        <Testimonials />
      </section>
      <section ref={footerRef}>
        <Footer />
      </section>
    </>
  );
});

export default Home;
