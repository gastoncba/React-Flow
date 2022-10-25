import React, {useState, useCallback, useRef, useEffect} from "react";
import { Button, Box, Typography, Divider} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import './App.css'
import ReactFlow, {
  applyEdgeChanges, 
  applyNodeChanges, 
  addEdge, 
  Background, 
  Controls, 
  MarkerType, 
  Node, 
  Edge, 
  NodeChange,
  EdgeChange, 
  Connection,
  ReactFlowProvider
} from "react-flow-renderer";
import { Modal } from "./Components/Modal/Modal.component";
import 'reactflow/dist/style.css';
import 'reactflow/dist/base.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Sidebar from "./Components/Sidebar/Sidebar.component";

interface Question {
  id?: number; 
  type: string, 
  positiveQuestion: string,
  negativeQuestion: string | null, 
  starToDisplayPositive: number, 
  multipleSelection: boolean;
}

interface Option {
  idOption?: number
  value: string,
  type: string
}

interface QuestionChain {
  id?: number, 
  question: Question, 
  positiveOptions: Option[],
  negativeOptions: Option[],
  acceptStart: boolean
}

interface QuestionGroup {
  id?: number; 
  name: string, 
  questionChain: QuestionChain[]
}

const App = () =>  {

  const [open, setOpen] = useState<boolean>(false)
  const [op, setOp] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [isQuestion, setIsQuestion] = useState<boolean>(true)

  const handleModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }


  const labelQuestion = (question:string, cantStart: number|null, negativeQuestion: string) => {
    return(
    <>
    <div>
        {
          (negativeQuestion === "") ? (<strong>{question}</strong>):(
            <>
            <Box sx={{display:'flex', flexDirection: 'row', alignItems:'center', columnGap: 1}}>
              <AddCircleOutlineIcon />
              <Typography variant='caption'>
                {question}
              </Typography>
            </Box>

            <Divider sx={{my:1}}/>
            
            <Box sx={{display:'flex', flexDirection: 'row', alignItems:'center', columnGap: 1}}>
              <RemoveCircleOutlineIcon />
              <Typography variant="caption">
                {negativeQuestion}
              </Typography>
            </Box>
            </>
          )
        }
        {
          cantStart && (
            <div style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
            <small>Buena experiencia {cantStart}</small>

            <StarIcon sx={{color: '#faaf00'}}/>
            </div>
          )
        }
      </div>
    </>)
  }


  const labelOption = (option: string) => {
    return(
    <>
    <div>
      <strong>{option}</strong>
    </div>
    </>)
  }

  const initialNodes:{id:string,data:{label:any, value: Question|Option, typeNode: string}, position: {x:number,y:number}}[] = [
    {
      id: '1',
      //type: 'input',
      data: { 
        label: labelOption('El ambiente') , 
        value: {value: 'El ambinte', type: 'STRING', idOption: 1},
        typeNode: "OPTION"
      },
      position: { x: 250, y: 25 },
    }
  
    // {
    //   id: '2',
    //   // you can also pass a React component as a label
    //   data: { label: 'la musica' },
    //   position: { x: 100, y: 125 },
    // },
    // {
    //   id: '3',
    //   //type: 'output',
    //   data: { label: 'La atención' },
    //   position: { x: 250, y: 250 },
    // },
    // {
    //   id: '4',
    //   //type: 'output',
    //   data: { label: 'El ambiente' },
    //   position: { x: 350, y: 350 },
    // },
  ];
  
  const initialEdges: Edge<{id: string, source: string, target: string}>[] = [
    // { id: 'e1-2', source: '1', target: '2' },
    // { id: 'e1-3', source: '1', target: '3' },
    // { id: 'e1-4', source: '1', target: '4'}
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
  [setEdges])


  //const defaultEdgeOptions = { animated: true };

  const yPos = useRef(0);

  const addNode = useCallback((label: string, cantStart: number|null, isQuestion: boolean, questionNegative: string) => {
    
    let newQuestion: Question
    let newOption: Option

    if(isQuestion) {
      newQuestion = {
        positiveQuestion: label,
        negativeQuestion: (questionNegative !== "") ? questionNegative : null,
        multipleSelection: true,
        type: "CLOSED",
        starToDisplayPositive: cantStart as number 
      }
      //console.log('question: ', newQuestion)
    } else {
      newOption = {
        type: "STRING", 
        value: label
      }

      //console.log('option: ', newOption)
    }
    
    const newNode = {
      id: Math.random() + "",
      data: {
        label: isQuestion ? labelQuestion(label, cantStart,questionNegative): labelOption(label),
        //@ts-ignore
        value: isQuestion ? newQuestion : newOption,
        typeNode: isQuestion ? "QUESTION":"OPTION"
      }, 
      position: {x:100, y: yPos.current}
    }
    setNodes((nodes) => [...nodes, newNode])

  }, [])

  const saveQuestionnarire = () => {
    console.log(edges)
    console.log(nodes)
  }

  return(
    <div style={{height: 500}}>
      <ReactFlowProvider>
      <ReactFlow 
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      // defaultEdgeOptions={defaultEdgeOptions}
      fitView>
        <Background />
        <Controls />
      </ReactFlow>

      <Modal open={open} onClose={closeModal} title={title} optionOrQuestion={op} addNode={addNode} isQuestion={isQuestion}></Modal>

      <Box sx={{display: 'flex', flexDirection: 'row', columnGap: 6}}>
        <Button variant='contained' onClick={() => {
          setOp('pregunta')
          setTitle('pregunta')
          setIsQuestion(true)
          handleModal();
        }}>
          Pregunta 
        </Button>
        <Button variant="contained" onClick={() => {
          setOp('opcion')
          setTitle('opcion')
          setIsQuestion(false)
          handleModal()
        }}>
          Opcion
        </Button>
        <Button variant="contained">
          Condicion
        </Button>
        <Button onClick={saveQuestionnarire}>
          guardar cuestionario
        </Button>
      </Box>
      </ReactFlowProvider>
    </div>) 

}

export default App;
