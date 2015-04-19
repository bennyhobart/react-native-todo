var alt = require('../alt');
var TodoActions = require('../actions/TodoActions');
var _ = require('lodash');
var count = 0;
class TodoStore {
    constructor() {
        this.todos = [];

        this.bindListeners({
            handleAddTodo: TodoActions.ADD_TODO,
            handleUpdateTodo: TodoActions.UPDATE_TODO,
            handleRemoveTodo: TodoActions.REMOVE_TODO,
            handleRemoveSelectedTodos: TodoActions.REMOVE_SELECTED_TODOS,
            handleSetSelectedTodo: TodoActions.SET_SELECTED_TODO,
            handleSelectAll: TodoActions.SELECT_ALL
        });
    }

    handleAddTodo(text) {
        this.todos.push({
            text: text,
            selected: false,
            id: count++
        })
    }

    handleUpdateTodo({id, text}) {
        var todo = _.find(this.todos, function (todo) {
            return id === todo.id;
        });
        todo.text = text;
    }

    handleRemoveTodo(id) {
        _.remove(this.todos, function (todo) {
            return id === todo.id;
        });
    }

    handleRemoveSelectedTodos() {
        _.remove(this.todos, 'selected');
    }

    handleSetSelectedTodo({id, value}) {
        var todo = _.find(this.todos, function (todo) {
            return id === todo.id;
        });
        todo.selected = value;
    }

    handleSelectAll () {
        _.map(this.todos, function (todo) {
            todo.selected = true;
        });
    }
}

module.exports = alt.createStore(TodoStore, 'TodoStore');