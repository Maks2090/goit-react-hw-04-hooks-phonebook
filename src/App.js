import {useState} from 'react';
import './App.css';
import PropTypes from "prop-types";
import ContactForm from './components/ContactFotm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import useLocalStorage from './hooks/useLocalStorage';



export default function App(){

   const [contacts, setContacts] = useLocalStorage('contacts', [])
   const [filter, setFilter] = useState('');

   
  const  formSubmitHandler = (data) => {

    const findContact = contacts.find((contact) => {
      return contact.name === data.name;
    });

    !findContact
      ? setContacts([data, ...contacts])
      
      : alert(`${data.name} is already in contact`);

  }

  const getList = () => {
    
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = (data) => {
    return setContacts(contacts.filter((contact) => contact.id !== data.id))
  };
  

  const filterList = (e) => {
    setFilter(e.target.value);
  };


  return (
    <div>
      <h1 className="title"> Phonebook</h1>

      <ContactForm
        onSubmit={formSubmitHandler}
      />

      <h2 className="title">Contacts</h2>

      <Filter filter={filter}
        filterList={filterList}
      />

      <ContactList
        getContacts={getList()}
        deleteContact={deleteContact}
      />
    </div>
  )
}


App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};