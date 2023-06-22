
import TypeSwitcher from "../typeSwitcher/TypeSwitcher";
import classes from "./NewProduct.module.sass";
import { useForm } from 'react-hook-form';
import { useState } from "react";


function NewProduct(props) {

    const [currentType,setCurrentType] = useState("");
    const { register, handleSubmit } = useForm();

    let upState = (state) => {
        setCurrentType(state);
    }


    function SubmitHandler(data) {
        let patern = new RegExp("^" + currentType + "_.+");
        let submitDate = {};
         let options= {};
         for(let key in data) {
            if(key.match(patern)) {
                options[key] = data[key];
            } else if (key === 'sku' || key==='name' || key==='price' || key==='type'){
                submitDate[key]=data[key];
            }
            
         }

        Object.assign(submitDate,options);

        console.log(options);
        console.log(submitDate);
        console.log(data);
        

    }
      

   return <form id="product_form" onSubmit={handleSubmit(SubmitHandler)} >
        <div className={classes.param_block}>
            <label htmlFor="title">SKU</label>
            <input name="sku" type="text" required id="sku" {...register("sku")} />
        </div>
        <div className={classes.param_block}>
            <label htmlFor="title">Name</label>
            <input name="name" type="text" required id="name" {...register("name")} />
        </div>
        <div className={classes.param_block}>
            <label htmlFor="title">Price</label>
            <input name="price" type="text" required id="price" {...register("price")} />
        </div>


        <TypeSwitcher 
        register={register}
        types={props.types}
        transferState={upState} />
    </form>
}

export default NewProduct;