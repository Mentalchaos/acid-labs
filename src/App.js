import React, { Component } from 'react';
import Logo from './components/Logo';
import UserTable from './components/UserTable';
import Search from './components/Search';
import PageLimits from './components/PageLimits';
import Footer from './components/Footer';
//import data from './mockData.json';
import './css/all.css';
import Spinner from './components/Spinner';
import NewUser from './components/NewUser';

class App extends Component {
    state = {
        users: [],
        actualPage: 1
    }

    handleChange = e => {
        const { users } = this.state;
        const [id] = e.target.id.split('-');
        this.setState({ users: users.map(user => user.id !== id ? user : { ...user, name: e.target.value })});
    }

    removeUser = e => {
        const id  = e.target.id.split('-')[1];
        this.setState({
            users: this.state.users.filter( data => data.id !== id)
        })
    }

    filteredData = e => {
        console.log(e.target.value);
    }

    componentDidMount(){
        this.callInitialData();
    }

    changePage = e => {
        const { actualPage } = this.state;

        this.setState({
            actualPage: e.target.id === "previous" ? actualPage - 1 : actualPage + 1
        }, () => this.callInitialData());
    }

    callInitialData = () => {
        fetch("https://graphqlzero.almansi.me/api", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
                "body": JSON.stringify({
                query: `{
                    users (
                        options: {
                            paginate: {
                                page: ${this.state.actualPage}
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
        console.log('render page',this.state.users);
        this.state.users[0] && console.log(this.state.users[0].name);

        return (
        this.state.users.length ? <div className="App">
                <Logo />
                <Search filteredData={this.filteredData} />
                <UserTable 
                    handleChange={this.handleChange} 
                    data={this.state.users}
                    removeUser={this.removeUser}
                />
                <NewUser />
                <PageLimits 
                    changePage={this.changePage} 
                    actualPage={this.state.actualPage} 
                />
                <Footer />
            </div> : <Spinner />
        )
    }
}

App.displayName = "App";

export default App;
