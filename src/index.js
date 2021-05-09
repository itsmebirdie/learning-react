import React from 'react';
import ReactDOM from 'react-dom';

//import css
import './style.css';

//jSX Rules
// return single element
// use camelCase for <html></html>
// className instead of class
// close every element
// formatting


//setup vars{
const books = [
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91m%2Bcb%2BijPL._AC_UL200_SR200,200_.jpg',
    title: "Karma: A Yogi's Guide to Crafting Your Destiny",
    author: 'Sadhguru'
    
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg',
    title: "The Psychology of Money",
    author: 'Morgan Housel'
    
  },
];
const names = ['John', 'Peter', 'Susan'];
const newNames = names.map((name)=> {
  return <h1>{name} </h1>;
});
console.log(newNames)
  
function BookList(){
  return (
    <>
    <section className="booklist">
      {newNames}
    </section>
    </>
  );
}

const Book = (props) =>{
  const { } = props;
  console.log(props)
  return <article className="book">
  </article>
}

ReactDOM.render(<BookList/>, document.getElementById('root'))