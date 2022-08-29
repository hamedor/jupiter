import {useEffect} from "react";
import './main-products-template.css';

export const MainproductsTemplateItem = ({e,items, deleteProduct, filter, selectedWatch}) =>{

    const toggle = (e) => {        
        e.selected=!e.selected
        selectedWatch(e.selected, e.id);
    }
      
    const handleKeyPress = (e) =>{    
      if (e.key === 'Delete') {
        let filtered = items.filter(e=>e.selected === false);
        deleteProduct(filtered); 
    }}
  
    useEffect(() => {  
      const onKeypress = (e) => handleKeyPress(e);
      document.addEventListener('keydown', onKeypress);
    }, []);

    return(
        <div id="div" tabIndex="0" onClick={() => toggle(e)} key={e.id} className={e.selected===true ? 'product focused': 'product'}>
        <div  className="product__image">
            <img src={e.img} alt='product'></img>                        
            <p onClick={(e)=>filter(e)} id="type" className='product__type'>{e.type}</p>
            <p className='product__heading'>{e.heading}</p>
        </div>
        
    </div>
    )
}

