import React, { Component, PropTypes } from 'react'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
    }
  }

  render() {
    return (
      <input type='text' onKeyDown={this.handleSubmit} />
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default TodoTextInput
