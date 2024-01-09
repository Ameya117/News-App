import React from 'react'

function NewsItem(props) {
  return (
    <div className="my-3" >
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top img-thumbnail" src={props.imgUrl} alt="Img not found" />
        <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? '#fafafc' : '#1e262e', color: props.textColor }}>
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text"><small className={props.mode === 'light' ? 'text-muted' : 'text-light'}>Updated on : {new Date(props.date).toGMTString()}</small></p>
          <p className="card-text"><small className={props.mode === 'light' ? 'text-muted' : 'text-light'}>By {props.author ? props.author : "Unknown"} </small></p>
          <a href={props.newsUrl} target="_blank" rel="noreferrer" className={`text-center btn btn-${props.buttonMode}`}>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem

