import styles from './shoppingelement.module.css'
import {useState} from "react";

export default function EmptyElement(props) {

    let [item, setItem] = useState('');

    function handleChange(event) {
        setItem(event.target.value)
    }


    return (<>
        <li className={styles.shoppingElement}>
            <div className="input-group mb-3">
                <input type="text" value={item} className={` ${styles.elementFieldDiv} form-control`}
                       onChange={handleChange}
                       onKeyUp={(e) => {
                           if (e.key === 'Enter') {
                               console.log('enter')
                               props.onAdd(item);
                               setItem('');
                           }
                       }}
                />
                <button type="button"
                        className={"btn btn-outline-secondary"} id="button-addon1"
                        onClick={() => {
                            props.onAdd(item);
                            setItem('');
                        }}>
                    <img className={styles.btnImg} src={'./icons/plus.png'} alt={'plus'}></img>
                </button>
            </div>
        </li>
    </>);
}