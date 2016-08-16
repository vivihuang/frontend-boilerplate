
import React, { PropTypes } from 'react'
import TodoTextInput from '../../components/TodoTextInput'

const Header = ({ addTodo }) => (
  <header>
    <h1>Todos</h1>
    <TodoTextInput
      newTodo
      onSave={addTodo}
      placeholder='What needs to be done?'
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
