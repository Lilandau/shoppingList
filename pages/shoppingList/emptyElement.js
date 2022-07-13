import styles from './shoppingelement.module.css'
import {useState} from "react";

export default function EmptyElement(props) {

    let [item, setItem] = useState('');

    function handleChange(event) {
        setItem(event.target.value)
    }


    return (<>
        <div>
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
                <button type="button" onClick={() => props.onAdd(item)}>
                    Add
                </button>
            </div>
        </div>
    </>);
}