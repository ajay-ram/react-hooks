import {React,useState} from 'react';
import FormMol from '../../molecules/FormMol/FormMol';

require('./Style.css');

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fields = [
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
    console.log("login  submitted")
   }

  return(
      <FormMol handleSubmit={handleSubmit} data = {fields}/>
  );
};




