var Greater = React.createClass({
    // Set default value for properties
    getDefaultProps: function () {
        return {
            name: "React"
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }
    },
    render: function () {
        var name = this.state.name;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>This is form a component!</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>

            </div>
        );
    }

});

ReactDOM.render(
    <Greater />,
    document.getElementById('app')
)