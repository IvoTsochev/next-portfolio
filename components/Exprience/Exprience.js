import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle'

const Expriences = [
  {
    date: '2020 - Present',
    logo: '/images/work/3.png',
    position: 'Front-End Developer',
    companyName: 'Vitamin Commerce',
    workFrom: '(Remote)',
    url: 'https://vitamincommerce.com'
  },
  {
    date: '2019 - 2020',
    logo: '/images/work/2.png',
    position: 'Hosting Support',
    companyName: 'GoDaddy',
    workFrom: 'Sofia',
    url: 'https://www.godaddy.com'
  },
  {
    date: '2012 - 2018',
    logo: '/images/work/1.png',
    position: 'Sales Representative',
    companyName: 'Telenor Group',
    workFrom: 'Troyan',
    url: 'https://yettel.com'
  },



]


const ExprienceSec = (props) => {
  return (
    <div className="wpo-work-area section-padding" id="experience">
      <div className="container">
        <SectionTitle Title={ 'My Work Experience' } />
        <div className="wpo-work-wrap">
          { Expriences.map((experience, exp) => (
            <div className="wpo-work-item" key={ exp }>
              <ul>
                <li className="date">{ experience.date }</li>
                <li className="logo"><Image layout='responsive' width={ 130 } height={ 110 } src={ experience.logo } alt="" /></li>
                <li className="position">{ experience.position } <span>{ experience.companyName } <span>{ experience.workFrom }</span></span></li>
                <li className="link">
                  <Link href={ experience.url || '/' }>
                    <a target='_blank'>Go to website</a>
                  </Link>
                </li>
              </ul>
            </div>
          )) }
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default ExprienceSec;