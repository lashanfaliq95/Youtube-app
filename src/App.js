import React, { useState } from 'react';
import './App.css';

import Search from './components/search';
import ListView from './components/listView';
import {
  ListGroupItem,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
} from 'reactstrap';

function App() {
  const [list, setList] = useState(null);
  const [isTerm, setIsTerm] = useState(false);
  const [data, setData] = useState(null);


  const updateList = (list, condition) => {
    console.log(list);
    setList(list);
    setIsTerm(condition || false);
  };


  return (
    <div class='container'>
      <Search setList={updateList} setData={(data)=>setData(data)} />
      {!data && <ListView list={list} isTerm={isTerm} setList={updateList} />}
      {data && (
        <Card>
        <CardBody>
          <CardTitle>{data.name}</CardTitle>
          <CardSubtitle>
            <ListGroup>
              <ListGroupItem>
                Topic engagement of Top 10 searches : {data.topicEngagement}
              </ListGroupItem>
              <ListGroupItem>
                Comment popularity of Top 10 searches : {data.commentPopularity}
              </ListGroupItem>
            </ListGroup>
          </CardSubtitle>
        </CardBody>
      </Card>
      )}
    </div>
  );
}

export default App;
