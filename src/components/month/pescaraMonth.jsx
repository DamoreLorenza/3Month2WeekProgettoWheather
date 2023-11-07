import { useEffect, useState } from "react"
import { Col, Container, Row, Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';



const PescaraWeek =()=>{
const [informazioni, setInformazioni]= useState(null);

const [settimana, setSettimana] = useState(null);

useEffect(()=>{
    getPescara()
    
    getWeek();
},[])

const getPescara=()=>{

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.3333&lon=13.95&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
    .then((res)=>{if(res.ok){return res.json()}else{throw new Error("errore")}})
    .then((data)=>{console.log("data",data)
     setInformazioni(data)
    })
    .catch((err)=>{console.log("errore",err)})


}
// https://api.openweathermap.org/data/2.5/forecast/daily?lat=42.3333&lon=13.95&units=metric&cnt=7&appid=90386ef0d079cf85ead9990b0b53536c

const getWeek = () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?lat=42.3333&lon=13.95&units=metric&cnt=7&appid=30cd7a47ee781f7844f9d35ff36ba733"
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

<Container>
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
<Row>

<Table striped="columns" className="table mt-5 bg-black">
      <thead className="bg-black">
        <tr className="">
          <th className="">EpiMeteo</th>
          <th>Lunedì</th>
          <th>Martedì</th>
          <th>Mercoledì</th>
          <th>Giovedì</th>
          <th>Venerdì</th>
          <th>Sabato</th>
          <th>Domenica</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <Row>
<Col>{settimana && settimana.list[0].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds " ></i>
  )}  {settimana && settimana.list[0].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle " ></i>
  )} {settimana && settimana.list[0].weather[0].main === "Clear" && (
    <i className="bi bi-sun" ></i>
  )}
  </Col>
  <Col>
   {settimana && settimana.list[0].weather[0].main} 
  </Col>
  </Row>
  
 {settimana && settimana.list[0].main.temp} °C</td>
  
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      
      </tbody>
    </Table>

</Row>
)}  
</Container>







)

}

export default PescaraWeek