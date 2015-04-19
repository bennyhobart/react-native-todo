var TodoActions = require('../actions/TodoActions');
var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} = React;

var Footer = React.createClass({
    _onPress: function () {
        TodoActions.removeSelectedTodos();
    },
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.flex1}>
                </View>
                <View style={styles.flex1}>
                    <Text style={styles.textCenter}>

                    </Text>
                </View>
                <View style={styles.flex1}>
                    <TouchableOpacity onPress={this._onPress}>
                        <Text style={styles.textRight}>Remove Selected</Text>
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
    borderTopWidth: 1,
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

module.exports = Footer;