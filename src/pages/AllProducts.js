import Layout from "../components/layout/Layout";
import Header from "../components/header/header";
import { Link } from "react-router-dom";
import CardList from "../components/products/CardList";

const DUMMY_DATA = [
   {
     scu: 'a1gfhjhg',
     name: 'This is a first product',
     price: 1234,
     type:'Furniture',
     options: 
        {
            height: '1',
            width: '2',
            len: '3',
        },
      
   },
   {
     scu: 'd2fgh24fgjhg',
     name: 'This is a second product',
     price: 3452,
     type:'Book',
     options: {
        weight: 2,
     }, 
   },
   {
    scu: 'tfghhh986jy2',
    name: 'This is a third product',
    price: 3452,
    type:'DVD',
    options: {
       size: 900,
    }, 
  },
  {
    scu: 'a1gfh3432jhg',
    name: 'This is a fourth product',
    price: 1234,
    type:'Furniture',
    options: 
       {
           height: '23',
           width: '24',
           len: '34',
       },
     
  },
  {
    scu: 'd2534fghfgjhg',
    name: 'This is a fifth product',
    price: 3452,
    type:'Book',
    options: {
       weight: 5,
    }, 
  },
  {
   scu: 'tfghh573hjy2',
   name: 'This is a sixth product',
   price: 3452,
   type:'DVD',
   options: {
      size: 300,
   }, 
 },
 {
    scu: 'a1gfll6hjhg',
    name: 'This is a seventh product',
    price: 1234,
    type:'Furniture',
    options: 
       {
           height: '14',
           width: '256',
           len: '37',
       },
     
  },
  {
    scu: 'd2ftrw3ghfgjhg',
    name: 'This is a eighth product',
    price: 3452,
    type:'Book',
    options: {
       weight: 443,
    }, 
  },
  {
   scu: 'tfghheehjy2',
   name: 'This is a nineth product',
   price: 3452,
   type:'DVD',
   options: {
      size: 4500,
   }, 
 },
 ];

function AllProducts() {
    const addButton = <Link to='/add-product' className="buttonLink">Add</Link>
    const delButton = <button>Mass Delete</button>


    return <Layout>
        <Header name={"All Products"} buttonFirst={addButton} buttonSecond={delButton} />  
        
        <CardList products ={DUMMY_DATA} />
        </Layout>
}

export default AllProducts;