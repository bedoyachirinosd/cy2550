package com.example.bookpublisher.controller;

import com.example.bookpublisher.model.Genre;
import com.example.bookpublisher.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/genres")
public class GenreController {

    @Autowired
    private GenreRepository genreRepository;

    // Get all genres
    @GetMapping
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    // Get genre by ID
    @GetMapping("/{id}")
    public Genre getGenreById(@PathVariable Long id) {
        return genreRepository.findById(id).orElse(null);
    }

    // Add a new genre
    @PostMapping
    public Genre addGenre(@RequestBody Genre genre) {
        return genreRepository.save(genre);
    }

    // Update an existing genre
    @PutMapping("/{id}")
    public Genre updateGenre(@PathVariable Long id, @RequestBody Genre genreDetails) {
        Genre genre = genreRepository.findById(id).orElseThrow();
        genre.setName(genreDetails.getName());
        return genreRepository.save(genre);
    }

    // Delete a genre
    @DeleteMapping("/{id}")
    public String deleteGenre(@PathVariable Long id) {
        genreRepository.deleteById(id);
        return "Genre with ID " + id + " has been deleted.";
    }
}
