// Utils
import { fetchBlogsFromWp } from '@/helpers/allblogs';
import Image from 'next/image';


// Components
import NavbarBlog from '@/components/NavbarBlog/Navbar';
import Footer from '@/components/footer/Footer';
import SingleCard from '@/components/SingleCard/SingleCard';

// Styling
import './blog.module.scss';


const Blog = ({ data }) => {



  return (
    <div className='blogPage'>
      <NavbarBlog />

      <div className='blogPage__wrapper'>
        { data.map((blog) => (
          <SingleCard
            key={ blog.id }
            title={ blog.title.rendered }
            img_src={ blog.better_featured_image.source_url }
          />
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