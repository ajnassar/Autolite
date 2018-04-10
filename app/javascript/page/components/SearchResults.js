import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: this.props.cars
    }
  }

  render() {
    return (
      <div>
        Search Results
        { this.props.cars }
      </div>
    )
  }
}

export default App
