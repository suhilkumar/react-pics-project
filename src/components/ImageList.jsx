import React from 'react'
import './ImageList.css'
function ImageList(props) {
   const image = props.images.map(({description, id, urls}) => {
        return (
            <div key={id}>
         <img  src={urls.regular} alt={description}/>
         </div>
        )
    })
    return(
        <div className='image-list'>{image}</div>
    )
}

export default ImageList