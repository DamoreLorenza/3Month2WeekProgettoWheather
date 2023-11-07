import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Elenco from "../oggi";


const Pescara =()=>{
const [informazioni, setInformazioni]= useState(null);
const [clim, setClim]= useState(null);
const [dati, setDati] = useState(null);

useEffect(()=>{
    getPescara()
    clima()
    getFetch();
},[])

const getPescara=()=>{

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.3333&lon=13.95&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
    .then((res)=>{if(res.ok){return res.json()}else{throw new Error("errore")}})
    .then((data)=>{console.log("data",data)
     setInformazioni(data)
    })
    .catch((err)=>{console.log("errore",err)})


}
const getFetch = () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?lat=42.3333&lon=13.95&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733"
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
      setDati(data);
    })
    .catch((err) => {
      console.log("erroreee", err);
    });
};


const clima=()=>{

  fetch("api.openweathermap.org/data/2.5/forecast?lat=42.3333&lon=13.95&units=metric&appid=23b8fd0c699cc332b45497e17a4b6f56")
  .then((res)=>{if(res.ok){return res.json()}else{throw new Error("errore")}})
  .then((data)=>{console.log("data",data)
   setClim(data)
  })
  .catch((err)=>{console.log("errore",err)})

}



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
   {dati && (
<Row>

            <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[6].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[6].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[6].main.humidity}%
              </Card.Text>
<Card.Text>
            {dati && dati.list[6].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[6].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[6].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[6].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>
          <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[7].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[7].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[7].main.humidity}%
              </Card.Text>
<Card.Text>
            {dati && dati.list[7].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[7].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[7].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[7].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>
          <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[0].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[0].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[0].main.humidity}%
              </Card.Text>
<Card.Text>
            {dati && dati.list[0].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[0].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[0].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[0].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>
 
  <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[1].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[1].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[1].main.humidity}%
              </Card.Text>
              
<Card.Text >
            {dati && dati.list[1].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[1].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[1].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[1].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>
          <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[2].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[2].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[2].main.humidity}%
              </Card.Text>
<Card.Text>
            {dati && dati.list[2].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[2].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[2].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[2].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>
          <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[3].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[3].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[3].main.humidity}%
              </Card.Text>
<Card.Text>
            {dati && dati.list[3].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[3].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[3].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[3].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>
          <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[4].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[4].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[4].main.humidity}%
              </Card.Text>
<Card.Text>
            {dati && dati.list[4].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[4].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[4].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[4].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>
          <Col  md={4} lg={3} xl={3} xxl={2}>
            <Card className="bg-dark text-white mt-5" style={{height:200}}>
            
              <Card.Text className="fs-4">{dati.list[5].dt_txt}</Card.Text>
            
              <Card.Text className="fs-5">
              {dati.list[5].main.temp}°C • <i class="bi bi-droplet text-info"></i> : {dati.list[5].main.humidity}%
              </Card.Text>
<Card.Text>
            {dati && dati.list[5].weather[0].main === "Clouds" && (
    <i className="bi bi-clouds me-2 fs-2 text-info" ></i>
  )}  {dati && dati.list[5].weather[0].main === "Rain" && (
    <i className="bi bi-cloud-drizzle me-2 fs-2 text-primary" ></i>
  )} {dati && dati.list[5].weather[0].main === "Clear" && (
    <i className="bi bi-sun me-2 fs-2 text-warning" ></i>
  )}   {dati.list[5].weather[0].main}
              </Card.Text>

            </Card>
           
          </Col>


  

</Row>
)}  
</Container>







)

}

export default Pescara