import React from 'react'; 
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch) //we need to send dispatch the requestRobots action
                                                        //the same as () => dispatch(requestRobots())
    }
}

class App extends React.Component { 
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {                                              
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {     
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })                                                  
        if (isPending) {               //"loading" screen
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