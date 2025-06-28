import React, {useState} from "react";
import './Styles/App.css';
import Header from "./Components/Header";
import Animation from "./Components/Animation";
import NavButton from "./Components/UI/Button/NavButton";
import ProductConteiner from "./Components/UI/ProductBlock/ProductConteiner";
import AddProduct from "./Components/AddProduct";
// import Navigation from "./Components/UI/NavMenu/Navigation";
// import productConteiner from "./Components/UI/ProductBlock/ProductConteiner";
// import products from "./Components/UI/ProductBlock/Products";

function App() {

    const [posts, setPosts] = useState([
        {id:1, name: 'название', price: 'Цена', rating: 'рейтинг'},
        {id:2, name: 'название', price: 'Цена', rating: 'рейтинг'},
    ]);

    const removeProduct = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const createProduct = (newProduct) => {
        setPosts([...posts, newProduct]);
    }

    return (
        <div>
            <Header/>
            <Animation/>
            {/*<Navigation/>*/}
            <NavButton>
                Каталог пердежей
            </NavButton>
            <ProductConteiner remove={removeProduct} posts={posts}/>
            <AddProduct create={createProduct}/>

        </div>
    );
}


export default App;
