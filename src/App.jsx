import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Movie from './components/Movie'
import './index.scss'

class App extends Component {
  state = {
    movieData: [],
    currentInput: '',
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a9cfec18d0a886b84d7ca611145e8973'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          movieData: data.results,
        })
      })
  }

  formatMovies() {
    return this.state.movieData
      .filter(movie => {
        const searchInLowerCase = this.state.currentInput.toLowerCase()
        return movie.original_title.toLowerCase().includes(searchInLowerCase)
      })
      .map(movie => <Movie movie={movie} />)
  }

  handleInputChanged(event) {
    this.setState({
      currentInput: event.target.value,
    })
  }

  render() {
    const formattedMovies = this.formatMovies()
    return (
      <main className="wrapper p-2">
        <div className="bg-secondary text-white mt-1 mr-0 mb-2 ">
          <div className="container ">
            <h1 className="display-5 p-2">Party Like It's 1989!</h1>
          </div>
        </div>
        <div className="text-info">
          Search: <input onChange={event => this.handleInputChanged(event)} />
          <ul className="movies text-danger">{formattedMovies}</ul>
        </div>
      </main>
    )
  }
}

export default App

//  Try to capture a 1980's or early 90's aesthetic when you style your page. Have fun with it!
