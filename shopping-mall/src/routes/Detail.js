import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
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

function Detail(props) {

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x => x.id == id);
    let [alert, setAlert] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{ setAlert(false) }, 2000)
      }, [])
    

    return(
         
        <div className="container">
        {
                 alert == true
                 ? <div className="alert alert-warning">
                     2초이내 구매시 할인
                   </div>
                 : null
        }
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
            {/* <h4 className="pt-5">{props.shoes[id].title}</h4> */}
            <h4 className="pt-5">{찾은상품.title}</h4>
            {/* <p>{props.shoes[id].content}</p> */}
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        </div> 
    )
}

export default Detail;