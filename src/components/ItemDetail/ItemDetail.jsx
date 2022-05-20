import React from "react"
import { Card, Button, Container, Row, Col} from 'react-bootstrap'

export default function ItemDetail({producto}) {
    return (
        <>
            <h3>Lista de Productos</h3>
            
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '10rem'}}>
                            <Card.Img variant="top" src={producto.thumbnail} />
                            <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>
                                {producto.id}
                            </Card.Text>
                            <Button variant="primary">{producto.price}</Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
                
        </>
    )
}
