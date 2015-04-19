var TodoActions = require('../actions/TodoActions');
var React = require('react-native');
var {
    View,
    Text,
    TextInput,
    StyleSheet,
    SwitchIOS,
    TouchableOpacity
} = React;

var TodoItem = React.createClass({
    render: function() {
        console.log(this.props.selected);
        return (
            <View style={styles.row}>
                <SwitchIOS
                    onValueChange={(value) => TodoActions.setSelectedTodo({id: this.props.id, value: value })}
                    value={this.props.selected}
                />
                <TextInput
                    autoFocus={true}
                    style={styles.todoText}
                    value={this.props.text}
                    onChangeText={(text) => TodoActions.updateTodo({id: this.props.id, text: text})}
                />
                {/* <Text>{this.props.text}</Text> */}
                <TouchableOpacity onPress={() => TodoActions.removeTodo(this.props.id)}>
                    <Text>
                        Remove
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
});

var styles = StyleSheet.create({
  todoText: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  row: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

module.exports = TodoItem;