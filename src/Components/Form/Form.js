import React from 'react';
import style from './Form.module.css'
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
    id: ''
  };

  handleInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.setState({ id: uuidv4() })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '' });
    this.setState({ number: '' });
    this.setState({ id: '' })
  };

  render() {
  return (
    <form
      className={style.container}
      onSubmit={this.handleSubmit}>
        <label className={style.label}>Name:
          <input
            onChange={this.handleInput}
            value={this.state.name}
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={style.label}>Number:
          <input
            onChange={this.handleInput}
            value={this.state.number}
            className={style.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button
        type="submit"
        className={style.button}
        disabled={!this.state.name || !this.state.number}
        >Add contact</button>
      </form>
    )
  };
};



export default Form;