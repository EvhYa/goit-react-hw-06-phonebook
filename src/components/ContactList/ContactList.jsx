import { useDispatch, useSelector } from 'react-redux';
import { Container, List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selector';
import { removeContact } from 'redux/contactsSlice';
import { useEffect, useState } from 'react';

export function ContactList() {
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const [filteredContacts, setFilteredContacts] = useState(items);

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredContacts(
      items.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    );
  }, [items, filter]);


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
