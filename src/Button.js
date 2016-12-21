import React from 'react'

class Button extends React.Component {
  render () {
    return <Btn> I <Heart/> React </Btn>
  }

}

const Btn = (props) => <button> {props.children} </button>

class Heart extends React.Component {
  render () {
    return <span> &hearts; </span>
  }
}

export default Button
