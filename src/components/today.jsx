import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"



const Today = ()=>{
const link ='/detail'
return(
<>
<Container>

<Row>   
<h2 className="my-5">Previsioni Meteo Italia</h2>
</Row> 
<Row>
<Col sm={4} md={4}>
    
        <Button variant="outline-" className="mb-3  col-5 col-md-5"><a className="butt" href={link}>Oggi</a></Button>
        
        </Col>
<Col sm={4} md={4}><Button variant="outline-" className="mb-3 col-lg-7 col-md-5">Settimana</Button></Col>
<Col sm={4} md={4}><Button variant="outline-" className="col-5 col-md-5">Mese</Button></Col>
</Row>


</Container>
</>


)




}

export default Today