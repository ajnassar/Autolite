import React from 'react'
import Slider from './components/Slider'
import SearchResults from './components/SearchResults'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: []
    };
  }

  componentDidMount(){
    fetch('https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1523317709&oauth_nonce=2M87xB&oauth_version=1.0&oauth_signature=+q4qteHmUMHd+p84GlAosIevbYE=&page=1&price_min=5000&price_max=9000', {
      headers: {
        "x-api-key": "add your key here"
      }
    })
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        cars: data.records
      })
    })
  }

  render() {
    return (
      <div className="page-container">
        <Slider />
        <SearchResults cars={ this.state.cars } />
      </div>
    )
  }
}

export default App
