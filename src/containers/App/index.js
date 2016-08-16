
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import style from './style.css'

const App = ({ todos, actions, children }) => (
  <div className={style.normal}>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
    {children}
  </div>
)

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(TodoActions, dispatch)
  }
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
