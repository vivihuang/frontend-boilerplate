import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as todoActionCreators from '../../actions'

import Header from '../../components/Header'
import TodoList from '../../components/TodoList'
import Footer from '../../components/Footer'

const App = ({ todos, todoActions }) => (
  <div>
    <Header addTodo={todoActions.addTodo} />
    <TodoList todos={todos} />
    <Footer count={todos.length} />
  </div>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  todoActions: bindActionCreators(todoActionCreators, dispatch)
})

App.propTypes = {
  todos: PropTypes.array.isRequired,
  todoActions: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
