// eslint-disable-next-line

import './App.css';
import { Suspense, createContext, useState, useEffect } from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
//import bg from './img/bg.png';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';
import axios from 'axios';
import Cart from './routes/Cart';
import { useQuery } from 'react-query';
import Card from './Card';

// const Detail = lazy( () => import('./routes/Detail.js') ) //필요할 때 import 해라
// const Cart = lazy( () => import('./routes/Cart.js') )

export let context1 = createContext();
function App() {
  
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([])) //loacalstorage에는 array자료형을 저장할 수 없으므로 json.stringfy사용 
  }, [])

  let [shoes, setShoes] = useState(data);
  let [ inventory ] = useState([10, 11, 12]);
  let navigate = useNavigate(); //페이지 이동을 도와줌

  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data
    })
  )

  // result.data
  // result.isLoading
  // result.error //성공/실패/로딩 쉽게 파악 가능
  
  
  return (
    <div className="App">
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              {navigate('/')}
            }}>Home</Nav.Link>
            {/*   {navigate(-1) 이렇게 넣어주면 뒤로 가기 처럼 한단계 뒤로 간다} */}
            <Nav.Link onClick={() => {
              {navigate('/cart')}
            }}>Cart</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav className="ms-auto">
            {/* {result.isLoading ? '로딩중' : result.data.name} */}
            {result.isLoading && '로딩중'} {/*왼쪽에 있는게 true면 오른쪽 출력 */}
            {result.error && '에러남'} 
            {result.data && result.data.name} 
            </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>로딩중임</div>}>
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
             //shoes라는 state의 개수에 맞게 card component 생성하기 
            shoes.map((a, i) => {
            return(
              <Card shoes={shoes[i]} i={i+1}/> //<자식 컴포넌트 작명={state이름} (작명은 자유롭게 하되 보통은 state이름과 똑같이 하고 {}애 보낼 state이름을 사용)>
              //자식 컴포넌트에서 props parameter등록 후 props.작명 이런식으로 사용 가능
              )
            })
          }
           </div>
        </div>
          <button onClick = {() => {
            axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
              console.log("result.data", result.data);
              let copy = [...shoes, ...result.data]; //...는 spread 연산자로 괄호를 벗겨주는 역할(concat()사용해도 됨)
              setShoes(copy); //shoes state가 copy로 대체
            }).catch(() => {
              console.log('connected fail')
            })
          }}>버튼</button>
      </>
  }>
        </Route>
        {/*버튼 누를시에 데이터를 가져와서 상품 카드 3개 뿌리기*/}
        <Route path="/detail/:id" element={
          <context1.Provider value={{inventory, shoes}}> {/*value에는 공유를 원하는 state를 작성  */}
        <Detail shoes={shoes}/>{/*여기 안의 모든 컴포넌트는 props없이 inventory, shoes 사용 가능 */}
        </context1.Provider>}
         />
         {/*장바구니*/}
         <Route path="/cart" element={<Cart/>}></Route>
        {/*<Route path="*" element={<div>없는페이지임</div>}/> {/* 404페이지*/}
        <Route path="/about" element={ <About/> } >  
        <Route path="member" element={ <div>멤버들</div> } />
        <Route path="location" element={ <div>회사위치</div> } />
      </Route>
      </Routes>
      </Suspense>
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
//nested route를 사용할때 경로안에 경로를 보여주는데, 그 자리에 위치를 지정해 줘야한다, 그 때 사용하는게 outlet임 
function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

// //card 컴포넌트 안에서 shoes라는 state를 가져다 사용하고 있는데, 이건 card function(자식 컴포넌트) 안에서 사용하고 있지 않고, 
// //App.js(부모 컴포넌트)안에서 사용하고 있기 때문에, 부모에 있는 shoes state를 가져다 사용하고 싶을 경우 props를 이용해서 사용하면 된다.
// function Card(props) {
//   return (
//     <div className="col-md-4">
//     <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
//     <h4>{ props.shoes.title }</h4>
//     <p>{ props.shoes.price }</p>
//   </div>
//   )
// }

export default App;
