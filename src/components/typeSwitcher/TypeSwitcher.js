import classes from './TypeSwitcher.module.sass';
import { useState } from 'react';
import { useEffect } from 'react';

function TypeSwitcher (props) {
    const dataTypes = props.types;
    let typeNames = GetTypes();

    const [productType, setProductType] = useState("");

    useEffect(() => {
        props.transferState(productType);
    }, [props, productType]);

    


    function GetTypes () {
        let names = [];
        for(let typeItem of dataTypes) {
            names.push(typeItem.typeName); 
        }
        return names;
    }

    function CreateSwitcher(types) {
        return types.map((type)=>
            <option value={type} key={type}>{type}</option>
    )
    }
      
      

    function CreateTypeBlok() {
        for(let type of dataTypes) {
            
            let paramBlock=[];


            if (type.typeName === productType) {
               let text = <p>{type.text}</p>
                
                
                for(let param of type.params) {
             
                paramBlock.push( <CreateOption 
                   text={param.paramName+' ('+param.measureUnit+')'}
                   name={param.paramName} key={param.paramName} type={type.typeName} />)
                }   
                    
                return <>
                {text}
                {paramBlock}
                </>    


            }
        }
    }

   
    function CreateOption (propsOption) {

    
    return <div className={classes.option_block}>
    <label htmlFor="title">{propsOption.text}</label>
    <input type="text" required id={propsOption.name} {...props.register(propsOption.type+"_"+propsOption.name, {
        required: "The field must be filled in",
        pattern: {
            value: /^\d+(?:\.\d+)?$/,
            message: "Enter an integer or fractional number"
        }
        
    })}
    />
    <label>{
    propsOption.errors?.propsOption.name && propsOption.errors?.propsOption.name?.message
    }</label>
    </div>
    
        
    }

    function SwitchHandler(event) {
        
        setProductType(event.target.value);
        
         }


    return <>
    
        <div className={classes.switcher_block}>
            <label htmlFor="title">Type Switcher</label>
            <select  
                name="option" 
                id="productType" 
                {...props.register("type")}
                defaultValue={"DEFAULT"}
                onChange={SwitchHandler} >
                <option disabled value="DEFAULT">TypeSwitcher</option>
                {CreateSwitcher (typeNames)}
            </select> 
        </div>  
        {CreateTypeBlok()} 
               
              
        
        
        </>

}


export default TypeSwitcher;



// //    let SelectParamBlock = () => {
// //         let optionBlock = <div />
// //         switch(productType) {
// //             case "Book":
// //                 optionBlock=<>
// //                 <p>Please provide dimension in KG </p>
// //                 <div className={classes.option_block}>
// //                     <label htmlFor="title">Weight (KG)</label>
// //                     <input type="text" required id="weight" {...props.register("weight")} />
// //                 </div>
// //                 </> 
// //                 break;
// //             case "DVD":
// //                 optionBlock=<>
// //                     <p>Please provide dimension in MB </p>
// //                     <div className={classes.option_block}>
// //                         <label htmlFor="title">Size (MB)</label>
// //                         <input type="text" required id="size" {...props.register("size")} />
// //                     </div>
// //                 </>
// //                 break;
// //             case "Furniture":
// //                 optionBlock=<>
// //                     <p>Please provide dimensions in HxWxL format</p>
// //                     <div className={classes.option_block}>
// //                         <label htmlFor="title">Height (CM)</label>
// //                         <input type="text" required id="height" {...props.register("height")} /> 
// //                     </div>
// //                     <div className={classes.option_block}>
// //                         <label htmlFor="title">Width (CM)</label>
// //                         <input type="text" required id="width" {...props.register("width")} />
// //                     </div>
// //                     <div className={classes.option_block}>
// //                         <label htmlFor="title">Length (CM)</label>
// //                         <input type="text" required id="lenght" {...props.register("lenght")} />
// //                     </div>
// //                 </>
// //                 break;
// //             default: optionBlock = <div />
// //         }

// //         return optionBlock;
// //     }
  


//     return <>
    
//         <div className={classes.switcher_block}>
//             <label htmlFor="title">Type Switcher</label>
//             <select  name="option" id="productType" {...props.register("type")} defaultValue={"DEFAULT"} onChange={SwitchHandler}>
//                 <option disabled value="DEFAULT">TypeSwitcher</option>
//                 {CreateSwitcher(options)}
//             </select>      
//         </div>  
        
//                 <SelectParamBlock />
              
        
        
//         </>