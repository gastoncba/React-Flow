import React, {useState} from 'react'
import {Dialog,
    DialogTitle, 
    DialogContent, 
    TextField, 
    DialogActions, 
    Button, 
    Box,
    FormControlLabel, 
    FormGroup,
    Checkbox,
    Rating, 
    Typography
} from '@mui/material'


interface Props {
    open: boolean
    title: string,
    optionOrQuestion: string 
    onClose: () => void;
    addNode: (label:string, start: number|null, isQuestion:boolean, negativeQuestion: string) => void;
    isQuestion: boolean
}

export const Modal:React.FunctionComponent<Props> = (props:Props) => {


    const [checked, setChecked] = useState<boolean>(false);
    const [start, setStart] = useState<number|null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return(
    <>
    <Dialog open={props.open}>
        <Box sx={{mx:2, my:1}}>
        <DialogTitle>agregar {props.title}</DialogTitle>
        <DialogContent>
            <TextField label={`${props.optionOrQuestion}`} id="idText" fullWidth></TextField>
            {
                props.isQuestion ?
                (
                    <> 
                    <Box>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox onChange={handleChange}/>} label="Agregar pregunta negativa" />
                    </FormGroup>
                    </Box>
                    {
                        checked  && (
                            <TextField label="pregunta negativa" fullWidth sx={{mt:2}} id="questionNegative"></TextField>
                        )
                    }
                    
                    <Box sx={{mt:2}}>
                        <Typography component="legend">Cantidad de estrellas para buena experiencia</Typography>
                        <Rating precision={0.5} onChange={(event, newValue) => setStart(newValue)}/>
                    </Box>
                    </>
                ):
                (
                    <>
                    <strong>tipo de opcion</strong>
                    <select name="" id="">
                        <option value="">string</option>
                        <option>otro</option>
                    </select>
                    </>
                )
                // <Box>
                //     <FormGroup>
                //         <FormControlLabel control={<Checkbox onChange={handleChange}/>} label="Con puntaje" />
                //     </FormGroup>
                //     {
                //         checked && 
                //         <Box sx={{mt:2}}>
                //             <Typography component="legend">Cantidad de estrellas para buena experiencia</Typography>
                //             <Rating precision={0.5} onChange={(event, newValue) => setStart(newValue)}/>
                //         </Box>
                //     }
                // </Box> 
            }
        </DialogContent>
        <DialogActions sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Button variant="contained" onClick={() => {
                const docText = document.getElementById("idText")
                //@ts-ignore
                const label:string = docText.value
                let  labelSecond: string = ""; 
                if(props.isQuestion && checked) {
                    const doc = document.getElementById('questionNegative')
                    //@ts-ignore
                    labelSecond = doc.value
                }
                
                console.log('Valor de la pregunta o option: ', label)
                console.log('valor de la pregunta negativa..')
                props.addNode(label, start, props.isQuestion, labelSecond)
                props.onClose()
                setStart(null)
                setChecked(false)
                }}>Aceptar
            </Button>
            <Button variant="outlined" onClick={() => {
                props.onClose()
                setStart(null)
                setChecked(false)
                }}>Cancelar</Button>
        </DialogActions>
        </Box>
    </Dialog>
    </>)
}