import React from 'react';
import ReactDOM from 'react-dom';

class AppControl extends React.Component {
  constructor () {
    super();
    this.state = {increasing: false}
  }

  update () {
    ReactDOM.render(
      <AppControl val={this.props.val +1} />,
      document.getElementById('appControl')
    )
  }

  componentWillReceiveProps (nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }

  render () {
    console.log(this.state.increasing)

    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
}

AppControl.defaultProps = { val: 0 }

export default AppControl
