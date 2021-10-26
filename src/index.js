import React from 'react';
import ReactDOM from 'react-dom';

// class --> 리액트 훅(함수를 쓰며 리액트의 기능을 사용하는 방법)

function helloName(name){
  return name.nick;
}

const name = {
  nick : "noonsun",
}

const hello = <h1>hello {helloName(name)}.</h1>

ReactDOM.render(hello, document.getElementById("root"));