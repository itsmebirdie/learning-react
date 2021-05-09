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
    id:1,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91m%2Bcb%2BijPL._AC_UL200_SR200,200_.jpg',
    title: "Karma: A Yogi's Guide to Crafting Your Destiny",
    author: 'Sadhguru'
    
  },
  {
    id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg',
    title: "The Psychology of Money",
    author: 'Morgan Housel'
    
  },
  {
    id:3,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/61r-WomIz0L._AC_UL200_SR200,200_.jpg',
    title: 'One Arranged Murder',
    author: 'Chetan Bhagat'
  },
];
  
function BookList(){
  return (
    <>
    <section className="booklist">
      {books.map((book, index)=> {
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
    </>
  );
}

const Book = ({ img, title, author}) =>{
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert(title)
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className="book" onMouseOver={() => {
      alert(title)
    }} >
    <img src={img} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author} </h4>
    <button type="button" onClick={clickHandler}>reference example</button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button>
  </article>
  )
}


ReactDOM.render(<BookList/>, document.getElementById('root'))