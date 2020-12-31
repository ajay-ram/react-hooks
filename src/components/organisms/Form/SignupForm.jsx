import {React,useState} from 'react';
import Button       from '../../atoms/Button/Button';
import LabeledInput from '../../molecules/LabeledInput/LabeledInput';

require('./Style.css');

export default function LoginForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   function handleSubmit(event) {
    event.preventDefault();
    console.log("Signup submitted")
    window.location.href = "/login";
   }

  return(
    <div id="signup">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
                <form id="login-form" className="form" onSubmit = {handleSubmit}>
                    <h3 className="text-center text-info">Signup</h3>
                    <LabeledInput
                          id = "firstName"
                          label = "FirstName:"
                          type="text"
                          value = {firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                    <LabeledInput 
                          id = "lastName" 
                          label = "LastName:"
                          type="lastName"
                          value = {lastName}
                          onChange={(e) => setLastName(e.target.value)}/>
                    <LabeledInput 
                          id = "email" 
                          label = "Email:"
                          type="email"
                          value = {email}
                          onChange={(e) => setEmail(e.target.value)}/>
                    <LabeledInput 
                        id="password" 
                        type="password"
                        label = "Password:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <div className="form-group">
                        <Button text= "Signup"/>
                    </div>
                </form>
        </div>    
    </div>
      
  );
};

