import React, {useState} from "react";
import './Styles/App.css';
import Header from "./Components/Header";
import Animation from "./Components/Animation";
import NavButton from "./Components/UI/Button/NavButton";
// import Products from "./Components/UI/ProductBlock/Products";
import ProductConteiner from "./Components/UI/ProductBlock/ProductConteiner";
import Input1 from "./Components/UI/Input/Input1";
import AddProduct from "./Components/AddProduct";
// import AddNewProduct from "./Components/AddNewProduct";
// import AddProduct from "./Components/AddProduct";

function App() {

    const [posts, setPosts] = useState([
        // {id:1, name: 'название', price: 'Цена', rating: 'рейтинг'},
        // {id:2, name: 'название', price: 'Цена', rating: 'рейтинг'},
    ]);



    const createProduct = (newProduct) => {
        setPosts([...posts, newProduct]);
    }

    return (
        <div>
            <Header/>
            <Animation/>
            <NavButton>
                Каталог пердежей
            </NavButton>
            <ProductConteiner posts={posts}/>
            <AddProduct create={createProduct}/>

        </div>
    );
}


export default App;
