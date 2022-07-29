import Head from 'next/head'
import Fragment from 'react'

// Components
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Scrollbar from '@/components/scrollbar/scrollbar';


const SingleBlog = () => {
  return (
    <div>
      <Navbar />
      <h1>SINGLE BLOG POSTTT</h1>
      <Footer />
      <Scrollbar />
    </div>
  )
}

export default SingleBlog