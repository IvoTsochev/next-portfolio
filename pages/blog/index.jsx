// Utils
import { fetchBlogsFromWp } from '@/helpers/allblogs';
import Image from 'next/image';


// Components
import NavbarBlog from '@/components/NavbarBlog/Navbar';
import Footer from '@/components/footer/Footer';
import SingleCard from '@/components/SingleCard/SingleCard';


const Blog = ({ data }) => {



  return (
    <div className='h-100'>
      <NavbarBlog />

      <div className='
        flex
        max-w-md
        justify-center
        '>
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