import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';
import { searchByTerm, searchByChannel, searchAndAnalyzeAll } from '../../services/searchService';

const Search = ({ setList, setData }) => {
  const [searchText, setSearchText] = useState('');

  const onClickSearchByTerm = () => {
    searchByTerm(searchText)
      .then(({ data }) => {
        setList(data, true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickSearchByChannel = () => {
    searchByChannel(searchText)
      .then(({ data }) => {
        setList(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickSearchAndAnalyzeAll=() =>{
    searchAndAnalyzeAll(searchText)
    .then(({ data }) => {
      setData(data.items);
    })
    .catch((err) => {
      console.log(err);
    });

  }
  
  return (
    <InputGroup>
      <InputGroupAddon addonType='prepend'>
        <InputGroupText>Search</InputGroupText>
      </InputGroupAddon>
      <Input
        placeholder='Enter term or channel'
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <InputGroupAddon addonType='append'>
        <Button color='secondary' onClick={onClickSearchByTerm}>
          Term
        </Button>
      </InputGroupAddon>
      <InputGroupAddon addonType='append'>
        <Button color='secondary' onClick={onClickSearchByChannel}>
          Channel
        </Button>
      </InputGroupAddon>
      <InputGroupAddon addonType='append'>
        <Button color='secondary' onClick={onClickSearchAndAnalyzeAll}>
          Search and analyze all
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
