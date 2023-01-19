import React from 'react'
import '../sections/products.css'
import Product1 from '../../images/1.png'
import Product2 from '../../images/2.png'
import Product3 from '../../images/3.png'
import Product4 from '../../images/4.png'
import Product5 from '../../images/5.png'
import Product6 from '../../images/6.png'






function Products() {
  return (
    <section className='products'>
       <h5>Our Products</h5>
       <div>
           <article>
              <img src={Product1} alt="" />
              <summary>Pillow</summary>
              <p>25$</p>
           </article>
           <article>
              <img src={Product2} alt="" />
              <summary>Pillow</summary>
              <p>25$</p>
           </article>
           <article>
              <img src={Product3} alt="" />
              <summary>Pillow</summary>
              <p>25$</p>
           </article>
           <article>
              <img src={Product4} alt="" />
              <summary>Pillow</summary>
              <p>25$</p>
           </article>
           <article>
              <img src={Product5} alt="" />
              <summary>Pillow</summary>
              <p>25$</p>
           </article>
           <article>
              <img src={Product6} alt="" />
              <summary>Pillow</summary>
              <p>25$</p>
           </article>
       </div>
    </section>
  )
}

export default Products