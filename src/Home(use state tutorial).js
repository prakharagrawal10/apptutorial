import {useState} from 'react'
const Home = () => {
    //let name='Mario';
    const [name,setName]=useState('mario');
     //trigger react to re render component...normally component value is not changed even though it is in console.log
    const handleclick =() =>{
        setName('Luigi');
    }

    return (
        <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleclick}>Click me</button>
        </div>
    );
}
 
export default Home;