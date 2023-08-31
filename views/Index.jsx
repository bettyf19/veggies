const React = require('react');

class Index extends React.Component {
    render() {
      return (
        <div> 
          <nav>
            <a href="/veggies/new">Create a New Veggie</a>
          </nav>
          <h1>Veggies Index Page</h1>
          <ul>
            {
              this.props.veggies?.map((veggie, i) => {
                return (
                  <li key={i}>
                    The <a href={`/veggies/${veggie._id}`}> { veggie.name } </a> is { veggie.color }. { veggie.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
                  </li>
                )
              })
            }
          </ul>
          </div>
      )
    }
  }
  
module.exports = Index;