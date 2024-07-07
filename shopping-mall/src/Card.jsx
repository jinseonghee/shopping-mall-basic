import { Button } from "./stories/Button";
//card 컴포넌트 안에서 shoes라는 state를 가져다 사용하고 있는데, 이건 card function(자식 컴포넌트) 안에서 사용하고 있지 않고, 
//App.js(부모 컴포넌트)안에서 사용하고 있기 때문에, 부모에 있는 shoes state를 가져다 사용하고 싶을 경우 props를 이용해서 사용하면 된다.

const  Card = (props ) =>  {
    return (
      <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
      <Button>버튼</Button>
    </div>
    )
  }

  export default Card;
  