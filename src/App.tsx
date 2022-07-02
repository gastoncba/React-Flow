import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Transition, Container} from 'semantic-ui-react'
import welcome from './Welcome.png'
import grulla from './grullaSVG.svg'
import logoWelcome from './Logo-config.svg'
import comience from './comience.svg'
import encuesta from './encuesta.svg'
import mejora from './mejora.svg'
import {Grid, Box, TextField, Button} from '@mui/material/'

function App() {
  useEffect(() => {
    setAnimation(true);
    console.log('valor de animation', animation)
  }, [])
  const [animation, setAnimation] = useState(false)
  return (
      <Container fluid>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item xs={4}>
          <Box sx={{display:'flex', 
            justifyContent: 'center', mt: 5}}>
              <Box>
                <img src={mejora} alt="" height='110px'/>
              </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box>
            <form>
            <Grid container rowSpacing={2} justifyContent='center' direction='row'>
                <Grid item lg={12} sx={{marginTop: 2}}>
                  <Box sx={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                    <Box>
                      <img src={logoWelcome} height='160px'></img>
                    </Box>
                    {/* <Box sx={{marginTop: 4}}>
                      <img src={welcome} height='120px'></img>
                    </Box> */}
                  </Box>
                </Grid>

                <Grid item lg={12} sx={{width: '100%'}}>
                  <TextField
                    fullWidth
                    name="marca"
                    label="Su Marca"
                  >
                  </TextField>
                </Grid>
                <Box sx={{my: 2, width:'100%'}}>
                  <Button
                  variant="contained"
                  disabled={false}
                  sx={{
                    width: '100%',
                    fontFamily: "Sulphur Point",
                    fontSize: "1rem",
                    background: "black",
                    color: "white",
                    borderRadius: 20,
                    textTransform: "capitalize",
                    ":hover": {
                      background: "#FF00C7",
                    },
                  }}
                  >
                  Comenzar
                  </Button>
                </Box>
                <Box sx={{mt: 2}}>
                  <Transition animation='jiggle' duration={3000} visible={animation}>
                    <img src={comience} height='70px'></img>
                  </Transition> 
                </Box>
              </Grid>
            </form>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{display:'flex', 
            justifyContent: 'center', mt: 5}}>
              <Box>
                <img src={encuesta} alt="" height='110px'/>
              </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
