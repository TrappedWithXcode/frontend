import React from 'react'
import useFetch from '../hooks/useFetch'
const AboutComp = () => {
    const {loading,error,data}=useFetch('http://localhost:1337/api/company-info')
    if(loading) return <h1>loading...</h1>
  return (

    <div>
        <h1>{data.attributes.name}</h1>
        <p>{data.attributes.adress}</p>
        <p>{data.attributes.ico}</p>
        <p>{data.attributes.phone}</p>
    </div>
  )
}

export default AboutComp