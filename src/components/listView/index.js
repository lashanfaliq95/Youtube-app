import React, { useState }  from 'react';
import { ListGroup, } from 'reactstrap';
import ListItem from './listItem';

const ListView=({list, isTerm, setList})=>{
    return(
    <ListGroup>
        {list && list.map((item)=>(
            <ListItem
            imageUrl={item.imageUrl}
            videoName={item.name}
            isTerm={isTerm}
            setList={setList}
            />
        ))
        }
    </ListGroup>
    )
}

export default ListView;