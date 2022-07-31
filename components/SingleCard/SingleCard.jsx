import Image from 'next/image';

const SingleCard = ({ title, img_src }) => {


  return (
    <div className='cursor-pointer'>
      <Image
        src={ img_src }
        width={ 450 }
        height={ 320 }
        objectFit='cover'
        className='m-2'
      />
      <h2 className='max-w-sm mt-2'>{ title }</h2>
    </div>
  )
}

export default SingleCard