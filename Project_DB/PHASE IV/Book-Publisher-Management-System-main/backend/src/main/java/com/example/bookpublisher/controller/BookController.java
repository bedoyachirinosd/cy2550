package com.example.bookpublisher.controller;
import com.example.bookpublisher.model.Book;
import com.example.bookpublisher.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        System.out.println("Adding book with title: " + book.getTitle());
        return bookRepository.save(book);
    }
    

    @GetMapping("/filter")
    public List<Book> filterBooks(@RequestParam String authorName, @RequestParam String genreName) {
        return bookRepository.findByAuthorName(authorName);
    }
}

