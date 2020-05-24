import React,{useState} from 'react';
import { 
    ListGroupItem,    
    Card, 
    CardImg, 
    CardBody,
    CardTitle, 
    Button ,
    Alert
} from 'reactstrap';
import {} from '../../services/videoService'; 

const ListItem=({imageUrl, videoName, isTerm, id, setList })=>{

const [result,setResult]=useState(null);

    const onClickAnalyze=()=>{
        setResult(['test1','test2'])
    }

    const onClickGetMostPopularVideos=()=>{

    }

    const onClickGetMostRecentVideos=()=>{

    }

    const onClickGetAllVideos=()=>{

    }

    return(
      <ListGroupItem>
      <Card>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
         {isTerm &&
         <>
          <CardTitle>{videoName}</CardTitle>
          <Button onClick={onClickAnalyze} >Analyze</Button>
          {
        result && result.map((result)=>(
            <Alert color="success"> {result} </Alert>
        ))}
        </>
         }

         {!isTerm &&
         <>
          <CardTitle>{videoName}</CardTitle>
          <Button onClick={onClickGetMostPopularVideos} >Get most popular videos</Button>
          <Button onClick={onClickGetMostRecentVideos} >Get most recent videos</Button>
          <Button onClick={onClickGetAllVideos} >Get all videos</Button>
        </>
         }
        </CardBody>
      </Card>
      </ListGroupItem>
    )
}

export default ListItem;