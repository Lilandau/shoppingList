import styles from "./shoppingList.module.css";
import ShoppingElement from "./shoppingElement";
import EmptyElement from "./emptyElement";

export default function ShoppingList() {

    const elements = [{
        id: 1,
        name: 'Butter',
        amount: '1'
        },
        {
            id: 2,
            name: 'Karotten',
            amount: '5'
        }];
    

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
                    {elements.map(
                        (element) => (<ShoppingElement key={element.id}
                                                       name={element.name} amount={element.amount}/>)
                    )}
                </ul>
                <ShoppingElement/>
                <EmptyElement/>
            </div>
        </>
    );
}