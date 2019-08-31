import React from 'react'; 
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField //gotcha right here, normally if there are multiple reducers,
                                       //it would be state.reducerName.whatever
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component { 
    constructor() {
        super()
        this.state = {
            robots: [],
        }
    }
    
    //added fetch request to pull in users from a JSON placeholder
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())               
            .then(users => this.setState({ robots: users}));
    }

    render() {                                              //moved filtering here to get access to it as a prop
        const { robots } = this.state;         //avoids having to use this.state in front of robots
                                                            //searchField
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {     
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })                                                  
        if (robots.length === 0) {               //"loading" screen
            return <h1>Loading</h1>
        } else {
        return(
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
        }   
    }
}


//Simple function to render our page, it does note have state
// function App() {
//     return(
//         <div className='tc' >
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots} />
//         </div>
//     );
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);