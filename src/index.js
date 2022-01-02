import React from 'react';
import ReactDom from 'react-dom'
import './index.css';
/*
function Greeting(){ // We need have to capitalize first letter
  return <h4> this is my first component </h4>
}

const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'hello world')); // whit this structure is very messy so that's why we use return syntax

}
*/
// this is thanks to JSX, this is extansion to javascript that helps us to put html tags inside java script
const test = () => { // We need have to capitalize first letter
  return (
    <div>
    <div>
    <Person/>
    </div>
    <ul>
     <li>
      <a href='#'> <Message/> </a>
     </li>
    </ul>
    </div>
  )
// use there camelCase, remember to closing tags />
}

const Person = () => (<h2> john doe </h2>)

const Message = () => {
  return <p> This is my message</p>
}

// nested components 

// some practical exercises 

// remember that in react className is just class in css

/*
const firstBook = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDbnh2bfELvkgZNlYP5Zp1Iu7IYG02pME6Q&usqp=CAU',
  title: 'new title',
  author: 'new author'
}

const secondBook = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDbnh2bfELvkgZNlYP5Zp1Iu7IYG02pME6Q&usqp=CAU',
  title: 'new title 2',
  author: 'new author 2'
}



const BookList = () => {
  return (
    <section className='booklist'> 
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
  )
}

const Book = (props) => {
  return ( <article className='book'>
    <img src={props.img} alt=''/>
    <p> {props.title} </p>
    <h1 style={{color: '#617d98', fontSize: '0.75', marginTop: '0.25rem'}}> {props.author} </h1>
  </article>
  )
}
*/

const books = [
    { id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDbnh2bfELvkgZNlYP5Zp1Iu7IYG02pME6Q&usqp=CAU',
      title: 'new title 1',
      author: 'new author 1'
    },
    { id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDbnh2bfELvkgZNlYP5Zp1Iu7IYG02pME6Q&usqp=CAU',
      title: 'new title 2',
      author: 'new author 2'
    },
    { id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDbnh2bfELvkgZNlYP5Zp1Iu7IYG02pME6Q&usqp=CAU',
      title: 'new title 2',
      author: 'new author 2'
    },
    { id: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDbnh2bfELvkgZNlYP5Zp1Iu7IYG02pME6Q&usqp=CAU',
      title: 'new title 2',
      author: 'new author 2'
    },
  
  ]
  
// i need to add special key because react wants

  const newBook = books.map((book) => {
    const {img, title, author} = book
    
    const clickHendler = () => {
      alert('hello world');
    }

    return (
      <div className="book">
        <img src={img} />
        <h3> {title} </h3>
        <h6> {author} </h6>
        <button type="button" onClick={clickHendler}> click </button>
      </div>
    )
  })

// suddenly in react we do onClick bruh momemnto 

const BookList = () => {
  return (
    <section className='booklist'>
      {newBook}
    </section>
  )
}




ReactDom.render(<BookList/>, document.getElementById('root')); // we need to have self closing /> !!! 