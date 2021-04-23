import React, { Component } from 'react';
import Form from './Components/Form';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import style from './App.module.css';


class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  addContact = (data) => {

    if (this.state.contacts.some(el => el.name === data.name)) {
      console.log(alert(`${data.name} is already in contacts`));
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };
  
  deleteContact = (e) => {
    const contactId = e.target.id;
    
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId), 
    }));
  };

  inputFilterHandler = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
    
  filterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts === null) {
      this.setState({ contacts: [] });
    } else this.setState({ contacts: parseContacts });
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };
  
  render() {

    return (
      <>
        <h1 className={style.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        {(this.state.contacts.length > 0) &&
          <div className={style.flexContainer}>
          <ContactList
            data={this.filterContacts()}
            delContact = {this.deleteContact} 
          />
          <Filter
            value={this.state.filter}
            inputFilterHandler={this.inputFilterHandler} />
          </div>
        }
      </>
    )
  }
};

export default App;


