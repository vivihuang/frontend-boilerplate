import React, { PropTypes } from 'react'

const TodoList = ({ todos }) => (
  <ul>{todos.map(item => <li key={item.id}>{item.text}</li>)}</ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
