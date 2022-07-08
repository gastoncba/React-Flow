import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Typography, Grid, Box} from '@mui/material'
import CardSlider from "./Components/CardSlide/CardSlider";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const App = () =>  {
  const items = [1,2,3,4,5,6,7,8]; 

  return(
    <>
    <Grid container direction='row' sx={{mb:2}}>
      <Grid item lg={4} md={4} sm={12} xs={12} sx={{display: 'flex', justifyContent:'center'}}>
      <Typography variant="h5" component='div'>
          Franquicias
        </Typography>
      </Grid>
    </Grid>
    <Carousel responsive={responsive}>
      {
        items.map((item,index) => {
          return(
            <Box sx={{display: 'flex', justifyContent: 'center'}} key={index}>
              <CardSlider></CardSlider>
            </Box>
          )
        })
      }
    </Carousel>
    </>
  )
  // useEffect(() => {
  //   setAnimation(true);
  //   console.log('valor de animation', animation)
  // }, [])
  // const [animation, setAnimation] = useState(false)
  // return (
  //     <Container fluid>
  //     <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

  //       <Grid item xs={4}>
  //         <Box sx={{display:'flex', 
  //           justifyContent: 'center', mt: 5}}>
  //             <Box>
  //               <img src={mejora} alt="" height='110px'/>
  //             </Box>
  //         </Box>
  //       </Grid>

  //       <Grid item xs={4}>
  //         <Box>
  //           <form>
  //           <Grid container rowSpacing={2} justifyContent='center' direction='row'>
  //               <Grid item lg={12} sx={{marginTop: 2}}>
  //                 <Box sx={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
  //                   <Box>
  //                     <img src={logoWelcome} height='160px'></img>
  //                   </Box>
  //                   {/* <Box sx={{marginTop: 4}}>
  //                     <img src={welcome} height='120px'></img>
  //                   </Box> */}
  //                 </Box>
  //               </Grid>

  //               <Grid item lg={12} sx={{width: '100%'}}>
  //                 <TextField
  //                   fullWidth
  //                   name="marca"
  //                   label="Su Marca"
  //                 >
  //                 </TextField>
  //               </Grid>
  //               <Box sx={{my: 2, width:'100%'}}>
  //                 <Button
  //                 variant="contained"
  //                 disabled={false}
  //                 sx={{
  //                   width: '100%',
  //                   fontFamily: "Sulphur Point",
  //                   fontSize: "1rem",
  //                   background: "black",
  //                   color: "white",
  //                   borderRadius: 20,
  //                   textTransform: "capitalize",
  //                   ":hover": {
  //                     background: "#FF00C7",
  //                   },
  //                 }}
  //                 >
  //                 Comenzar
  //                 </Button>
  //               </Box>
  //               <Box sx={{mt: 2}}>
  //                 <Transition animation='jiggle' duration={3000} visible={animation}>
  //                   <img src={comience} height='70px'></img>
  //                 </Transition> 
  //               </Box>
  //             </Grid>
  //           </form>
  //         </Box>
  //       </Grid>

  //       <Grid item xs={4}>
  //         <Box sx={{display:'flex', 
  //           justifyContent: 'center', mt: 5}}>
  //             <Box>
  //               <img src={encuesta} alt="" height='110px'/>
  //             </Box>
  //         </Box>
  //       </Grid>

  //     </Grid>
  //   </Container>
  // );

}

export default App;
