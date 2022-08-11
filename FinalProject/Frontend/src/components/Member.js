import React from 'react'

export default function Member(props) {
    const {item} = props;
  return (

    <div className="card custom-card mem-desc">
      <img src={item.imgUrl} className="card-img-top mem-img" alt="..." />
      <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text ">{item.body}</p>
          <p className="card-text"> <span className="mem-des">Designation : {item.author}</span></p>
      </div>
    </div>


    
  )
}
