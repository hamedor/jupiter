import { useState } from "react";
import { MainproductsTemplate } from "../Main-products-template/Main-products-template";

import './main-product.css'

export const MainProducts = ({itemsFilter, filteredList ,items, filter, data, deleteProduct, isActive, setIsActive, setItems, selectedWatch}) =>{
    
    const [counter, setCounter] = useState(1);

    const Button = ()=>{
        if(counter >= items.length / 9){
            return(
                <button disabled onClick={changeCounter} type="button">Load More</button>
            )
        }
        return(
            <button onClick={changeCounter} type="button">Load More</button>
        )
    }
    
    const changeCounter = () =>{
        setCounter(counter + 1);
    }

    return(
        <>
       <div className="products-container">
            <MainproductsTemplate
            itemsFilter={itemsFilter}
            filteredList={filteredList}
            counter={counter}
            filter={filter}
            items={items}
            deleteProduct={deleteProduct}
            data={data}
            isActive={isActive}
            setIsActive={setIsActive}
            setItems={setItems}
            selectedWatch={selectedWatch}/>
       </div>
       <div className="products__button">
            <Button/>
       </div>
       </>
    )
}