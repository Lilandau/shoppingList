import styles from './shoppingelement.module.css'
import {useState} from "react";

export default function ShoppingElement(props) {
    const [element= {name, amount, id}, change] = useState(props);


    
    return (
        <>
            <li className={styles.shoppingElement}>
                <div >
                    <div className="input-group mb-3">
                        <button className={"btn btn-outline-secondary"} type="button" id="button-addon1"
                                onClick={()=>props.handleDelete(element.id)}>
                            <img className={styles.btnImg} src={'./icons/trash.png'} alt={'trashbin'}></img>
                        </button>
                        <input type="text" className="form-control" placeholder={props.name}
                               aria-label="Example text with button addon"
                               aria-describedby="button-addon1"/>
                    </div>
                </div>
            </li>
        </>
    );
}