import React, { useState } from 'react';
import { ListGroup } from 'reactstrap';
import ListItem from './listItem';
import ListItemForChannel from './listItemForChanel';

const ListView = ({ list, isTerm, setList }) => {
  return (
    <ListGroup>
      {list &&
        isTerm &&
        list.map(
          (item) =>
            item &&
            item.id &&
            item.id.videoId && (
              <ListItem
                imageUrl={item.snippet.thumbnails.default.url}
                videoName={item.snippet.title}
                videoId={item.id.videoId}
              />
            )
        )}
      {list &&
        !isTerm &&
        list.map((item) => (
          <ListItemForChannel
            imageUrl={item.snippet.thumbnails.default.url}
            channelName={item.snippet.channelTitle}
            setList={setList}
            description={item.snippet.description}
            channelId={item.snippet.channelId}
          />
        ))}
    </ListGroup>
  );
};

export default ListView;
