import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap";


const Elenco=()=>{


return(


    <>
<Container className="mt-5">
            <Row>
       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Roma</Card.Title>
          
          <Card.Link href="/roma" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/romaWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/romaMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>

       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Udine</Card.Title>
          
          <Card.Link href="/udine" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/udineWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/udineMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>

       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Venezia</Card.Title>
          
          <Card.Link href="/venezia" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/veneziaWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/veneziaMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>              
    
        <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Pescara</Card.Title>
          
          <Card.Link href="/pescara" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/pescaraWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/pescaraMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>

       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Ancona</Card.Title>
          
          <Card.Link href="/ancona" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/anconaWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/anconaMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>

       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Bologna</Card.Title>
          
          <Card.Link href="/bologna" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/bolognaWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/bolognaMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>

       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Matera</Card.Title>
          
          <Card.Link href="/matera" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/materaWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/materaMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>

       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Milano</Card.Title>
          
          <Card.Link href="/milano" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/milanoWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/milanoMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>
      
       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Napoli</Card.Title>
          
          <Card.Link href="/napoli" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/napoliWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/napoliMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>

       <Col sm={6} md={5} lg={4}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">Rimini</Card.Title>
          
          <Card.Link href="/rimini" className="linkcard  mt-3">vedi il meteo di questa giornata</Card.Link>
          <Card.Link href="/riminiWeek" className="linkcard  mt-5">vedi il meteo della settimana</Card.Link>
          <Card.Link href="/riminiMonth" className="linkcard mt-5 ">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>



        </Row>
        </Container>
  </>

)
}

export default Elenco