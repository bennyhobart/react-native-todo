'use strict';

var React = require('react-native');
var _ = require('lodash');
var {
  View,
  AppRegistry,
  StyleSheet
} = React;
var Header = require('./components/Header');
var TodoList = require('./components/TodoList');
var Footer = require('./components/Footer');

var Todo = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
              {/* https://github.com/facebook/react-native/issues/868 */}
              <Header />
              <TodoList />
              <Footer />
            </View>
        );
    }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('Todo', () => Todo);
