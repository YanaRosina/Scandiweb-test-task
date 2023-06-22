import classes from './CardItem.module.sass'

function CardItem(props) {

    function GetOptions (props) {
        let optionText;
        if (props.type === "DVD") {
            optionText = <p>Size: {props.options} MB</p>       
        }
        else if (props.type === "Book") {
            optionText = <p>Weigh: {props.options} KG</p>
        }
        else {
            optionText = <p>Dimension: {props.options[0]}x{props.options[1]}x{props.options[2]}</p>
        }

         return optionText;
     
    }
    return <li className={classes.item}>
        <div className={classes.item_wrap}>
            <div className={classes.checkbox}>
                <input type='checkbox' className='delete-checkbox' value="delete" />
            </div>
            <div className={classes.content}>
                <p>{props.scu}</p>
                <p>{props.name}</p>
                <p>{props.price}$</p>
                {GetOptions(props)}
            </div>
        </div>
    </li>
}

export default CardItem;