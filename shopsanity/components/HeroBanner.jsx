import React from 'react'
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>SMALL TEXT</p>
            <h3>Mid text</h3>
            <img src="" alt="headphones" className='hero-banner-image'></img>
            <div>
                <Link href="/product/ID">
                    <botton type="button"> Button </botton>
                </Link>
                <div className='desc'>
                    <h5>Descriptions</h5>
                    <p>DESCRIPTIONS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner