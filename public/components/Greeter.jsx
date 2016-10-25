var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    // Set default value for properties
    getDefaultProps: function () {
        return {
            name: "React",
            message: "Some paragraph"
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    handleNewName: function (name) {
        this.setState({
            name: name
        })
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewName={this.handleNewName} />
            </div>
        );
    }

});

module.exports = Greeter;
