import React from 'react'; 
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './MainPage.css';
import ErrorBoundary from './ErrorBoundary';

class MainPage extends React.Component { 
    componentDidMount() {
        // this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {     
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {                                              
        const { searchField, onSearchChange, robots, isPending } = this.props;
        if (isPending) {               //"loading" screen
            return <h1>Loading</h1>
        } else {
        return(
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={this.filterRobots()} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
        }   
    }
}

export default MainPage