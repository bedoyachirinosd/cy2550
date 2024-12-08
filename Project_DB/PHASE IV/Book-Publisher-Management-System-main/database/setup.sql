-- Create the Author table
CREATE TABLE Author (
    AuthorID BIGINT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Bio TEXT
);

-- Create the Publisher table
CREATE TABLE Publisher (
    PublisherID BIGINT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255)
);

-- Create the Genre table
CREATE TABLE Genre (
    GenreID BIGINT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

-- Create the Book table
CREATE TABLE Book (
    BookID BIGINT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    AuthorID BIGINT NOT NULL,
    PublisherID BIGINT NOT NULL,
    GenreID BIGINT NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Author(AuthorID),
    FOREIGN KEY (PublisherID) REFERENCES Publisher(PublisherID),
    FOREIGN KEY (GenreID) REFERENCES Genre(GenreID)
);
