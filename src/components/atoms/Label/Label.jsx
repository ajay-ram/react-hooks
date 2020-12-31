import React      from 'react';

require('./Style.css');

const Label = props => (
  <div>
      <label className="text-info">{props.children}</label><br/>
  </div>
  
);

export default Label;
