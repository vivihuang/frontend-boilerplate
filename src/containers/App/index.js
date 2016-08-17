import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import TodoList from '../../components/TodoList'
import Footer from '../../components/Footer'

const App = ({ todos }) => (
  <div>
    <Header />
    <TodoList todos={todos} />
    <Footer count={todos.length} />
  </div>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

App.propTypes = {
  todos: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(App)
