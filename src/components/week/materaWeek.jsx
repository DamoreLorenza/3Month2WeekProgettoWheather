import { useEffect, useState } from "react"
import { Col, Container, Row, Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';



const MateraWeek =()=>{
const [informazioni, setInformazioni]= useState(null);

const [settimana, setSettimana] = useState(null);

useEffect(()=>{
    getMatera()
    
    getWeek();
},[])

const getMatera=()=>{

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.5&lon=16.4167&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
    .then((res)=>{if(res.ok){return res.json()}else{throw new Error("errore")}})
    .then((data)=>{console.log("data",data)
     setInformazioni(data)
    })
    .catch((err)=>{console.log("errore",err)})


}


const getWeek = () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?lat=40.5&lon=16.4167&units=metric&cnt=7&appid=30cd7a47ee781f7844f9d35ff36ba733"
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log("data", data);
      setSettimana(data);
    })
    .catch((err) => {
      console.log("erroreee", err);
    });
};





return(

<Container className="mb-5">
<Row>
<Col>


    <Card className="bg-dark text-white mt-5">
      <Card.Img src="https://images.pexels.com/photos/2189214/pexels-photo-2189214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image" style={{height:'20rem'}}/>
      <Card.ImgOverlay>
        <Card.Title className="fs-2 fw-bold text-black d-flex justify-content-start">{informazioni && informazioni.name}, IT</Card.Title>
        <Card.Text className="fs-2  text-black d-flex justify-content-start">
        {informazioni && informazioni.weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2" ></i>
  )}  {informazioni && informazioni.weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2" ></i>
  )} {informazioni && informazioni.weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2" ></i>
  )}   {informazioni && informazioni.main.temp} °C
        </Card.Text>
        <Card.Text className="fw-bold text-danger d-flex justify-content-start">
        <i className="bi bi-arrow-up-right" ></i> {informazioni && informazioni.main.temp_max
} °C temp-max 
        
        </Card.Text>
        <Card.Text className="fw-bold text-primary d-flex justify-content-start">
         
        <i className="bi bi-arrow-down-right" ></i> {informazioni && informazioni.main.temp_min} °C temp-min  
        </Card.Text>
        <Card.Text className="fs-4 mt-5 text-black d-flex justify-content-start align-items-end">{informazioni && informazioni.weather[0].main} : {informazioni && informazioni.weather[0].description}</Card.Text>
        
      </Card.ImgOverlay>
    </Card>
 
</Col>

</Row>
   {settimana && (
<Row className="my-5 ">
  <Col md={4} lg={3} xl={3} xxl={2}>

<Card className="border border-warning mt-5 border-4 "  style={{ width: '12rem' }}>
        <Card.Header className="fw-bold text-white bg-black ">Lunedì</Card.Header>
        <Card.Body className="bg-black text-white">
          <Card.Title className="fw-bold d-flex justify-content-around">
          {settimana && settimana.list[0].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds text-info" ></i>
  )}  {settimana && settimana.list[0].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle text-primary" ></i>
  )} {settimana && settimana.list[0].weather[0].main === "Clear" && (
    <i className="bi bi-sun text-warning" ></i>
  )}  {settimana && settimana.list[0].weather[0].main} 
          </Card.Title>

          <Card.Text className="mt-4 mb-2">
          {settimana && settimana.list[0].main.temp} °C
          </Card.Text>
        </Card.Body>
      </Card>

</Col>

<Col md={4} lg={3} xl={3} xxl={2}>

<Card className="border border-warning mt-5 border-4 "  style={{ width: '12rem' }}>
        <Card.Header className="fw-bold text-white bg-black ">Martedì</Card.Header>
        <Card.Body className="bg-black text-white">
          <Card.Title className="fw-bold d-flex justify-content-around">
          {settimana && settimana.list[1].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds text-info" ></i>
  )}  {settimana && settimana.list[1].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle text-primary" ></i>
  )} {settimana && settimana.list[1].weather[0].main === "Clear" && (
    <i className="bi bi-sun text-warning" ></i>
  )}  {settimana && settimana.list[1].weather[0].main} 
          </Card.Title>

          <Card.Text className="mt-4 mb-2">
          {settimana && settimana.list[1].main.temp} °C
          </Card.Text>
        </Card.Body>
      </Card>

</Col>
  
<Col md={4} lg={3} xl={3} xxl={2}>

<Card className="border border-warning mt-5 border-4 "  style={{ width: '12rem' }}>
        <Card.Header className="fw-bold text-white bg-black ">Mercoledì</Card.Header>
        <Card.Body className="bg-black text-white">
          <Card.Title className="fw-bold d-flex justify-content-around">
          {settimana && settimana.list[2].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds text-info" ></i>
  )}  {settimana && settimana.list[2].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle text-primary" ></i>
  )} {settimana && settimana.list[2].weather[0].main === "Clear" && (
    <i className="bi bi-sun text-warning" ></i>
  )}  {settimana && settimana.list[2].weather[0].main} 
          </Card.Title>

          <Card.Text className="mt-4 mb-2">
          {settimana && settimana.list[2].main.temp} °C
          </Card.Text>
        </Card.Body>
      </Card>

</Col>

<Col md={4} lg={3} xl={3} xxl={2}>

<Card className="border border-warning mt-5 border-4 "  style={{ width: '12rem' }}>
        <Card.Header className="fw-bold text-white bg-black ">Giovedì</Card.Header>
        <Card.Body className="bg-black text-white">
          <Card.Title className="fw-bold d-flex justify-content-around">
          {settimana && settimana.list[3].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds text-info" ></i>
  )}  {settimana && settimana.list[3].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle text-primary" ></i>
  )} {settimana && settimana.list[3].weather[0].main === "Clear" && (
    <i className="bi bi-sun text-warning" ></i>
  )}  {settimana && settimana.list[3].weather[0].main} 
          </Card.Title>

          <Card.Text className="mt-4 mb-2">
          {settimana && settimana.list[3].main.temp} °C
          </Card.Text>
        </Card.Body>
      </Card>

</Col>

<Col md={4} lg={3} xl={3} xxl={2}>

<Card className="border border-warning mt-5 border-4 "  style={{ width: '12rem' }}>
        <Card.Header className="fw-bold text-white bg-black ">Venerdì</Card.Header>
        <Card.Body className="bg-black text-white">
          <Card.Title className="fw-bold d-flex justify-content-around">
          {settimana && settimana.list[4].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds text-info" ></i>
  )}  {settimana && settimana.list[4].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle text-primary" ></i>
  )} {settimana && settimana.list[4].weather[0].main === "Clear" && (
    <i className="bi bi-sun text-warning" ></i>
  )}  {settimana && settimana.list[4].weather[0].main} 
          </Card.Title>

          <Card.Text className="mt-4 mb-2">
          {settimana && settimana.list[4].main.temp} °C
          </Card.Text>
        </Card.Body>
      </Card>

</Col>

<Col md={4} lg={3} xl={3} xxl={2}>

<Card className="border border-warning mt-5 border-4 "  style={{ width: '12rem' }}>
        <Card.Header className="fw-bold text-white bg-black ">Sabato</Card.Header>
        <Card.Body className="bg-black text-white">
          <Card.Title className="fw-bold d-flex justify-content-around">
          {settimana && settimana.list[5].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds text-info" ></i>
  )}  {settimana && settimana.list[5].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle text-primary" ></i>
  )} {settimana && settimana.list[5].weather[0].main === "Clear" && (
    <i className="bi bi-sun text-warning" ></i>
  )}  {settimana && settimana.list[5].weather[0].main} 
          </Card.Title>

          <Card.Text className="mt-4 mb-2">
          {settimana && settimana.list[5].main.temp} °C
          </Card.Text>
        </Card.Body>
      </Card>

</Col>

<Col md={4} lg={3} xl={3} xxl={2} className="mb-5">

<Card className="border border-warning mt-5 border-4 "  style={{ width: '12rem' }}>
        <Card.Header className="fw-bold text-white bg-black ">Domenica</Card.Header>
        <Card.Body className="bg-black text-white">
          <Card.Title className="fw-bold d-flex justify-content-around">
          {settimana && settimana.list[6].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds text-info" ></i>
  )}  {settimana && settimana.list[6].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle text-primary" ></i>
  )} {settimana && settimana.list[6].weather[0].main === "Clear" && (
    <i className="bi bi-sun text-warning" ></i>
  )}  {settimana && settimana.list[6].weather[0].main} 
          </Card.Title>

          <Card.Text className="mt-4 mb-2">
          {settimana && settimana.list[6].main.temp} °C
          </Card.Text>
        </Card.Body>
      </Card>

</Col>

</Row>
)}  
</Container>







)

}

export default MateraWeek