import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ data, delContact }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {data.map(dataItem => (
          <ContactItem
            key={dataItem.id}
            props={dataItem}
            delContact={delContact}
          />
        ))}
      </ul>
    </div>
  )
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }),
  ),
  delContact: PropTypes.func.isRequired,
};

export default ContactList;