import React, { useState,useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

import { tokenState } from "./StateProvider";
const token=localStorage.getItem("tokens");
const SignIn=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const {tokens,settokens}=useContext(tokenState);
  const [error, seterror] =useState("");  
  const validateForm=()=> {
   if(email.length <= 0 && password.length <= 0){
    seterror("Please enter a valid email and password")
     return false;

   }
   else if(password.length == 0){
     seterror("Please enter a valid password")
     return false;
   }
   else if(email.length==0){
    seterror("please enter a valid email")
     return false
    }

     else{
      return true;
    }
  }
  

  const handleSubmit=(event)=> {
    event.preventDefault();
    if(validateForm()){
      localStorage.setItem("tokens","login");
      settokens(true)
      history.push("/")
    }
   
  }

  if(token){
    history.push("/")
}
  return (
    <div className="Login rounded">
      <Form onSubmit={handleSubmit}>
        <p className="text-center h3 text-success">Sign in</p>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{color:"red"}}>{error}</p>
        </Form.Group>
        <Button block size="lg" variant="warning" type="submit" disabled={false}>
          Sign In
        </Button>
      </Form>
    </div>
  );
}
export default SignIn