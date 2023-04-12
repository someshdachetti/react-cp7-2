import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSuggestionClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )

    return (
      <div className="whiteCard">
        <img
          className="googleImage"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="search">
          <input type="search" onChange={this.onSearch} value={searchInput} />
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <ul className="suggestions-list">
            {searchResult.map(each => (
              <SuggestionItem
                key={each.id}
                searchResult={each}
                onSuggestionClick={this.onSuggestionClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
