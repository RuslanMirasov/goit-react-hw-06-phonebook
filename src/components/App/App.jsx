import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

export default function App() {
  const contacts = useSelector(getContacts);
  return (
    <main className={css.main}>
      <h1 hidden>React HW-06-Phonebook</h1>

      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {contacts.length > 0 ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no contacts in Phonebook!"></Notification>
        </Section>
      )}
    </main>
  );
}
