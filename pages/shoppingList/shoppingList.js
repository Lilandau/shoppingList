import styles from "./shoppingList.module.css";
import ShoppingElement from "./shoppingElement";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function ShoppingList() {

    const initialList = [{
        id: uuidv4(),
        name: 'Butter',
        amount: '1'
    },
        {
            id: uuidv4(),
            name: 'Karotten',
            amount: '5'
        }];

    const [shoppingList, setShoppingList] = useState(initialList);
    const [item, setItem] = useState('');


    function handleChange(event) {
        setItem(event.target.value)
    }

    function handleDelete(id) {
        let newList = shoppingList.filter(
            function (el) {
                return el.id !== id;
            }
        );
        setShoppingList(newList);
    }

    function handleAdd() {
        const newList = shoppingList.concat({name: item, id: uuidv4(), amount: '1'});
        setShoppingList(newList);
        setItem('');
        console.log(shoppingList);
    }

    return (<>
            <div id='shoppingList' className={styles.card}>
                <div>
            <span className={styles.span}>
                <h1>Shopping List</h1>
            </span>
                    <span>
                <img className={styles.img} src={'./icons/shopping-cart.png'} alt={'shoppingCard'}/>
            </span>
                </div>
                <ul>
                    {shoppingList.map(
                        (element) => (<ShoppingElement key={element.id}
                                                       name={element.name} amount={element.amount} id={element.id}
                                                       handleDelete={handleDelete}/>)
                    )}
                </ul>

                <div>
                    <input type="text" value={item} onChange={handleChange}
                           onKeyUp={(e) => {
                               if (e.key === 'Enter') {
                                   handleAdd();
                               }
                           }}/>
                    <button type="button" onClick={handleAdd}>
                        Add
                    </button>
                </div>


            </div>
        </>
    );
}