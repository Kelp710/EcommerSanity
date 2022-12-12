import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/Client';

const FooterBanner = ({footerBanner : {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <h3>{saleTime}</h3>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <p>{midText}</p>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>
              {buttonText}
            </button>
          </Link>
        </div>
        {console.log(image.asset)}
        <img 
        src={urlFor(image)}
        className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner