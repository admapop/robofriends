import React from 'react'; //can also be written as React, { Component }
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends React.Component { //if declared as above, use just Component
                                    //needs to be declared like this to use STATE
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    //when creating my own methods use arrow functions. IMPORTANT
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value }) //sets the searchfield to what I'm typing
        //console.log(filteredRobots); gives actual value typed in the box
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        }) //moved filtering here to get access to it as a prop
        return(
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
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