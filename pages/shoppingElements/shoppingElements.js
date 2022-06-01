import {useState} from "react";

import styles from './shoppingElements.module.css'

export default function ShoppingElements() {
    const [input, setInput] = useState("");

    function onInputChange(event) {

        setInput(event.target.value);

    }

    return (
        <>
            <div className={styles.shoppingElementCard}>
                <div className={styles.shoppingElement}>
                    <div className={styles.input}>
                        <label htmlFor="test"></label>
                        <input type="text" id="test" onChange={onInputChange} 
                        value={'Element'}/>
                    </div>
                    <div className={styles.trashbinIcon}>
                        <img src={'./icons/trash.png'} alt={'trash'}/>
                    </div>
                    
                </div>
            </div>
            <p>your input: {input}</p>
        </>

    )
}