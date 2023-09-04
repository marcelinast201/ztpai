import React, {useState} from "react";
import Pricing from "./Pricing";
const AddItem= ({updateData}:any) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [term, setTerm] = useState('');


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    };
    const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const handleSendButton = () => {

        const url = `http://localhost:8080/api/pricing/createPricing`;

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                passName: name,
                price: parseFloat(price),
                term: parseInt(term)

            })

        })
            .then(res=>res.json())
            .then(data=>{
                updateData((prevData:any)=> [...prevData,data]);

            })
            .catch(err => console.log(err))
    };
    return(

<tr >
    <td><input name="passName" type="text" value={name} onChange={handleNameChange}/></td>
    <td><input name="price" type="text" value={price} onChange={handlePriceChange}/> zł</td>
    <td><input name="term" type="text" value={term} onChange={handleTermChange}/> </td>
    <td> <button type="submit" name="send" onClick={handleSendButton}>
        SEND
    </button></td>
</tr>

)}
export default AddItem;
