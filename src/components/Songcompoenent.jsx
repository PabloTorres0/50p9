import React from 'react'
import './songComponent.css'

const Songcompoenent = ({audio, song, title}) => {

    const snd = new Audio (audio)

  

  return (
    <div className="song-container"
        onClick={()=>song(snd)}
    >   
        {title}
    </div>
  )
}

export default Songcompoenent