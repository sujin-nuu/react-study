import { useState } from "react";

export const StateChangeContainer =() =>{
    
    let [state, setState] = useState<number>(0);

    const setChange = () => {
        setState(state + 1);
    }

    const justChange = () => {
        state = state + 1;
    }

    const chackChange = () => {
        alert("state 값 : "+state);
    }

    return (
        <>
            <div>
                {state}
            </div>
            <div>
                <button onClick={() => justChange()}>그냥바꾸기</button>
                <button onClick={() => setChange()}>set바꾸기</button>
                <button onClick={() =>  chackChange()}>값 확인하기</button>
            </div>
        </>
    )
}