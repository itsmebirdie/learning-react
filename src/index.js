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
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/61r-WomIz0L._AC_UL200_SR200,200_.jpg',
    title: 'One Arranged Murder',
    author: 'Chetan Bhagat'
  },
];
  
function BookList(){
  return (
    <>
    <section className="booklist">
      {books.map((book)=> {
        const {img, title, author} = book;
        return (
          <Book book={book}></Book>
        )
      })}
    </section>
    </>
  );
}

const Book = (props) =>{
  console.log(props);
  const { img, title, author } = props.book;

  return <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author} </h4>
  </article>
}

ReactDOM.render(<BookList/>, document.getElementById('root'))