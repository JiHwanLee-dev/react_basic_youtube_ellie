import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

// memo함수를 써도 search_header부분이 리렌더링 된다. 이유는 props의 onSearch가 새로운 값으로 전달이 되어서 리렌더링이 됨.  
const SearchHeader = memo(({onSearch}) => {
    console.log(`searchHeader`);
    const inputRef = useRef();

    const hadnleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    };
    const onClick = (e) => {
        console.log(`onClick`);
        hadnleSearch();
    };

    const onKeyDown = (e) => {
        console.log(`onKeyDown`);
        // console.log(e);
        if(e.key === 'Enter') {
            hadnleSearch();
        }
    };

    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/yt_logo.ico" alt="" />
                <h1 className={styles.title}> Youtube </h1>
            </div>
            

            <input className={styles.input} ref={inputRef} type="text" placeholder='Search...' onKeyDown={onKeyDown} />
            <button className={styles.button} type='submit' onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="" />
            </button>
        </header>
    );
});

export default SearchHeader;