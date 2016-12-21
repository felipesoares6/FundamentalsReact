import React from 'react'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      txt: 'state text top'
    }
  }

  _update (e) {
    this.setState({ txt: e.target.value })
  }

  render () {
    return (
      <div>
        <h1 className=""> Hello React World { this.props.cat } </h1>
        <h2> Egg Head { this.state.txt } </h2>
        <Widget update={ this._update.bind(this) } />
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={ props.update } />




//validate data
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

//default props
App.defaultProps = {
  txt: 'this is the default txt'
}

// const App = () => <h1> React Top Component </h1>

export default App
