import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Navbar = () => {
  const {loading,error,data} = useFetch("http://localhost:1337/api/logo-img?filter[img][$contains]=logo&populate=*")
  return (

    <nav className="navbar">
        <img src={loading?'':`http://localhost:1337${data.attributes.img.data.attributes.formats.thumbnail.url}`} alt="logo"/>
        <Link to='/'>Domov</Link>
        <Link to='/about'>O Nas</Link>
        <Link to='/contact'>Kontakt</Link>
    </nav>
  )
}

export default Navbar