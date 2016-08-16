import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import TodoTextInput from '../TodoTextInput'
import style from './style.css'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo({ id, text })
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        <div className={style.view}>
          <input
            className={style.toggle}
            type='checkbox'
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />

          <label htmlFor='item' onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>

          <button className={style.destroy} onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    // TODO: compose
    const classes = classnames({
      [style.completed]: todo.completed,
      [style.editing]: this.state.editing,
      [style.normal]: !this.state.editing
    })

    return (
      <li className={classes}>
        {element}
      </li>
    )
  }
}

TodoItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
}

export default TodoItem
