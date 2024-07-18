'use client';

import { useState } from 'react';
import styles from '../../styles/apple.module.css';

const Apple = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className={styles.apple}>
            <div>apple plage</div>
            <div>사과는 맛있어 </div>

            <button onClick={handleCount}>click</button>
            <span>{count}</span>
        </div>
    );
};

export default Apple;
