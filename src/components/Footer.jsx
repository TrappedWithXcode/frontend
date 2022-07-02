import React from 'react'
import useFetch from '../hooks/useFetch'
import ReactMarkdown from 'react-markdown'
import AboutComp from './AboutComp'

const Footer = () => {
  const {loading,error,data} = useFetch('http://localhost:1337/api/footer?populate[0]=SocialMedia&populate[1]=SocialMedia.socialMediaImg')

  if(loading) return <h1>data loading</h1>
  return (
    <footer>
        <div className="about">      
            <ReactMarkdown children={data.attributes.aboutCompany}/>
          </div>
        <div className="social">
            {data.attributes.SocialMedia.map( social => (
              <div className="social-media" key={social.id}>
                <a href={social.url}>
                  <div className='social-links'>
                  <img src={`http://localhost:1337${social.socialMediaImg.data.attributes.formats.thumbnail.url}`} className="logo-img"/>
                  <h1>{social.socialMedia}</h1>
                  </div>
                </a>
                
              </div>
            ))}
          </div>
        <div className="about-comp">
           <AboutComp/>   
          </div>
    </footer>
  )
}

export default Footer