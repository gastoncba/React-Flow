import React from 'react'

interface Props {}

const Sidebar:React.FunctionComponent<Props> = (props:Props) => {

    const onDragStart = (event:React.DragEvent<HTMLDivElement>, nodeType:string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    
    return(
        <aside>
      <div className="description">Preguntas y opciones cargadas</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
    )
}

export default Sidebar 
