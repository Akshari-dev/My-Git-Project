import React from "react";
import {Button,ButtonGroup} from 'react-bootstrap';

function Demo(){
    return(
<React.Fragment>
<ButtonGroup    aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
</React.Fragment>

    )
}
export default Demo;