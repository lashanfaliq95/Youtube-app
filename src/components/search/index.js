import React, { useState }  from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { searchByTerm, searchByChannel } from '../../services/searchService';

const Search=(setList)=>{

    const [searchText,setSearchText]=useState("");


    const onClickSearchByTerm=()=>{
        searchByTerm(searchText)
        .then((res)=>{
            setList(res,true);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onClickSearchByChannel=()=>{
        searchByChannel(searchText)
        .then((res)=>{
            setList(res);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Enter term or channel" onChange={(e)=>{
            setSearchText(e.target.value);
        }}/>
        <InputGroupAddon addonType="append"><Button color="secondary" onClick={onClickSearchByTerm}>Term</Button></InputGroupAddon>
        <InputGroupAddon addonType="append"><Button color="secondary" onClick={onClickSearchByChannel}>Chanel</Button></InputGroupAddon>
      </InputGroup>
    )
}

export default Search;