import React from 'react';
import useData from '../Crud/data'
import ListGroup from 'react-bootstrap/ListGroup'
import { FormControl, InputGroup } from 'react-bootstrap-v5';
import { useState } from 'react';
import { useEffect } from 'react';

const List = ( props ) => {
    const data = useData();
    const [search, setSearch] = useState('');
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }


    return(
        <>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Buscar"
                value = {search}
                onChange={handleChange}
                />
            </InputGroup>
            <ListGroup variant="flush">
                {
                    data.filter((items)=>{
                        if(search == ""){
                            return items;
                        }else if(items.firstName.toLowerCase().includes(search.toLowerCase())){
                            return items
                        }
                    }).map((item)=>(
                        <ListGroup.Item key={item.id} action onClick={()=>{props.getData(item)}}>
                            {item.firstName}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>B
        </>
    )
    
}

List.defaultProps = {
    getData: ()=>{}
}

export default List
