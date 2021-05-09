import React from 'react';
import ReactDOM from 'react-dom';

//import css
import './style.css';
//import js
import {books} from './books';
import Book from './Book';
import {greeting} from './testing/testing';

//jSX Rules
// return single element
// use camelCase for <html></html>
// className instead of class
// close every element
// formatting


//setup vars{
  
function BookList(){
  console.log(greeting)
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




ReactDOM.render(<BookList/>, document.getElementById('root'))