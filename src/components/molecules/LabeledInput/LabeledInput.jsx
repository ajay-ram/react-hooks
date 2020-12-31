import React from 'react';
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'

const LabeledInput = props => (
  <div className="form-group">
      <Label> {props.label}</Label>
      <Input 
        className="form-control" 
        id = {props.id}
        type= {props.type}
        value = {props.value}
        onChange ={props.onChange}/>
  </div>
  
);


export default LabeledInput;
