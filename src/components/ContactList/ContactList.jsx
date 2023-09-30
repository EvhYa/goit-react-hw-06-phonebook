import { useDispatch, useSelector } from 'react-redux';
import { Container, List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selector';
import { removeContact } from 'redux/contactsSlice';
import { useEffect, useState } from 'react';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    );
  }, [contacts, filter]);

  return (
    <Container>
      {filteredContacts.length ? (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name} tel: {number}
              <button type="button" onClick={() => dispatch(removeContact(id))}>
                Delete
              </button>
            </li>
          ))}
        </List>
      ) : (
        <p>Contact is not found</p>
      )}
    </Container>
  );
}
