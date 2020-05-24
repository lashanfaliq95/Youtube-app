import React, { useState } from 'react';
import {
  ListGroupItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Alert,
  ButtonGroup,
} from 'reactstrap';
import {
  analyzeVideo,
  getFrequency,
  getQuestions,
} from '../../services/videoService';

const ListItem = ({ imageUrl, videoName, videoId }) => {
  const [commentPopularity, setCommentPopularity] = useState(null);
  const [topicEngagement, setTopicEngagement] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [questions, setQuestions] = useState(null);

  const onClickAnalyze = () => {
    analyzeVideo(videoId)
      .then(({ data }) => {
        console.log(data);
        setCommentPopularity(data.commentPopularity);
        setTopicEngagement(data.topicEngagement);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickFrequency = () => {
    getFrequency(videoId)
      .then(({ data }) => {
        console.log(data);
        setFrequency(data.frequency);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickQuestions = () => {
    getQuestions(videoId)
      .then(({ data }) => {
        console.log(data);
        setQuestions(data);
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
          <CardTitle>{videoName}</CardTitle>
          <ButtonGroup>
            <Button onClick={onClickAnalyze}>Analyze</Button>
            <Button onClick={onClickFrequency}>Frequency</Button>
            <Button onClick={onClickQuestions}>Questions</Button>
          </ButtonGroup>
          {commentPopularity && (
            <Alert color='primary'>
              commentPopularity : {commentPopularity}
            </Alert>
          )}
          {topicEngagement && (
            <Alert color='primary'>topicEngagement : {topicEngagement}</Alert>
          )}
          {frequency && <Alert color='primary'>frequency : {frequency}</Alert>}
          {questions &&
            questions.map((question) => (
              <Alert color='primary'> {question}</Alert>
            ))}
        </CardBody>
      </Card>
    </ListGroupItem>
  );
};

export default ListItem;
