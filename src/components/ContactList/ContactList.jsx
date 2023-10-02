import { useDispatch, useSelector } from 'react-redux';
import { Container, List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selector';
import { removeContact } from 'redux/contactsSlice';

export function ContactList() {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContacts = () => {
    return items.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <Container>
      {filteredContacts().length ? (
        <List>
          {filteredContacts().map(({ id, name, number }) => (
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
