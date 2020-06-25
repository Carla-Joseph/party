import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
      <ul>
        <li className="list-group-item border-success rounded m-2">
          <img
            src={`http://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`}
          /> {this.props.movie.original_title}
        </li>
        <li className="list-group-item detail border-warning rounded mt-2">
          Released date: {this.props.movie.release_date}
        </li>
        <li className="list-group-item detail border-warning rounded mt-2">
          Original language: {this.props.movie.original_language}
        </li>
        <li className="list-group-item detail border-warning rounded mt-2">
          Overview: {this.props.movie.overview}
        </li>
        <li className="list-group-item detail border-warning rounded mt-2">
          Rating: {this.props.movie.vote_average}
        </li>
      </ul>
    )
  }
}
