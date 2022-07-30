// Utils
import { fetchBlogsFromWp } from '@/helpers/allblogs';
import Image from 'next/image';


// Components
import NavbarBlog from '@/components/NavbarBlog/Navbar';
import Footer from '@/components/footer/Footer';

const Blog = ({ data }) => {


  console.log(data);

  return (
    <div className=''>
      <NavbarBlog />

      <div className='mt-30 mb-30'>
        { data.map((blog) => (
          <h1>{ blog.title.rendered }</h1>
        )) }
      </div>

      {/* <Footer /> */ }
    </div>
  )
}

export default Blog


export const getStaticProps = async (ctx) => {


  const posts = await fetchBlogsFromWp();



  return {
    props: {
      data: posts
    }
  }
}