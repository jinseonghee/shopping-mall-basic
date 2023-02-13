// eslint-disable-next-line

import './App.css';
import { useState } from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
//import bg from './img/bg.png';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              {navigate('/')}
            }}>Home</Nav.Link>
            {/*   {navigate(-1) 이렇게 넣어주면 뒤로 가기 처럼 한단계 뒤로 간다} */}
            <Nav.Link onClick={() => {
              {navigate('/detail')}
            }}>Cart</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
           <>
          <div className = "main-bg" 
             //style={{backgroundImage: 'url('+ bg +')'}}
            >
          </div>
           <div className="Container">
           <div className="row">
           {
            shoes.map((a, i) => {
            return(
              <Card shoes={shoes[i]} i={i+1}/>
              )
            })
          }
           </div>
        </div>
      </>
        }>
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="*" element={<div>없는페이지임</div>}/>
        <Route path="/about" element={ <About/> } >  
        <Route path="member" element={ <div>멤버들</div> } />
        <Route path="location" element={ <div>회사위치</div> } />
      </Route>
      </Routes>

      {/* <div className = "main-bg" 
      //style={{backgroundImage: 'url('+ bg +')'}}
      >
      </div> */}
      {/* <div className="Container">
        <div className="row"> */}
          {/* <Card shoes={shoes[0]} i={1}/>
          <Card shoes={shoes[1]} i={2}/>
          <Card shoes={shoes[2]} i={3}/> */}
          {/* {
            shoes.map((a, i) => {
            return(
              <Card shoes={shoes[i]} i={i+1}/>
              )
            })
          } */}
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
      // </div>
    // </div>
  );
}
function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
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
