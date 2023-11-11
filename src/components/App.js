import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Sections/Sections.styled';

const getSavedContacts = () => {
  const savedContacts = localStorage.getItem('name-contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
    const [contacts, setContacts] = useState(getSavedContacts);
    const [filter, setFilter] = useState('');


    useEffect(() => {
        localStorage.setItem('name-contacts', JSON.stringify(contacts));
    }, [contacts]);

    const onChangeFilter = evt => {
        setFilter( evt.currentTarget.value.trim())
    };
    
    const onaddContact = newContact => {
        const addContact = contacts.some(({ name }) => newContact.name === name)
        if (addContact) {
            return alert(
                `WARNING! ${newContact.name} is already in contacts`)
        } else {
            setContacts(prevState => 
                [...prevState, { ...newContact,  id: nanoid() }])
            }
        };
    

    const onDeleteContact = (contactId) => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== contactId),
    );
    };
    
    const getVisibleContacts = () => {
    return contacts.filter(contact => {
      const nameFilter = filter.toLowerCase();
      const hasName = contact.name.toLowerCase().includes(nameFilter);
     return hasName
    });
    }

            return (
                <div>
                    <Section>
                        <h1>Phonebook</h1>
                        <ContactForm onAdd={onaddContact} />
                    </Section>
                    <Section>
                        <h2>Contacts</h2>
                        <Filter value={filter} onFilter={onChangeFilter} />
                        {getVisibleContacts().length === 0 ? (
                            <p>Not Found</p>) : (
                            <ContactList
                                contactlist={getVisibleContacts()}
                                onDelete={onDeleteContact}
                            />
                        )}
                    </Section>
                </div>
            );
};
        
   

