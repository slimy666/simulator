import React from 'react'
import "./LoginPage.css"
import LoginPageForm from './LoginPageForm'
import { Button, Container, Box } from '@mui/material'
import {Paper} from '@mui/material'

function LoginPage() {


  return (

    <Container fluid className='LoginPageBox'
    sx={{
      display:'grid',
      alignContent : 'center',
      justifyContent : 'center',
      // maxheight:'100%'

    }}
    
    >
      <Paper elevation={2} sx={{px:3}}>
        
          <LoginPageForm  />



      </Paper >





    </Container>


  )
}






export default LoginPage




