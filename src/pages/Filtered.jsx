import React from 'react'
import { useParams } from 'react-router'
import ProductSel from '../components/ProductSel';
import Welcome from '../components/Welcome';
import useFetch from '../hooks/useFetch'

const Filtered = () => {
    const {id} = useParams();
    const {loading,error,data} = useFetch(`http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=${id}`)
    if(loading){
        return <h2>Nacitavam...</h2>
    }
    if(error){
        return <h2>nastala chyba {error}</h2>
    }
    
    return (
    //<h2>data</h2>
    <div className="page">
        <ProductSel nameOfClass="alone" />
        <div className="content-holder">
            
            {data.map(category =>
            (
            <div key={category.id} className="content-container" >
                <img src={`http://localhost:1337${category.attributes.photo.data[0].attributes.formats.small.url}`} alt="product"/>
                <div>
                <h1>{category.attributes.name}</h1>
                <p className='contentPhoto'>{category.attributes.description}</p>
                <p>{category.attributes.isDiscounted?(category.attributes.price-(category.attributes.price*(category.attributes.discount/100))).toFixed(2):category.attributes.price}€</p>
                <div className="telephone">
                    <a href={`tel:0949349557}`}>0949349557</a>
                </div>
                </div>
            </div>
        ))}
        </div>
        </div>
    )
}

export default Filtered 