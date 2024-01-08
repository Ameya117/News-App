import React from 'react'

function NewsItem (props){
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top img-thumbnail" src={props.imgUrl} alt="- " />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text"><small className="text-muted">Updated on : {new Date(props.date).toGMTString()}</small></p>
            <p className="card-text"><small className="text-muted">By {props.author?props.author:"Unknown"} </small></p>
            <a href={props.newsUrl} target="_blank" rel="noreferrer"  className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )  
}

export default NewsItem

