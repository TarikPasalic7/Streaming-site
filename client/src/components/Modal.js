import React from 'react'
import  ReactDOM  from 'react-dom'

export default function Modal({onClose,remove,title}) {
    return ReactDOM.createPortal(
        <>
        <div className="overlay"/>
        <div className="modal">
            <h1>Delete Stream</h1>
            <hr></hr>
           <div>Are you sure to delete the stream of title :   {title}</div>
            <button onClick={()=>remove()}>Delete</button>
            <button onClick={()=>onClose()}>Close </button>
          
        </div>
        </>,
        document.getElementById('portal')
    )
}
