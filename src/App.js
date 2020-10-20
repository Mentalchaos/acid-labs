import React, { Component } from 'react';

// MockData here for testing purposes
// import data from './mockData.json';

// Components
import Logo from './components/Logo';
import UserTable from './components/UserTable';
import Search from './components/Search';
import PageLimits from './components/PageLimits';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import NewUser from './components/NewUser';

// CSS
import './css/all.css';

class App extends Component {
    state = {
        users: [],
        filteredUsers: [],
        actualPage: 0,
        maxPage: 0,
        showUser: []
    }

    // Just obtaining the data from graphql API
    componentDidMount(){
        this.callInitialData();
    }

    // Calling this function many times due to fake backend not sending dynamic page limit
    showUser = () => {
        const { users } = this.state;
        const backToTheFuture = [...users];
        let newData = [];

        while (backToTheFuture.length > 0) {
            newData.push(backToTheFuture.splice(0,3));
            if(backToTheFuture.length === 0){
                this.setState({
                    showUser: newData,
                    maxPage: Math.ceil(this.state.users.length / 3)
                })
            }
        }
    }

    setField = (field, value) => {
        switch (field) {
            case 'name':
                return { name: value };
            case 'email':
                return { email: value };
            case 'city':
                return { city: value };
            case 'phone':
                return { phone: value };
            default: return {};
        }
    }

    addNewUser = () => {
        const userData = [];
        const inputs = document.querySelectorAll(".add-user-input");
        inputs.forEach( data => userData.push(data.value));
    
        //@TODO, refactorize this
        this.setState({
            users: this.state.users.concat({
                id: (this.state.users.length + 1).toString(),
                name: userData[0],
                email: userData[1],
                address: { 
                    city: userData[2]
                },
                phone: userData[3]
            })
        }, () => this.showUser())
    }

    handleChange = e => {
        const { setField, state } = this;
        const { users } = state;
        const { id, value } = e.target;
        const [name, newId] = id.split('-');
        this.setState({ users: users.map(user => user.id !== newId ? user : { ...user, ...setField(name, value) })});
    }

    removeUser = e => {
        const id  = e.target.id.split('-')[1];
        this.setState({ users: this.state.users.filter( data => data.id !== id) }, () => this.showUser());
    }

    filteredData = e => {
        const { value } = e.target;
        if (!value.trim().length) return this.setState({ filteredUsers: [] });
        const filteredUsers = [...this.state.users].filter(user => new RegExp(value.toLowerCase() + '.*').test(user.name.toLowerCase()));
        this.setState({ filteredUsers });
    }

    changePage = e => {
        const { actualPage } = this.state;
        const newActualPage = e.target.id === "previous" ? actualPage - 1 : actualPage + 1;
        this.setState({ actualPage: newActualPage });
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
                                page: 1
                                limit: 10
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
        })}).then(res => res.json()).then(res => this.setState({ users: res.data.users.data})).then(() => this.showUser());
    }

    render () {
        const { filteredUsers, showUser, actualPage, maxPage } = this.state;

        return (
        this.state.showUser.length ? <div className="App">
                <Logo />
                <Search filteredData={this.filteredData} />
                <UserTable 
                    handleChange={this.handleChange} 
                    data={ filteredUsers.length ? filteredUsers : showUser[actualPage] }
                    removeUser={this.removeUser}
                />
                <NewUser addNewUser={ this.addNewUser } />
                <PageLimits 
                    changePage={this.changePage}
                    actualPage={this.state.actualPage}
                    maxPage={maxPage}
                />
                <Footer />
            </div> : <Spinner />
        )
    }
}

App.displayName = "App";

export default App;
