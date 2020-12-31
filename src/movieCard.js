import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function MovieCard({cData}){

  const renderCard=(card,index)=>{

    return(
    <Card style={{ width: '18rem',marginLeft:"5%",marginTop:"3%" }} key ={index}>
  <Card.Img variant="top" src={card.Poster} />
  <Card.Body>
    <Card.Title>{card.Title}</Card.Title>
    <Card.Text>
      {card.Type}
    </Card.Text>
  </Card.Body>
  </Card>
    )
  };
  return(
  cData.map(renderCard)
  )


}


export default MovieCard;