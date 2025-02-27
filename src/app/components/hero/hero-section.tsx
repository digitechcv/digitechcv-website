import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './hero.module.css'

const HeroSection = () => {
  return (
    <Container className={classes['hero-section']} fluid />
    
  )
}

export default HeroSection;