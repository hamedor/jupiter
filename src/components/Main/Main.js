import { MainFilters } from "../Main-filters/Main-filters";
import { MainProducts } from "../Main-products/Main-products";
import { useState, useEffect, useCallback } from "react";
import { ProductsData } from "../products-data"

import './main.css'

export const Main = () =>{

    const [items, setItems] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [itemsFilter, setItemsFilter] = useState('Show All');

    
    let data = ProductsData();
      
    useEffect(()=>{
        setItems(data);
        makeSelectedFalse();
    },[data]);

    const makeSelectedFalse = () =>{
        setItems((prevState) =>    
        prevState.map((item) => ({
          ...item,
          selected: false
        }))
      );
    }

    const filter = (element) => {
        let target = element.target.textContent;
        element.stopPropagation();
        setItemsFilter(target);      
    }
    const mobileFilter = (element) =>{
        let target = element.target.value;
        setItemsFilter(target);
    }
       
    const deleteProduct = (filtered) => {    
        setItems(filtered);
    };
    
    const selectedWatch = (selected, id) => {
        setItems(item => {
            const after = item.map(item => {
                if(item.id === id){
                    return {...item, selected: selected}                
                }
            return item;
            })
            return after;
       })
    }
    

    return(
        <main className='main'>
            <div className='_container'>
                <MainFilters filter={filter} itemsFilter={itemsFilter} mobileFilter={mobileFilter}/>
                <MainProducts itemsFilter={itemsFilter}
                data={data}
                items={items}
                setItems={setItems}
                filter={filter}
                deleteProduct={deleteProduct}
                isActive={isActive}
                setIsActive={setIsActive}
                selectedWatch={selectedWatch}/>
            </div>
        </main>
        )
    }

