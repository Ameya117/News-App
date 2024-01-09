import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import LoadingBar from 'react-top-loading-bar'

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [progress, setProgress] = useState(0);

  const updateNews = async () => {
    setProgress(progress + 25);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    setProgress(progress + 50);
    let data = await fetch(url);
    setProgress(progress + 75);
    let parsedData = await data.json();
    setProgress(100);
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
    setLoading(false);
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles.concat(parsedData.articles));
  };

  return (
    <>
      <h1 className="text-center" id="page-title" style={{ margin: '80px 20px 0px 20px' }}>{`${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Top headlines`}</h1>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <br />
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length<totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        
      >
        < div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"} newsUrl={element.url} date={element.publishedAt} author={element.author} mode={props.mode} textColor={props.textColor} backgroundColor={props.backgroundColor} toggleMode={props.toggleMode} buttonMode={props.buttonMode} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
