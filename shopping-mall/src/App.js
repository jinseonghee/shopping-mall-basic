// eslint-disable-next-line

import './App.css';
import { useState } from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
//import bg from './img/bg.png';
import data from './data';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className = "main-bg" 
      //style={{backgroundImage: 'url('+ bg +')'}}
      >
      </div>
      <div className="Container">
        <div className="row">
          {/* <Card shoes={shoes[0]} i={1}/>
          <Card shoes={shoes[1]} i={2}/>
          <Card shoes={shoes[2]} i={3}/> */}
          {
            shoes.map((a, i) => {
            return(
              <Card shoes={shoes[i]} i={i+1}/>
              )
            })
          }
          {/* <div className="col-md-4">
            <img src = "https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
            <img src={process.env.PUBLIC_URL + '/logo192.png'} />  public 폴더에 img를 넣을 떄 사용하는 방식
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src = "https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src = "https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
    <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
    <h4>{ props.shoes.title }</h4>
    <p>{ props.shoes.price }</p>
  </div>
  )
}

export default App;
