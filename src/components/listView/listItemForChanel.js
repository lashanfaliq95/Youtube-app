import React from 'react';
import {
  ListGroupItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  CardSubtitle,
} from 'reactstrap';
import {
  getAllVideos,
  getMostPopularVideos,
  getMostRecentVideos,
} from '../../services/videoService';

const ListItemForChannel = ({
  imageUrl,
  channelName,
  channelId,
  setList,
  description,
}) => {
  const onClickGetAllVideos = () => {
    getAllVideos(channelId)
      .then(({ data }) => {
        setList(data.items, true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickGetMostPopularVideos = () => {
    getMostPopularVideos(channelId)
      .then(({ data }) => {
        console.log(data);
        setList(data.items, true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickGetMostRecentVideos = () => {
    getMostRecentVideos(channelId)
      .then(({ data }) => {
        console.log(data);
        setList(data.items, true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ListGroupItem>
      <Card>
        <CardImg top width='100%' src={imageUrl} alt='Card image cap' />
        <CardBody>
          <CardTitle>{channelName}</CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
          <ButtonGroup>
            <Button onClick={onClickGetAllVideos}>Get all videos</Button>
            <Button onClick={onClickGetMostPopularVideos}>
              Get most popular videos
            </Button>
            <Button onClick={onClickGetMostRecentVideos}>
              Get most recent videos
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </ListGroupItem>
  );
};

export default ListItemForChannel;
