import React, {useState} from 'react';

const Hello = () => {
    let myName = "hello myeonghyeon"
    let [myNameWithState, setmyNameWithState] = useState('서명현');
    const nameChange = () => {
        console.log("이름이 바뀝니다.")
        // myNameWithState = "유비"
        //직접 할당시 데이터가 바뀌지 않음
        setmyNameWithState('유비');
    }
    
    return (
        <>
            <div style={{color : 'red'}}>Hello world in compoenet</div>
            <div>{myNameWithState}</div>
            <button onClick={nameChange}>이름을 변경합니다.</button>
        </>
    );
}

export default Hello;