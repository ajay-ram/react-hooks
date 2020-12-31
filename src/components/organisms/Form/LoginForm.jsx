import {React,useState} from 'react';
import Button       from '../../atoms/Button/Button';
import LabeledInput from '../../molecules/LabeledInput/LabeledInput';

require('./Style.css');

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   function handleSubmit(event) {
    event.preventDefault();
    console.log("login  submitted")
   }

  return(
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <form id="login-form" className="form" onSubmit = {handleSubmit}>
                    <h3 className="text-center text-info">Login</h3>
                    <LabeledInput
                          id = "email"
                          label = "UserName:"
                          type="email"
                          value = {email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      
                    <LabeledInput
                        id = "password"
                        label = "Password:"
                        type="password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    <div className="form-group">
                        <Button text= "Submit"/>
                    </div>
                </form>
        </div>
    </div>
      
  );
};

