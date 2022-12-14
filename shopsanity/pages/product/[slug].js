import React from 'react'

import {client, urlFor} from '../../lib/Client'

const ProductDetails = ({product, products}) => {
    const {image, name, detail, price} = product;

  return (
    <div>\
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug{
            current
        }
    }`;
    
    const products = await client.fetch(query)
    const paths = products.map((product) =>({
        params:{
            slug: product.slug.current
        }
    }));
    {console.log("poipoi")}
    return{
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) =>{

    const query = `*[_type == "product" && slug.current=="${slug}"][0]`;
    const productQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productQuery);
  
    return {
      props: {product, products}
    }
  }

export default ProductDetails