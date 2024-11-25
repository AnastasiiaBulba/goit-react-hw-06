import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
// Імпортуємо екшен
import { addContact } from "../../redux/contactsSlice";
// Імпортуємо селектор
import { selectContacts } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  // Отримуємо поточні контакти з Redux
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    // Перевірка на дублювання контактів
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${values.name} is already in contacts!`);
      return;
    }

    // Відправка екшену для додавання контакту
    dispatch(addContact({ id: Date.now().toString(), ...values }));
    // Скидаємо форму після успішного сабміту
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.contactForm}>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" placeholder="Enter name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field
              type="text"
              id="number"
              name="number"
              placeholder="Enter phone number"
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
