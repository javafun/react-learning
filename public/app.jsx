var Greater = React.createClass({
    // Set default value for properties
    getDefaultProps: function () {
        return{
            name: "World"
        }
    },
    render: function () {
        var name = this.props.name;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>This is form a component!</p>
            </div>
        );
    }

});

ReactDOM.render(
    <Greater />,
    document.getElementById('app')
)