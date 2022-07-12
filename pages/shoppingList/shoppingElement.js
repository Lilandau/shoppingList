import styles from './shoppingelement.module.css'

export default function ShoppingElement(props) {
    const {name, amount} = props;
    return (
        <>
            <li>
                <div className={styles.shoppingElement}>
                    <div className="input-group mb-3">
                        <button className={"btn btn-outline-secondary"} type="button" id="button-addon1">
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