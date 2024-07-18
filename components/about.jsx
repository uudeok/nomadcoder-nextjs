'use client';

import { useState } from 'react';

const About = () => {
    const [count, setCount] = useState(0);

    const handleIncreasedCount = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecreasedCount = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <div>
            <button onClick={handleIncreasedCount}>좋아요</button>

            <button onClick={handleDecreasedCount}>싫어요</button>
            <span>{count}</span>
        </div>
    );
};

export default About;
