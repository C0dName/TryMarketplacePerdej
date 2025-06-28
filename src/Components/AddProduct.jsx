import React, {useState} from 'react';
import Input1 from "./UI/Input/Input1";
import NavButton from "./UI/Button/NavButton";

const AddProduct = ({create}) => {
    const [title, setTitle] = useState('');
    const [title1, setTitle1] = useState('');
    const [title2, setTitle2] = useState('');

    const addNewProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            title,
            title1,
            title2
        }
        create(newProduct);
        setTitle('')
        setTitle1('')
        setTitle2('')
    };
    return (
<form>
                <Input1
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название товара"
                />
                <Input1
                    value={title1}
                    onChange={e => setTitle1(e.target.value)}
                    type="number"
                    placeholder="Цена"
                />
                <Input1
                    value={title2}
                    onChange={e => setTitle2(e.target.value)}
                    type="text"
                    placeholder="Рейтинг"
                />
                <NavButton onClick={addNewProduct}>Отправить</NavButton>
</form>

)
};

export default AddProduct;