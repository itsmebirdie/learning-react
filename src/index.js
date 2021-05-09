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


//setup vars
const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/91m%2Bcb%2BijPL._AC_UL200_SR200,200_.jpg',
  title: "Karma: A Yogi's Guide to Crafting Your Destiny",
  author: 'Sadhguru'

};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg',
  title: "The Psychology of Money",
  author: 'Morgan Housel'

};



function BookList(){
  return (
    <>
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum minus ullam facilis repudiandae molestiae aliquid nemo earum recusandae temporibus incidunt?</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
    </>
  );
}

const Book = (props) =>{
  const { img, title, author, children} = props;
  console.log(props)
  // const {img, title, author} = props
  // console.log(props);
  return <article className="book">
    <img src={img} alt="First Book" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
}
// const Image = () =>{
//   return <img src="https://images-eu.ssl-images-amazon.com/images/I/91m%2Bcb%2BijPL._AC_UL200_SR200,200_.jpg" alt="Book's Image" />
// }
// const Title = () =>{
//   return <h1>Karma: A Yogi's Guide to Crafting Your Destiny</h1>
// }

// const Author = () =>{
//   return <h4 style={{color:'#617d98',}}>Sadhguru</h4>
// }

// Nested components
// const HelloWorld = () => <h1>hello wooorld</h1>
// const Message = () => <p>noice</p>


// const Greeting = () =>{
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'))
// }

ReactDOM.render(<BookList/>, document.getElementById('root'))