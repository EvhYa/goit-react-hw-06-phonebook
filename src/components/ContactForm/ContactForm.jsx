import { useState } from 'react';
import { Button, Container, Form } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    let contact = {
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </Container>
  );
}
