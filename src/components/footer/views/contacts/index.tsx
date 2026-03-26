import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import ContactItem from '../../components/contacts-item';
import ContactTitle from '../../components/contact-title';

const FooterContact = () => {
  return (
    <div className="self-start text-white">
      <ContactTitle />
      <ul className="text-sm *:mb-3 lg:text-xl">
        <ContactItem text="touragency@gmail.com">
          <CiMail />
        </ContactItem>

        <ContactItem text="995-599-99-99">
          <CiPhone />
        </ContactItem>

        <ContactItem text="nameless street 11">
          <CiLocationOn />
        </ContactItem>
      </ul>
    </div>
  );
};

export default FooterContact;
