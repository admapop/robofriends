import React from 'react'; //can also be written as React, { Component }
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component { //if declared as above, use just Component
                                    //needs to be declared like this to use STATE
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    //added fetch request to pull in users from a JSON placeholder
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())               //no {} or return needed because function is one line
            .then(users => this.setState({ robots: users}));
    }

    //when creating my own methods use arrow functions. IMPORTANT
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value }) //sets the searchfield to what I'm typing
        //console.log(filteredRobots); gives actual value typed in the box
    }

    render() {                                              //moved filtering here to get access to it as a prop
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })                                                  
        if (this.state.robots.length === 0) {               //"loading" screen
            return <h1>Loading</h1>
        } else {
        return(
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
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

export default App;