import { ToastContainer } from 'react-toastify';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { UserContacts } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppContainer, Title } from 'components/ContactForm/ContactForm.styled';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title as="h2">Contacts</Title>
      <Filter></Filter>
      <div>{isLoading && 'Request in progress...'}</div>
      <UserContacts></UserContacts>
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </AppContainer>
  );
}
