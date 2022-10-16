import React, { Component, useCallback, useState } from 'react';
import { useRef } from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    // useCallback 자동으로 리액트가 캐시 -> 반복해서 호출되어도 동일한 콜백함수 호출
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;