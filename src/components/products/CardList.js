import CardItem from "./CardItem";
import classes from "./CardList.module.sass"

function CardList(props) {

    function WhichType (product) {
        const type = product.type;
        let option;
        switch (type) {
            case "DVD":
                option = product.options.size;
                break;
            case "Book":
                option = product.options.weight;
                break;
            case "Furniture":
                option = [product.options.height, product.options.width, product.options.len];
                break;
            default: option = "Error!"
        }

        return option;
    }



    return( 
        <ul className={classes.list}>
            {props.products.map((product) => (
                <CardItem
                key={product.scu}
                scu={product.scu}
                name={product.name}
                price={product.price}
                type={product.type}
                options={WhichType(product)}
                />
            ))}

        </ul>
    );

}

export default CardList;