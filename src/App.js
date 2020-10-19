import React, { Component } from 'react';
import Logo from './components/Logo';
import UserTable from './components/UserTable';
import Search from './components/Search';
import PageLimits from './components/PageLimits';
//import data from './mockData.json';
import './css/all.css';

class App extends Component {
    state = {
        users: []
    }

    handleChange = e => {
        this.setState({

        })
        
        console.log(e.target.id);
    }

    componentDidMount(){
        this.callInitialData();
    }

    callInitialData = () => {
        const eaea = 1;
        fetch("https://graphqlzero.almansi.me/api", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
                "body": JSON.stringify({
                query: `{
                    users (
                        options: {
                            paginate: {
                                page: ${eaea}
                                limit: 3
                            }
                        }
                    )
                {
                    data {
                        id
                        name
                        email
                        phone
                        address { 
                            city 
                        }
                    }
                }
            }`
        })
        }).then(res => res.json()).then( res => this.setState({ users: res.data.users.data }))
    }

    render () {
        console.log(this.state.users);
        return (
            <div className="App">
                <Logo />
                <Search />
                <UserTable handleChange={this.handleChange} data={this.state.users}/>
                <PageLimits />
            </div>
        )
    }
}

App.displayName = "App";

export default App;
