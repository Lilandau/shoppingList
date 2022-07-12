import styles from './shoppingelement.module.css'

export default function EmptyElement() {
    
    function handleOnChange() {
        console.log("onChange");
    }

    return (<>
        <div className={styles.shoppingElement}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Neuer Eintrag"
                       aria-label="Example text with button addon"
                       aria-describedby="button-addon1" onClick={handleOnChange}/>
            </div>
        </div>
    </>);
}