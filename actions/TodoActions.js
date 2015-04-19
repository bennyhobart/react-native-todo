var alt = require('../alt');

class TodoActions {
  addTodo(text) {
    this.dispatch(text);
  }

  setSelectedTodo({id, value}) {
    this.dispatch({id, value});
  }

  updateTodo({id, text}) {
    this.dispatch({id, text});
  }
  removeTodo(id) {
    this.dispatch(id);
  }
  removeSelectedTodos() {
    this.dispatch()
  }
  selectAll() {
    this.dispatch()
  }
}

module.exports = alt.createActions(TodoActions);