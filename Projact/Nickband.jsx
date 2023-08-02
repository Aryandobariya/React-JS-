import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./index.css"

export default function Nickbans(proops) {
  return (
    <>

     
    <div className="col-md-3 mb-3 py-2">
       <Card style={{ width: '18rem' , flex:"2" , textAlign:"center"}}>
      <Card.Img variant="top" src={proops.Nickban.img} className='img'/>
      <Card.Body>
        <Card.Title> <h2>{proops.Nickban.productName}</h2></Card.Title>
        <Card.Text>
            <p>{proops.Nickban.description}</p>
        </Card.Text>
        <Button className='m-3 btn-3' variant=""><span>Buy now</span></Button>
  
        <Button className='btn-5' variant=""><span>add to cart</span></Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}


