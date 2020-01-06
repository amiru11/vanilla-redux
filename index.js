import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";

const toggleSwitch = bgColor => ({ type: TOGGLE_SWITCH, bgColor });

const initialState = {
  color: "#ff9999"
};
const generateHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const reducer = (state = initialState, action) => {
  // action.type에 따라서 다른 작업을 처리하도록!
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        color: action.bgColor
      };
    default:
      return state;
  }
};

// 스토어에 reducer 함수를 넣어서 스토어를 만들어준다.
const store = createStore(reducer);

// 1. render 함수 생성하기
const render = () => {
  const state = store.getState(); // 현재 상태를 불러오기 getState()
  // 1. toggle 처리하기
  divToggle.innerText = state.color;
  divToggle.style.backgroundColor = state.color;
};

render();

// 2. Subscribe 처리하기
/**
 * 스토어의 상태가 바뀔 때마다 render 함수가 호출되도록 하는 역할
 * store.subscribe(listener)
 * react-redux에서는 subscribe를 직접 처리해줌
 */
store.subscribe(render);

// 3. Dispatch: 액션 발생시키기
/**
 * 파라미터에 액션 객체를 넣어준다.
 */
divToggle.onclick = () => {
  store.dispatch(toggleSwitch(generateHexColor()));
};
