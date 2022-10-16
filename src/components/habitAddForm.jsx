import React, {memo} from 'react';

// state가 따로 없다면 함수형 component 사용 가능
// props의 데이터가 변경되지 않으면 component 업데이트 하지 않아도 될 때 memo 사용

const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef(); //DOM요소에 접근

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = '';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});  

export default HabitAddForm;


//purecomponent -> props과 state의 안에 들어있는 최상위의 데이터가 변하지 않으면 render함수 호출x
