import {useState} from "react";

import styles from './shoppingElements.module.css'

export default function ShoppingElements() {
    const [input, setInput] = useState("");

    function onInputChange(event) {

        setInput(event.target.value);

    }

    return (
        <>
            <div className={styles.shoppingElement}>
                <div className={styles.trashbin}>
                    <img src={'./icons/trash.png'} alt={'trash'}/>
                </div>
                <div>
                    <label htmlFor="test">Shopping Element</label>
                <input type="text" id="test" onChange={onInputChange}/>
                </div>
            </div>
            <p>your input: {input}</p>
        </>

    )
}