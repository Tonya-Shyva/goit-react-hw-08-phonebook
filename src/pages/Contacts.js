import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { UserContacts } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppContainer, Title } from 'components/ContactForm/ContactForm.styled';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title as="h2">Contacts</Title>
        <Filter></Filter>
        <UserContacts></UserContacts>
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </AppContainer>
    </main>
  );
}
