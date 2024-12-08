package com.example.bookpublisher.repository;

import com.example.bookpublisher.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}