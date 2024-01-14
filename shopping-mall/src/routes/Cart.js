import { Table } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
//import { changeName, increase } from './../store/createSlice';
import { addCount, changeName, increase } from './../store.js'
import {useState, memo} from 'react';

// function Child() {
//     return <div>자식임</div>
// }

let Child = memo(function () { //memo 는 props가 변할때만 rendering해줌
    return <div>자식임</div>
})

function Cart() {

let state = useSelector((state) => { // 여기서 state는 store.js 안에 있던 모든 state
    return state
    //return state.user //원하는거 가져다 쓸 수 있음
}) //redux store 가져와줌
let dispatch = useDispatch(); // store.js로 요청을 보내주는 함수임
let [count, setCount] = useState(0);

return (
<div>
    <Child></Child>
    <button onClick={() => {
        setCount(count + 1)
    }}>+ </button>
    {/* <h6>{state.user}  의 장바구니</h6>
    <button onClick={() => {
        //dispatch(increase())
    }}></button> */}
<Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody> {/*map 왼쪽엔 array 붙일 수 있음 */}
  {
    state.cart.map((a, i) => 
    <tr key={i}> 
      <td>{state.cart[i].id}</td>
      <td>{state.cart[i].name}</td>
      <td>{state.cart[i].count}</td>
      <td>
          <button onClick={() => {
              dispatch(addCount(state.cart[i].id)) // dispatch(state변경함수())
          }}>+</button>
      </td>
    </tr>
      )
  }
    </tbody>
    </Table> 
  </div>
    )
}

export default Cart;