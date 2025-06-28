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

    // const [title, setTitle] = useState('');
    // const [title1, setTitle1] = useState('');
    // const [title2, setTitle2] = useState('');

    // const addNewProduct = (e) => {
    //     e.preventDefault();
    //     const newProduct = {
    //         id: Date.now(),
    //         title,
    //         title1,
    //         title2
    //     }
    //     setPosts([...posts, newProduct]);
    //     setTitle('')
    //     setTitle1('')
    //     setTitle2('')
    // };

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
            {/*<div>*/}
            {/*<form>*/}
            {/*    <Input1*/}
            {/*        value={title}*/}
            {/*        onChange={e => setTitle(e.target.value)}*/}
            {/*        type="text"*/}
            {/*        placeholder="Название товара"*/}
            {/*    />*/}
            {/*    <Input1*/}
            {/*        value={title1}*/}
            {/*        onChange={e => setTitle1(e.target.value)}*/}
            {/*        type="number"*/}
            {/*        placeholder="Цена"*/}
            {/*    />*/}
            {/*    <Input1*/}
            {/*        value={title2}*/}
            {/*        onChange={e => setTitle2(e.target.value)}*/}
            {/*        type="text"*/}
            {/*        placeholder="Рейтинг"*/}
            {/*    />*/}
            {/*    <NavButton onClick={addNewProduct}>Отправить</NavButton>*/}
            {/*</form>*/}
            {/*</div>*/}
            {/*<AddProduct/>*/}
        </div>
    );
}


export default App;
