// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name: "Adobe Photoshop", price: "US$20.99"},
    {name: "Adobe Premiere Pro", price: "US$30.99"},
    {name: "Adobe Illustrator", price: "US$25.99"},
    {name: "Adobe Acrobat Pro", price: "US$10.99"},
    {name: "Adobe XD", price: "US$5.99"},
    {name: "Adobe Lightroom", price: "US$3.99"},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {
          products.map(product => <Product productInfo={product}></Product>)
        }
        <Person name="Badhan Chandra Barman" age="24"></Person>
        <Person name="Chalantica Barman" age="19"></Person>
        <Person name="Aakash" age="24"></Person>
        <Person name="Puja" age="19"></Person>
      </header>
    </div>
  );
}
//http://jsonplaceholder.typicode.com/users
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Product(props){
  const productStyle = {
    backgroundColor: "lightgrey",
    color: "black",
    width: "400px",
    height: "400px",
    margin: "10px",
  }
  const {name, price} = props.productInfo;
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h3>{price}</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aspernatur atque perspiciatis</p>
      <button type="submit">Buy Now</button>
    </div>
  );
}

function Person(props) {
  const style = {
    border: "2px solid yellow",
    margin: "30px",
    width: "900px"
  }

  return (
    <div style={style}>
      <h1>Name: {props.name}</h1>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

export default App;
