import { useEffect, useState } from "react"
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";


const Temp =()=>{
const [temperaturaPescara, setTemperaturaPescara]= useState(null);
const [temperaturaMilano, setTemperaturaMilano]= useState(null);
const [temperaturaRoma, setTemperaturaRoma]= useState(null);
const [temperaturaRimini, setTemperaturaRimini]= useState(null);
const [temperaturaAncona, setTemperaturaAncona]= useState(null);
const [temperaturaBologna, setTemperaturaBologna]= useState(null);
const [temperaturaCagliari, setTemperaturaCagliari]= useState(null);
const [temperaturaNapoli, setTemperaturaNapoli]= useState(null);
const [temperaturaUdine, setTemperaturaUdine]= useState(null);
const [temperaturaVenezia, setTemperaturaVenezia]= useState(null);
const [temperaturaMatera, setTemperaturaMatera]= useState(null);

useEffect(() => {
    getTemperaturePescara();
    getTemperatureMilano();
    getTemperatureRoma();
    getTemperatureRimini();
    getTemperatureAncona();
    getTemperatureBologna();
    getTemperatureCagliari();
    getTemperatureNapoli();
    getTemperatureUdine();
    getTemperatureVenezia();
    getTemperatureMatera();
  }, []);

  const linkPescara = '/pescara';
  const linkMilano = '/milano';
  const linkRoma = '/roma';
  const linkRimini = '/rimini';
  const linkAncona = '/ancona';
  const linkBologna = '/bologna';
  const linkCagliari = '/cagliari';
  const linkNapoli = '/napoli';
  const linkUdine = '/udine';
  const linkVenezia = '/venezia';
  const linkMatera = '/matera';

const getTemperaturePescara =()=>{

fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.3333&lon=13.95&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
.then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
.then((data)=>{
    console.log("ok",data)
    setTemperaturaPescara(data)

    
})
.catch((err)=>{console.log("errore", err)})

}

const getTemperatureMilano =()=>{

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4643&lon=9.1895&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
    .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
    .then((data)=>{
        console.log("ok",data)
        setTemperaturaMilano(data)
    
        
    })
    .catch((err)=>{console.log("errore", err)})
    
    }

    const getTemperatureRoma =()=>{

        fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.2128&lon=-75.4557&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
        .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
        .then((data)=>{
            console.log("ok",data)
            setTemperaturaRoma(data)
        
            
        })
        .catch((err)=>{console.log("errore", err)})
        
        }

        const getTemperatureRimini =()=>{

            fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.0241&lon=12.5186&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
            .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
            .then((data)=>{
                console.log("ok",data)
                setTemperaturaRimini(data)
            
                
            })
            .catch((err)=>{console.log("errore", err)})
            
            }

            const getTemperatureAncona =()=>{

                fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.55&lon=13.1667&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                .then((data)=>{
                    console.log("ok",data)
                    setTemperaturaAncona(data)
                
                    
                })
                .catch((err)=>{console.log("errore", err)})
                
                }

                const getTemperatureBologna =()=>{

                    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.4667&lon=11.4333&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                    .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                    .then((data)=>{
                        console.log("ok",data)
                        setTemperaturaBologna(data)
                    
                        
                    })
                    .catch((err)=>{console.log("errore", err)})
                    
                    }

                    const getTemperatureCagliari =()=>{

                        fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.245&lon=9.0912&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                        .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                        .then((data)=>{
                            console.log("ok",data)
                            setTemperaturaCagliari(data)
                        
                            
                        })
                        .catch((err)=>{console.log("errore", err)})
                        
                        }


                    const getTemperatureNapoli =()=>{

                        fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.8333&lon=14.25&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                        .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                        .then((data)=>{
                            console.log("ok",data)
                            setTemperaturaNapoli(data)
                        
                            
                        })
                        .catch((err)=>{console.log("errore", err)})
                        
                        }

                        const getTemperatureUdine =()=>{

                            fetch("https://api.openweathermap.org/data/2.5/weather?lat=46.0619&lon=13.2422&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                            .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                            .then((data)=>{
                                console.log("ok",data)
                                setTemperaturaUdine(data)
                            
                                
                            })
                            .catch((err)=>{console.log("errore", err)})
                            
                            }

                            const getTemperatureVenezia =()=>{

                                fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4386&lon=12.3267&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                                .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                                .then((data)=>{
                                    console.log("ok",data)
                                    setTemperaturaVenezia(data)
                                
                                    
                                })
                                .catch((err)=>{console.log("errore", err)})
                                
                                }

                                const getTemperatureMatera =()=>{

                                    fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.5&lon=16.4167&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                                    .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                                    .then((data)=>{
                                        console.log("ok",data)
                                        setTemperaturaMatera(data)
                                    
                                        
                                    })
                                    .catch((err)=>{console.log("errore", err)})
                                    
                                    }


return(
    <>
    <Container>
<Row className="justify-content-center"> 
    <Col sm={1} md={1} xl={1}  xxl={2}></Col>
    <Col sm={5} md={5} xl={4}  xxl={3} className="me-5 me-lg-1">
    <Card className="mt-5  justify-content-center" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cartine.ilmeteo.it/italy-0.png" className=""/>   
    </Card></Col>
    <Col sm={5} md={5} xl={4} xxl={3}>
    <ListGroup className="my-5 d-flex justify-content-center">
        
      <ListGroup.Item className=" border border-light bg-warning d-flex justify-content-between fw-bold"> <a className="anc" href={linkPescara}> Pescara</a> <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaPescara?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaPescara?.main?.temp_max}</span></ListGroup.Item>
     
      <ListGroup.Item className=" border border-light d-flex justify-content-between fw-bold"><a className="anc" href={linkMilano}>Milano </a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaMilano?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaMilano?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className="border border-light bg-warning d-flex justify-content-between fw-bold"><a className="anc " href={linkRoma}>Roma  </a> <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaRoma?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaRoma?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light d-flex justify-content-between fw-bold"><a className="anc" href={linkRimini}>Rimini </a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaRoma?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaRoma?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light bg-warning d-flex justify-content-between fw-bold"><a className="anc" href={linkAncona}>Ancona </a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaAncona?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaAncona?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light d-flex justify-content-between fw-bold"><a className="anc" href={linkBologna}>Bologna </a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaBologna?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaBologna?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light bg-warning d-flex justify-content-between fw-bold"><a className="anc" href={linkCagliari}>Cagliari </a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaCagliari?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaCagliari?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light d-flex justify-content-between fw-bold"><a className="anc" href={linkNapoli}>Napoli </a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaNapoli?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaNapoli?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light bg-warning d-flex justify-content-between fw-bold"><a className="anc" href={linkUdine}> Udine</a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaUdine?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaUdine?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light d-flex justify-content-between fw-bold"><a className="anc" href={linkVenezia}> Venezia</a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaVenezia?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaVenezia?.main?.temp_max}</span></ListGroup.Item>
      <ListGroup.Item className=" border border-light bg-warning d-flex justify-content-between fw-bold"><a className="anc" href={linkMatera}> Matera</a>  <span><i className="bi bi-arrow-down-right text-info" ></i>{temperaturaMatera?.main?.temp_min}  <i className="bi bi-arrow-up-right text-danger" ></i>{temperaturaMatera?.main?.temp_max}</span></ListGroup.Item>
   
    </ListGroup>


    </Col>
    
</Row>
</Container>
    </>
)

}


export default Temp