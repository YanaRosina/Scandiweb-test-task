import Layout from "../components/layout/Layout";
import Header from "../components/header/header";
import NewProduct from "../components/products/NewProduct";
import { Link } from "react-router-dom";

function AddProduct () {
    const DUMMY_TYPES = [
        {
            typeName: "book",
            text: "Please provide dimension in KG",
            params: [
                {
                    paramName: "weight",
                    measureUnit: "KG",
                    validation: "number"
                },
            ]
        },

        {
            typeName: "dvd",
            text: "Please provide dimension in MB",
            params: [
                {
                    paramName: "size",
                    measureUnit: "MB",
                    validation: "number"
                },
            ]   
        },

        {
            typeName: "furniture",
            text: "Please provide dimensions in HxWxL format",
            params: [
                {
                    paramName: "width",
                    measureUnit: "CM",
                    validation: "number"
                },
                {
                    paramName: "height",
                    measureUnit: "CM",
                    validation: "number"
                },
                {
                    paramName: "length",
                    measureUnit: "CM",
                    validation: "number"
                },

            ]   
        }
    ];

    const saveButton = <button type="submit" form="product_form">Save</button>;
    const cancleButton= <Link to='/'>Cancle</Link>
    return <Layout>
        <Header name={"Add Product"} buttonFirst={saveButton} buttonSecond={cancleButton} />  
        <NewProduct types = {DUMMY_TYPES}  />
        </Layout>
}

export default AddProduct;