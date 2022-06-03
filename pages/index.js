import styles from './index.module.css';

export default function Home() {
    return (<>
        <div id='shoppingList' className={styles.card}>
            <span className={styles.span}>
                <h1>Shopping List</h1>
            </span>
            <span>
                <img className={styles.img} src={'./icons/shopping-cart.png'} alt={'shoppingCard'}/>
            </span>
        
        </div>
        </>
    )
}
