// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchResult, onsuggestion} = props
  const {suggestion} = searchResult

  const handleSuggestion = () => {
    onsuggestion(suggestion)
  }
  return (
    <li className="order" onClick={handleSuggestion}>
      <p>
        {suggestion}
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </p>
    </li>
  )
}
export default SuggestionItem
