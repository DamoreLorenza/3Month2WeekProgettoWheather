import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap";



const Detail=()=>{
const [inf, setInf]=  useState(

   {Pescara: [],
    Milano: [],
     Roma: [],
     Rimini:[],
    Ancona:[],
    Bologna:[],
    Cagliari:[],
    Napoli:[],
     Udine:[],
     Venezia:[],
      Matera:[]} 

);

useEffect(() => {
    getDetailPescara();
    getDetailMilano();
    getDetailRoma();
    getDetailRimini();
    getDetailAncona();
    getDetailBologna();
    getDetailCagliari();
    getDetailNapoli();
    getDetailUdine();
    getDetailVenezia();
    getDetailMatera();
  }, []);


const getDetailPescara =()=>{

fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.3333&lon=13.95&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
.then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
.then((data)=>{
    console.log("ok",data)
    setInf({
        ...inf,
        Pescara: data
    }
    )

    
})
.catch((err)=>{console.log("errore", err)})

}

const getDetailMilano =()=>{

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4643&lon=9.1895&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
    .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
    .then((data)=>{
        console.log("ok",data)
        setInf({
            ...inf,
            Milano: data
        }
        )
    
        
    })
    .catch((err)=>{console.log("errore", err)})
    
    }

    const getDetailRoma =()=>{

        fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.2128&lon=-75.4557&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
        .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
        .then((data)=>{
            console.log("ok",data)
            setInf({
                ...inf,
                Roma: data
            }
            )
        
            
        })
        .catch((err)=>{console.log("errore", err)})
        
        }

        const getDetailRimini =()=>{

            fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.0241&lon=12.5186&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
            .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
            .then((data)=>{
                console.log("ok",data)
                setInf({
                    ...inf,
                    Rimini: data
                }
                )
            
                
            })
            .catch((err)=>{console.log("errore", err)})
            
            }

            const getDetailAncona =()=>{

                fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.55&lon=13.1667&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                .then((data)=>{
                    console.log("ok",data)
                    setInf({
                        ...inf,
                        Ancona: data
                    }
                    )
                
                    
                })
                .catch((err)=>{console.log("errore", err)})
                
                }

                const getDetailBologna =()=>{

                    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.4667&lon=11.4333&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                    .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                    .then((data)=>{
                        console.log("ok",data)
                        setInf({
                            ...inf,
                            Bologna: data
                        }
                        )
                    
                        
                    })
                    .catch((err)=>{console.log("errore", err)})
                    
                    }

                    const getDetailCagliari =()=>{

                        fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.245&lon=9.0912&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                        .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                        .then((data)=>{
                            console.log("ok",data)
                            setInf({
                                ...inf,
                                Cagliari: data
                            }
                            )
                        
                            
                        })
                        .catch((err)=>{console.log("errore", err)})
                        
                        }


                    const getDetailNapoli =()=>{

                        fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.8333&lon=14.25&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                        .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                        .then((data)=>{
                            console.log("ok",data)
                            setInf({
                                ...inf,
                                Napoli: data
                            }
                            )
                            
                        })
                        .catch((err)=>{console.log("errore", err)})
                        
                        }

                        const getDetailUdine =()=>{

                            fetch("https://api.openweathermap.org/data/2.5/weather?lat=46.0619&lon=13.2422&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                            .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                            .then((data)=>{
                                console.log("ok",data)
                                setInf({
                                    ...inf,
                                    Udine: data
                                }
                                )
                            
                                
                            })
                            .catch((err)=>{console.log("errore", err)})
                            
                            }

                            const getDetailVenezia =()=>{

                                fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4386&lon=12.3267&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                                .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                                .then((data)=>{
                                    console.log("ok",data)
                                    setInf({
                                        ...inf,
                                        Venezia: data
                                    }
                                    )
                                
                                    
                                })
                                .catch((err)=>{console.log("errore", err)})
                                
                                }

                                const getDetailMatera =()=>{

                                    fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.5&lon=16.4167&units=metric&appid=30cd7a47ee781f7844f9d35ff36ba733")
                                    .then((res)=>{if(res.ok){return res.json()}else{throw new Error ("tutte a me")}})
                                    .then((data)=>{
                                        console.log("ok",data)
                                        setInf({
                                            ...inf,
                                            Matera: data
                                        }
                                        )
                                    
                                        
                                    })
                                    .catch((err)=>{console.log("errore", err)})
                                    
                                    }

return(


    <>
<Container className="mt-5">
            <Row>
                

    {Object.keys(inf).map((city) => {
     
      return (
        <Col sm={6} md={4} key={city}>
        <Card  style={{ width: '18rem' , height:'20rem'}} className="cc d-flex mb-5 border border-primary-subtle border-4 ">
          <Card.Title className="fs-3 my-3">{city}</Card.Title>
          

          <Card.Text className="mt-3 mb-3">
        {inf[city]?.weather?.main  === "Clouds" && (
   <img src="./img/sun_6735034.png"/>
  )}  {inf[city]?.weather?.main  === "Rain" && (
    <img src="./img/rainy-day_6498316.png" alt="rainy" />
  )} {inf[city]?.weather?.main  === "Clear" && (
    <img src="./img/sun_10760437.png"/>
  )}
        </Card.Text>

          <Card.Text className="fw-bold mt-5 mb-3">Temperatura minima: {inf[city]?.main?.temp_min} °C</Card.Text>
          <Card.Text className="fw-bold">Temperatura massima: {inf[city]?.main?.temp_max} °C</Card.Text>
          <Card.Link href="#" className="linkcard fw-bold mt-3">vedi il meteo della settimana</Card.Link>
          <Card.Link href="#" className="linkcard fw-bold">vedi il meteo del mese</Card.Link>
        </Card>
       </Col>
      );
    })}


        </Row>
        </Container>
  </>
     








)
}

export default Detail