import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const PP = () => {
  const [dati, setDati] = useState(null);

  useEffect(() => {
    getFetch();
  }, []);

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

  return (
    <Container>
      {dati && (
        <Row>
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

        </Row>
      )}
    </Container>
  );
};

export default PP;