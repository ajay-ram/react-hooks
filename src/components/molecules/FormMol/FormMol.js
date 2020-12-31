import React      from 'react';
import LabeledInput from '../LabeledInput/LabeledInput';
import Button       from '../../atoms/Button/Button';
import { Form } from 'react-bootstrap';


require('./Style.css');


const FormMol = props => (
  <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
          <Form onSubmit={props.handleSubmit}>
                {props.data.map(field => (
                    <LabeledInput
                        id = {field.id}
                        label = {field.label}
                        type= {field.type}
                        value = {field.email}
                        onChange={field.onChange}
                    />    
                    ))}
                <div className="form-group">
                        <Button text= "Submit"/>
                    </div>
            </Form>
        </div>
    </div>
  
);

export default FormMol;
