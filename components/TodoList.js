var TodoStore = require('../stores/TodoStore');
var TodoItem = require('./TodoItem');
var React = require('react-native');
var {
    ListView,
    StyleSheet,
    ScrollView
} = React;

var TodoList = React.createClass({
    _onChange: function (state) {
        var todos = TodoStore.getState().todos;
        var listViewDataSource = this.state.listViewDataSource;
        this.setState({
            listViewDataSource: this.state.listViewDataSource.cloneWithRows(todos)
        });
    },
    getInitialState: function() {
        var todos = TodoStore.getState().todos;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
        return {
            listViewDataSource: ds.cloneWithRows(todos)
        };
    },
    componentDidMount: function() {
        TodoStore.listen(this._onChange);
    },
    componentWillUnmount: function() {
        TodoStore.unlisten(this._onChange);
    },
    render: function() {
        return (
            <ScrollView>
                <ListView
                  dataSource={this.state.listViewDataSource}
                  renderRow={(todoData) => <TodoItem {...todoData} />}
                />
            </ScrollView>
        );
    }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
});

module.exports = TodoList;