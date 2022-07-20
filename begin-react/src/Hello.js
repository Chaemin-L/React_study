import React from 'react';

// 함수형 컴포넌트
function Hello(props) {
    return <div style={{ color: props.color }}>안녕하세요! {props.isSmart && <span>똑똑한 </span>}{ props.name }입니다!</div>
}

Hello.defaultProps = { color: "pink", name: "이름 없음" };
export default Hello;