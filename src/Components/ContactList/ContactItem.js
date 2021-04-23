import React from 'react';
import style from './ContactItem.module.css';

const ContactItem = ({ props, delContact }) => {
  return (
    <li className={style.item}>
      <span className={style.name}>{props.name}:</span>
      <span className={style.number}> {props.number}</span>
      <button type="submit" className={style.delBtn} id={props.id} onClick={delContact}>Delete</button>
    </li>
  )
};

export default ContactItem;
