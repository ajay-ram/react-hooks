import {React,useState} from 'react';
import FormMol from '../../molecules/FormMol/FormMol';
require('./Style.css');

export default function LoginForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fields = [
      {
        id : 'firstName',
        label :'FirstName:',
        type : 'text',
        value : {firstName},
        onChange : (e) => setFirstName(e.target.value)
      },
      {
        id : 'lastName',
        label :'LastName:',
        type : 'text',
        value : {lastName},
        onChange : (e) => setLastName(e.target.value)
      },
      {
        id : 'email',
        label :'UserName',
        type : 'email',
        value : {email},
        onChange : (e) => setEmail(e.target.value)
      },
      {
        id : 'password',
        label :'Password:',
        type : 'password',
        value : {password},
        onChange : (e) => setPassword(e.target.value)
      }
  ];

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Signup submitted")
    window.location.href = "/login";
   }

  return(
        <FormMol handleSubmit={handleSubmit} data = {fields}/>    
  );
};

