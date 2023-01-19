import React from 'react'
import '../sections/offers.css'
import {ImPen} from 'react-icons/im'
import {CgWebsite} from 'react-icons/cg'
import {SiBmcsoftware} from 'react-icons/si'
import {IoIosApps} from 'react-icons/io'
import img1 from '../../images/62f58848-3abd-8a4e-068a-1d118c51de1c.png'

function Offers() {
  return (
<>
    <section className='first_section'>
        <div className='offer'>
            <article>
                <ImPen className='icon'/>
                <h5>Graphic Design</h5>
                <p>More</p>
            </article>
            <article>
                <CgWebsite className='icon'/>
                <h5>Web Design</h5>
                <p>More</p>
            </article>
            <article>
                 <SiBmcsoftware className='icon'/>
                 <h5>Software</h5>
                 <p>More</p>
            </article>
            <article>
                <IoIosApps className='icon'/>
                <h5>Application</h5>
                <p>More</p>
            </article>
        </div>
    </section>  
    <section className='second_section'>
        <div className='summary'>
            <div>
                <p>2019</p>
                <summary>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita recusandae quisquam adipisci iusto molestiae totam necessitatibus officia molestias aliquid cum.
                </summary>
            </div>
            <div>
                <p>2020</p>
                <summary>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita recusandae quisquam adipisci iusto molestiae totam necessitatibus officia molestias aliquid cum.
                </summary>
            </div>            <div>
                <p>2021</p>
                <summary>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita recusandae quisquam adipisci iusto molestiae totam necessitatibus officia molestias aliquid cum.
                </summary>
            </div>            <div>
                <p>2022</p>
                <summary>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita recusandae quisquam adipisci iusto molestiae.
                </summary>
            </div>
        </div>
        <div className='user'>
            <img src={img1} alt="" />
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
</>
  )
}

export default Offers