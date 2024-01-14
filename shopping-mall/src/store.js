import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ //useState랑 사용 방식이 비슷, state 하나를 slice라고 부름
    name : 'user',
    //initialState : 'kim',
    initialState: { name: 'kim', age: 20},
    reducers: { //변경 함수 만들땐, reducer를 써주고 만들어줌
        changeName(state) { //state는 위에있는 state를 의미함
            //return 'join ' + state
            state.name = 'park'
        },
        increase(state) {
            state.age += 1
        }
    }
  })

  export let { changeName, increase } = user.actions //오른쪽 자료를 변수로 빼는 문법


  let stock = createSlice({ //useState랑 사용 방식이 비슷, state 하나를 slice라고 부름
    name : 'user',
    initialState : [10, 11, 12]
  })

  let cart = createSlice({
      name: 'cart',
      initialState: 
        [
            {id : 1, name : 'White and Black', count : 2},
            {id : 2, name : 'Grey Yordan', count : 1}
          ],  //initialState에는 array, object모두 다 들어갈 수 있다.
          reducers: {
              addCount(state, action) {
                let 번호 = state.findIndex((a) => {
                    return a.id === action.payload; //payload와 같은 id를 가진 상품을 찾아와서 +1
                })
                state[번호].count++
              },
              addItem(state, action) {
                  state.push(action.payload)
              }
          }
  })

export let { addCount, addItem} = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer, //redux 규격, 이렇게 사용하면 모든 컴포넌트들이 state를 가져다 사용할 수 있음(왼쪽은 그냥 작명 이름)
    stock : stock.reducer,
    cart: cart.reducer,
   }
})