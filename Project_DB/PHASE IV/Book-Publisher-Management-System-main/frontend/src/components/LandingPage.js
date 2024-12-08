import React from 'react';

const LandingPage = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      margin: 0,
      padding: 0,
    },
    landingPage: {
      textAlign: 'center',
      color: '#333',
    },
    heroSection: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1575385151519-05e02c4f734f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with an actual image URL
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
      backgroundColor: '#007bff', // Bootstrap primary color
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    getStartedButtonHover: {
      backgroundColor: '#0056b3', // Darker shade
    },
    bookCollection: {
      padding: '50px 20px',
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
      width: '200px', // Fixed width for cards
      textAlign: 'left',
    },
    bookImage: {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      width: '100%',
    },
    bookTitle: {
      fontSize: '1.2rem',
      marginLeft: '10px',
    },
    bookDescription: {
      marginLeft: '10px',
      marginBottom: '10px',
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
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781473517714.jpg", // Replace with actual image URL
    },
    {
      title: "Pride and Prejudice",
      description: "A novel of manners by Jane Austen.",
      imageUrl: "https://www.themoviedb.org/t/p/original/vAxWpk857xbpaeoSvkRsfMbokPl.jpg", // Replace with actual image URL
    },
    {
      title: "The Lord of the Rings",
      description: "An epic high fantasy trilogy by J. R. R. Tolkien.",
      imageUrl: "https://images.thenile.io/r1000/9780007488353.jpg", // Replace with actual image URL
    },
    {
      title: "One Hundred Years of Solitude",
      description: "A novel by Gabriel García Márquez.",
      imageUrl: "https://th.bing.com/th/id/R.8697cc74db5911afdc6e83680530401b?rik=1vDwtG3ci2QYLg&riu=http%3a%2f%2fdwcp78yw3i6ob.cloudfront.net%2fwp-content%2fuploads%2f2016%2f12%2f12162813%2f100_Years_First_Ed_Hi_Res-768x1153.jpg&ehk=%2b6OxuEL8iXKiqX9LZgGO6Tac3AslNULuU8MjLqgFkYU%3d&risl=&pid=ImgRaw&r=0", // Replace with actual image URL
    },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.landingPage}>
        <div style={styles.heroSection}>
          <h1 style={styles.heroHeading}>Welcome to Syra Publications</h1>
          <p style={styles.heroParagraph}>Explore our collection of books, authors, and publishers.</p>
          <button 
            style={styles.getStartedButton}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.getStartedButtonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.getStartedButton.backgroundColor}
          >
            Get Started
          </button>
        </div>
        <div style={styles.bookCollection}>
          <h2 style={styles.bookCollectionHeading}>Featured Books</h2>
          <div style={styles.bookCardContainer}>
            {featuredBooks.map((book, index) => (
              <div key={index} style={styles.bookCard}>
                <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
                <h3 style={styles.bookTitle}>{book.title}</h3>
                <p style={styles.bookDescription}>{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;