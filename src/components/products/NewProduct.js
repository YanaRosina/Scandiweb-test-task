
import TypeSwitcher from "../typeSwitcher/TypeSwitcher";
import classes from "./NewProduct.module.sass";
import { useForm } from 'react-hook-form';
import { useState } from "react";


function NewProduct(props) {

    const [currentType,setCurrentType] = useState("");
    const { register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode:"onBlur"
    });

    

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
            <input name="sku" type="text" required id="sku" {...register("sku", {required:"The field must be filled in"})} />
            <label className={classes.error}>{errors?.sku && errors.sku?.message}</label>
        </div>
        <div className={classes.param_block}>
            <label htmlFor="title">Name</label>
            <input name="name" type="text" required id="name" {...register("name", {required:"The field must be filled in"})} />
            <label className={classes.error}>{errors?.name && errors.name?.message}</label>
        </div>
        <div className={classes.param_block}>
            <label htmlFor="title">Price</label>
            <input name="price" type="text" required id="price" {...register("price", {
                required: "The field must be filled in",
                pattern: {
                    value:/^\d+(?:\.\d+)?$/,
                    message: "Enter an integer or fractional number"
                }
          
            })} />
            <label className={classes.error}>{errors?.price && errors.price?.message}</label>
        </div>


        <TypeSwitcher 
        register={register}
        types={props.types}
        transferState={upState}
        errors={errors}/>
    </form>
}

export default NewProduct;