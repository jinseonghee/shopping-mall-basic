import { useParams } from "react-router-dom";
import {useEffect, useState, useContext } from "react";
import { Nav } from "react-bootstrap";
import {context1} from './../App.js'
//import styled from 'styled-components'

// let Box = styled.div`
//   padding : 20px;
//   color : grey
// `;

// let YellowBtn = styled.button` 
//   background : ${ props => props.bg };
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px; 
// `; 
 
// let NewBtn = styled.button(YellowBtn)

function Detail(props) {
  
    let { inventory } = useContext(context1) //보관함 해체해 주는 함수, {} destructuring 함수로 꺼내 쓸 수 있음

    let {id} = useParams(); // 유저가 URL 파라미터에 입력한 거 가져오는 hook
    //let 찾은상품 = props.shoes.find((x) => x.id === id); // find로 array 자료 안에서 원하는 항목만 찾아옴 // array자료.find(() => {return 조건식}) 
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    });
    let [alert, setAlert] = useState(true);
    const [tab, setTab ] = useState(0);
    let [fade2, setFade2 ] = useState(''); //page animation

    useEffect(() => {
      setFade2('end')
      return () => {
        setFade2('')
      }
    }, [])

    useEffect(()=>{
        setTimeout(()=>{ setAlert(false)}, 2000)
      }, [])

    return(
        <div className={'container start ' + fade2}> {/*변수 추가하고 싶을 땐, 띄어쓰기 해주기 */}
        {
                 alert === true
                 ? <div className="alert alert-warning">
                     2초이내 구매시 할인
                   </div>
                 : null
        }
        
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="" />
            </div> 
            <div className="col-md-6 mt-4"> 
            {/* <h4 className="pt-5">{props.shoes[id].title}</h4> */} {/*useParams를 이용해 사용자가 url에 입력한 id값을 그대로 갖고 옴 */}
            <h4 className="pt-5">{찾은상품.title}</h4>
            {/* <p>{props.shoes[id].content}</p> */}
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        {/* tab button */}
        <Nav variant="tabs" defaultActiveKey="link0"> {/* 기본으로 눌려있을 버튼 */}
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTab(0)
            }}eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTab(1)
            }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTab(2)
            }} eventKey="link2 ">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 
        //shoes={props.shoes} 
        tab={tab}/>
        </div> 
    )
}

// function TabContent(props) {
//   if(props.tab == 0) { //tab이라는 state는 detail component에 있지 TabCotent에 없기 때문에 사용하고 싶으면 부모component인 detail에서 props로 가져와야 함
//     return <div>content0</div> /* component는 return문이 없으면 재기능을 못하기 때문에 component로 사용하고 싶으면 반드시 return문 작성 */
//   }
//   if(props.tab == 1) {
//     return <div>content1</div>
//   } 
//   if(props.tab == 2) {
//     return <div>content2</div>
//   }
// }

function TabContent({tab, shoes}) { //다른 방법 사용
  let [ fade, setFade ] = useState('');
  let { inventory } = useContext(context1); //detail 뿐만 아니라 그 자식들도 Props 없이 사용 가능

  useEffect(() => {
  let a = setTimeout(() => {
    setFade('end')      
    }, 100);
    return () => { //useEffect 실행 전에 실행 됨.
      clearTimeout(a);
      setFade('')
    }
  }, [tab])
  return (<div className={`start ${fade}`}> {/*문자 중간에 변수 넣으려면 `문자 ${변수}문자`*/}
    {[<div>
      {/*{shoes[0].title}*/}
      {inventory}
    </div>,<div>content1</div>,<div>content2</div>
    ][tab]} {/*[tab]에서 왼쪽에 있는 자료형을 꺼내는 구조*/}
  </div>)
}


export default Detail;