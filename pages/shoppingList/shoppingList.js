import styles from "./shoppingList.module.css";
import ShoppingElement from "./shoppingElement";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import EmptyElement from "./emptyElement";

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

    function handleAdd(newItem) {
        let element = {name: newItem, id: uuidv4(), amount: '1'};
        const newList = shoppingList.concat(element);
        setShoppingList(newList);
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
                    <EmptyElement item={item} onAdd={handleAdd}/>
                </ul>
            </div>
        </>
    );
}