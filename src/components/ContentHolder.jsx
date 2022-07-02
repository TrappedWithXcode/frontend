import React from 'react'
import useFetch from '../hooks/useFetch';
import ProductSel from './ProductSel';

const ContentHolder = () => {
    const {loading,error,data}= useFetch('http://localhost:1337/api/products?populate=*');
    const tel = '0949349557';
    if(loading){
        return <h2>Nacitavam...</h2>
    }
    if(error){
        return <h2>nastala chyba {error}</h2>
    }
    
    return (
    //<h2>data</h2>
    <div className="page">
        
        <div className="content-holder">{data.map(product =>
            (
            <div key={product.id} className="content-container" >
                
                <img src={`http://localhost:1337${product.attributes.photo.data[0].attributes.formats.small.url}`}/>
                
               
                <div>
                <h1>{product.attributes.name}</h1>
                <p className='contentPhoto'>{product.attributes.description}</p>
                <p>{product.attributes.isDiscounted?(product.attributes.price-(product.attributes.price*(product.attributes.discount/100))).toFixed(2):product.attributes.price}€</p>
                <div className="telephone">
                    <a href={`tel:${tel}`}>{tel}</a>
                </div>
                </div>
            </div>
        ))}
        </div>
        </div>
  )
}

export default ContentHolder