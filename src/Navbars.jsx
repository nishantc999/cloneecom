import React,{useContext,useState, useEffect} from 'react'
import {Context, tokenState} from "./StateProvider";
import {Link} from "react-router-dom"
import {Navbar,Col,Nav,NavDropdown,Container,Form,FormControl} from "react-bootstrap"
import {token} from "./SignIn"

const Navbars = (props) => {
    const [state, action] = useContext(Context);
    const {tokens,settokens}=useContext(tokenState)
    
    console.log(state)
    const logout=()=>{
      localStorage.removeItem("tokens")
      settokens(false)
      
    }
    const search = (e) => {
      props.setsearchvalue(e.target.value)
      
    }
    const token=localStorage.getItem("tokens")
    useEffect(()=>{
      if(token){
        settokens(true)
      }
    },[])
    return (<>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><Link class="nav-link" to="/">Ecommerce</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link class="nav-link" to="/">Home</Link>
      
    </Nav>
    <Nav>{tokens? <Link class="nav-link" to={"/"} onClick={logout}>Logout</Link>:<>
      <Link class="nav-link" to="/">Sign up</Link>
      <Link eventKey={2} class="nav-link" to="/signin">
       Sign in
      </Link>
      </>}
      <Link class="nav-link" to="/cart">Cart {state.length}</Link>
    </Nav>
    <Col lg="5">
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={search}
      />
     
    </Form>
    </Col>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>

    )
}

export default Navbars;

