var React = require('react-native');
var TodoActions = require('../actions/TodoActions');
var {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} = React;

var Header = React.createClass({
    _onPress: function () {
      console.log('hi');
      TodoActions.addTodo('');
    },
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.flex1}>
                </View>
                <View style={styles.flex1}>
                    <Text style={styles.textCenter}>
                        Todo
                    </Text>
                </View>
                <View style={styles.flex1}>
                    <TouchableOpacity onPress={this._onPress}>
                        <Text style={styles.textRight}>Add Item</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

});

var styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 20
  },
  flex1: {
    flex: 1
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  }
});

module.exports = Header;