import {useState} from "react";

import styles from './shoppingElements.module.css'

export default function ShoppingElements() {
    const [input, setInput] = useState("");

    function onInputChange(event) {

        setInput(event.target.value);

    }

    return (<>
            <div className={styles.shoppingElement}>
                <label htmlFor="test">Shopping Element</label>
                <input type="text" id="test" onChange={onInputChange}/>
            </div>
            <p>your input: {input}</p>
        </>
    )
}