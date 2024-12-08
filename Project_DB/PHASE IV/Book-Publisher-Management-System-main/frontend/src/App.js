import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AddAuthor from './components/AddAuthor';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import PublisherList from './components/PublisherList';
import AddPublisher from './components/AddPublisher';
import GenreList from './components/GenreList';

const App = () => {
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f4f4',
            margin: 0,
            padding: 0,
        },
        navbar: {
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#333',
            padding: '10px',
        },
        navLink: {
            color: '#fff',
            textDecoration: 'none',
            fontSize: '16px',
            padding: '8px 12px',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
        },
        content: {
            padding: '20px',
        },
        landingPage: {
            textAlign: 'center',
            color: '#333',
        },
        heroSection: {
            backgroundImage: 'url(https://images.unsplash.com/photo-1575385151519-05e02c4f734f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        },
        heroHeading: {
            fontSize: '3rem',
            marginBottom: '20px',
        },
        heroParagraph: {
            fontSize: '1.5rem',
            marginBottom: '30px',
        },
        getStartedButton: {
            padding: '15px 30px',
            fontSize: '1.2rem',
            color: 'white',
            backgroundColor: '#007bff', 
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        bookCollectionHeading: {
            fontSize: '2.5rem',
            marginBottom: '30px',
        },
        bookCardContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        bookCard: {
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            margin: '15px',
            width: '200px',
            textAlign: 'left',
        },
    };


    const featuredBooks = [
        {
          title: "The Great Gatsby",
          description: "A novel by F. Scott Fitzgerald.",
          imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471173936/the-great-gatsby-9781471173936_hr.jpg", // Replace with actual image URL
        },
        {
          title: "1984",
          description: "A dystopian novel by George Orwell.",
          imageUrl: "https://i.redd.it/ps0nqzsbzz371.jpg", 
        },
        {
          title: "To Kill a Mockingbird",
          description: "A novel by Harper Lee.",
          imageUrl: "https://cdn2.penguin.com.au/covers/original/9781473517714.jpg", 
        },
        {
          title: "Pride and Prejudice",
          description: "A novel of manners by Jane Austen.",
          imageUrl: "https://www.themoviedb.org/t/p/original/vAxWpk857xbpaeoSvkRsfMbokPl.jpg", 
        },
        {
          title: "The Lord of the Rings",
          description: "An epic high fantasy trilogy by J. R. R. Tolkien.",
          imageUrl: "https://images.thenile.io/r1000/9780007488353.jpg", 
        },
        {
          title: "One Hundred Years of Solitude",
          description: "A novel by Gabriel García Márquez.",
          imageUrl: "https://th.bing.com/th/id/R.8697cc74db5911afdc6e83680530401b?rik=1vDwtG3ci2QYLg&riu=http%3a%2f%2fdwcp78yw3i6ob.cloudfront.net%2fwp-content%2fuploads%2f2016%2f12%2f12162813%2f100_Years_First_Ed_Hi_Res-768x1153.jpg&ehk=%2b6OxuEL8iXKiqX9LZgGO6Tac3AslNULuU8MjLqgFkYU%3d&risl=&pid=ImgRaw&r=0", // Replace with actual image URL
        },
      ];
    return (
        <Router>
            <div style={styles.body}>
                {}
                <nav style={styles.navbar}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                    <Link to="/authors" style={styles.navLink}>Authors</Link>
                    <Link to="/add-author" style={styles.navLink}>Add Author</Link>
                    <Link to="/books" style={styles.navLink}>Books</Link>
                    <Link to="/add-book" style={styles.navLink}>Add Book</Link>
                    <Link to="/publishers" style={styles.navLink}>Publishers</Link>
                    <Link to="/add-publisher" style={styles.navLink}>Add Publisher</Link>
                    <Link to="/genres" style={styles.navLink}>Genres</Link>
                </nav>

                {}
                <div style={styles.content}>
                    <Routes>
                        <Route path="/" element={
                            <div style={styles.landingPage}>
                                <div style={styles.heroSection}>
                                    <h1 style={styles.heroHeading}>Welcome to Syra Book Publisher</h1>
                                    <p style={styles.heroParagraph}>Explore our collection of books, authors, and publishers.</p>
                                </div>
                                <div style={{ paddingTop: "50px" }}>
                                    <h2 style={styles.bookCollectionHeading}>Featured Books</h2>
                                    <div style={styles.bookCardContainer}>
                                        {featuredBooks.map((book, index) => (
                                            <div key={index} style={styles.bookCard}>
                                                <img src={book.imageUrl} alt={book.title} style={{ borderTopLeftRadius:'10px', borderTopRightRadius:'10px', width:'100%' }} />
                                                <h3>{book.title}</h3>
                                                <p>{book.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        } />
                        <Route path="/authors" element={<AuthorList />} />
                        <Route path="/add-author" element={<AddAuthor />} />
                        <Route path="/books" element={<BookList />} />
                        <Route path="/add-book" element={<AddBook />} />
                        <Route path="/publishers" element={<PublisherList />} />
                        <Route path="/add-publisher" element={<AddPublisher />} />
                        <Route path="/genres" element={<GenreList />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;