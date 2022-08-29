import {useState} from 'react'
import './main-filters.css';

export const MainFilters = ({filter, mobileFilter, itemsFilter}) =>{

    const [open, setOpen] = useState(true);
    
    const classToggle = () =>{
        setOpen(!open);
    }

    return(
        <>
        <ul onClick={(e) => filter(e)} className ='filters'>
            <li className ={itemsFilter==='Show All' ? 'filter__item active' : 'filter__item'}>Show All</li>
            <li className ={itemsFilter==='Design' ? 'filter__item active' : 'filter__item'}>Design</li>
            <li className ={itemsFilter==='Branding' ? 'filter__item active' : 'filter__item'}>Branding</li>
            <li className ={itemsFilter==='Illustration' ? 'filter__item active' : 'filter__item'}>Illustration</li>
            <li className ={itemsFilter==='Motion' ? 'filter__item active' : 'filter__item'}>Motion</li>
        </ul>
        
        <select className={open===true ? 'mobileFilters' : 'mobileFilters mobileFilter-open'}  defaultValue="Show All" onClick={classToggle} onChange={(e) => mobileFilter(e)} name="select"> 
            <option value="Show All">Show All</option>
            <option value="Design">Design</option>
            <option value="Branding">Branding</option>
            <option value="Illustration">Illustration</option>
            <option value="Motion">Motion</option>
        </select>
      </>
    )
}