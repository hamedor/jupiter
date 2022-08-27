import { useState } from "react";
import { MainproductsTemplateItem } from "../Main-products-template-item/Main-products-template-item";

export const MainproductsTemplate = ({itemsFilter, counter, filter, setProducts,data,items, deleteProduct, selectedWatch}) =>{

    let insertedData;

    if(itemsFilter === 'Show All' || itemsFilter === ''){
        insertedData = items;
    }else{
        insertedData = items.filter(e=>e.type===itemsFilter);
    }

    return(
        insertedData.slice(0,9 * counter).map(e=>
            <MainproductsTemplateItem key={e.id}
                deleteProduct={deleteProduct}
                e={e}
                setProducts={setProducts}
                data={data}
                items={items}
                filter={filter}
                selectedWatch={selectedWatch}
            />
            )
    )
}