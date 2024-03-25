
"use client"
import React from 'react'
import { Card, Container } from 'react-bootstrap'

const HowTo = () => {
  return (
    <Container>
      <h2 className='text-center'>Como podemos cobaborar</h2>
      <div className="content d-flex gap-5">
        <Card className='align-items-center'>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default HowTo
