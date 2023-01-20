import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { getContacts } from 'redux/contacts/selectors';
import {
  FormInputStyled,
  FormStyled,
  FormLabelStyled,
} from './ContactForm.styled';
import { BtnStyled } from 'components/common/BtnStyled';
import { addContact } from 'redux/contacts/operations';

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const id = nanoid();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const contactsLists = [...contacts.items];
    if (
      contactsLists.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.warn(`Name ${name} is already in contacts. Enter another name`);
      setName('');
      return;
    }
    if (contactsLists.find(contact => number === contact.number)) {
      toast.warn(
        `Number ${number} is already in contacts. Enter another number`
      );
      setNumber('');
      return;
    }

    dispatch(addContact({ id, name, number }));
    toast.success(`Contact ${name} successfully added`);
    reset();
  };

  return (
    <FormStyled onSubmit={handleFormSubmit}>
      <FormLabelStyled htmlFor={nameInputId}>Name</FormLabelStyled>
      <FormInputStyled
        id={nameInputId}
        type="text"
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeName}
      />

      <FormLabelStyled htmlFor={numberInputId}>Number</FormLabelStyled>
      <FormInputStyled
        id={numberInputId}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeNumber}
      />

      <BtnStyled type="submit">Add contact</BtnStyled>
    </FormStyled>
  );
}
