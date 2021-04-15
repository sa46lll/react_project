import React, {useState} from 'react';
import axios from 'axios'

const Hello = () => {
    let myName = "hello myeonghyeon"
    let [myNameWithState, setmyNameWithState] = useState('서명현');
    let [myNameWithState2, setmyNameWithState2] = useState('서명현');
    const [news, setNews] = useState([]);
    const nameChange = () => {
        console.log("이름이 바뀝니다.")
        // myNameWithState = "유비"
        //직접 할당시 데이터가 바뀌지 않음
        setmyNameWithState('유비');
    }
    const getNewApi = () =>{
        axios.get('https://newsapi.org/v2/everything?q=intel&from=2021-04-14&sortBy=publishedAt&apiKey=396e962f124c431e9ca3ac2860741ac3')
            .then(function (response) {
                console.log(response.data.articles);
                setNews(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
        });
    }

    const handleTextChange = (e) =>{
        const {value, name} = e.target;
        setmyNameWithState(value);
    }

    return (
        <>
            <div style={{color : 'purple', fontSize : "30px", fontWeight : "bold"}}>Hello world in component</div>
            <div>{myNameWithState}</div>
            <button onClick={getNewApi}>이름을 변경합니다.</button>
            <br></br>
            <input type="text" onChange={handleTextChange}></input>
            {news.map((n) => {
                return (<><p>{n.title}</p></>)
            })}
        </>
    );
}

export default Hello;