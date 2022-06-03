import styles from "./shoppingList.module.css";
import ShoppingElement from "./shoppingElement";

export default function ShoppingList() {

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
            <ShoppingElement/>
            </div>
        </>
    );
}