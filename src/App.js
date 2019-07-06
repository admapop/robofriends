import React from 'react'; //can also be written as React, { Component }
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component { //if declared as above, use just Component
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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredRobots); //gives actual value typed in the box
    }

    render() {
        return(
            <div className='tc' >
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={this.state.robots} />
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