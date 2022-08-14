import Image from 'next/image';

const SingleCard = ({ title, img_src }) => {


  return (
    <div className='singleCard'>
      <Image
        src={ img_src }
        width={ 450 }
        height={ 320 }
        objectFit='cover'
        className='singleCard--img'
      />
      <h2 className='singleCard--title'>{ title }</h2>
    </div>
  )
}

export default SingleCard