import React, { Component, PropTypes } from 'react'

import TodoTextInput from '../TodoTextInput'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
        <h1>Todo List</h1>
        <TodoTextInput onSave={this.handleSubmit} />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
