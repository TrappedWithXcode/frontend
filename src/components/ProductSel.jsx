
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MenuIcon from '@mui/icons-material/Menu';

const ProductSel = (props) => {
    const {loading,error,data}= useFetch('http://localhost:1337/api/categories?populate=*');
    const [isMenuOpen,setIsOpen] = useState(false);
    
    if(error)return<h1>error</h1>
    if(data==null)return<>wait</>
    if(!isMenuOpen && window.innerWidth<=1200){
        return<h1 className={props.nameOfClass} onClick={() => setIsOpen(!isMenuOpen)}><span className="material-symbols-outlined">
        menu
        </span>
        </h1>
    }
    
     
        
    
    return (
        <div className={!isMenuOpen?`menu-container ${props.nameOfClass}`:`menu-container-mobile ${props.nameOfClass}`}>
            {data.map(category => (
                <div key={category.id} className={!isMenuOpen?"category-item":"category-item-mobile"}>
                    <Link to={`/category/${category.id}`}>
                        
                        <h1 className='categoryName'>{category.attributes.kind}</h1>
                    </Link>
                </div>
            ) )}
            {isMenuOpen && <h1 onClick={()=>setIsOpen(!isMenuOpen)}>x</h1>}
        </div>
    
  )
}

export default ProductSel
