// Utils
// import Head from 'next/head'
import React, { Fragment } from 'react';
// import { fetchingPosts } from '../helpers/allblogs';
import { fetchBlogsFromWp } from '../helpers/allblogs';

// Components
import About from '@/components/about/about';
import BlogSection from '@/components/BlogSection/BlogSection';
import CommonHead from '@/components/commonHead';
import ContactArea from '@/components/ContactArea';
import ExprienceSec from '@/components/Exprience/Exprience';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/hero';
import Navbar from '@/components/Navbar/Navbar';
// import Pricing from '@/components/Pricing/Pricing';
import ProjectSection from '@/components/ProjectSection/ProjectSection';
import Scrollbar from '@/components/scrollbar/scrollbar';
// import blogs from 'api/blogs';
// import ServiceSection from '@/components/ServiceSection/ServiceSection';
// import Testimonial from '@/components/Testimonial/Testimonial';

export default function Home ({ posts }) {



  return (
    <div id='scrool'>
      <CommonHead />
      <Fragment>
        <div className="br-app">
          <Navbar />
          <Hero />
          {/* <Swiper /> */ }
          <About />
          {/* <ServiceSection /> */ }
          <ExprienceSec />
          <ProjectSection />
          {/* <Testimonial /> */ }
          {/* <Pricing /> */ }
          <ContactArea />
          <BlogSection blogList={ posts } />
          <Footer />
          <Scrollbar />
        </div>
      </Fragment>
    </div>
  )
}


export async function getStaticProps () {

  // let result;

  // fetching from mongodb
  // try {
  //   result = await fetchingPosts();
  // }
  // catch (err) {
  //   console.log('Error fetching data from MongoDB', err);
  // }

  // fetching from blogs.headless.team
  const data = await fetchBlogsFromWp();


  return {
    props: {
      posts: data
      // posts: result
      // posts: result.map(item => {
      //   return {
      //     id: item._id.toString(),
      //     title: item.title,
      //     excerpt: item.excerpt,
      //     image: item.headerImgUrl,
      //     content: item.content,
      //   }
      // })
    },
    revalidate: 86400
  }
}
