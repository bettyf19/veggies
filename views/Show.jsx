const React = require('react')

class Show extends React.Component {
    render() {
        const veggie = this.props.veggie;
        return (
            <div>
                <h1>Veggies Show Page</h1>
                The {this.props.veggie.name} is {this.props.veggie.color}. {this.props.veggie.readyToEat ? `It is ready to eat!` : `It is not ready to eat!`}
            </div>
        );
    }
}

module.exports = Show;