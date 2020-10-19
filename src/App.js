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

    componentDidMount(){
        this.callInitialData();
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
            default:
                return {};
        }
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
        this.setState({ users: this.state.users.filter( data => data.id !== id) });
    }

    filteredData = e => {
        const { value } = e.target;
        if (!value.trim().length) return;
        this.setState({ users: this.state.users.filter(user => new RegExp(value + '.*').test(user.name)) });
    }

    changePage = e => {
        const { actualPage } = this.state;
        const newActualPage = e.target.id === "previous" ? actualPage - 1 : actualPage + 1;
        this.setState({ actualPage: newActualPage }, () => this.callInitialData());
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
        })}).then(res => res.json()).then(res => this.setState({ users: res.data.users.data }));
    }

    render () {
        console.log('render page',this.state.users);
        this.state.users[0] && console.log(this.state.users[0].name);
        console.log('render page quantity', this.state.users.length);

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
