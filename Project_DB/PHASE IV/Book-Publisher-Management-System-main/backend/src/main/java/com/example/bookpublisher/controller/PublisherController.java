package com.example.bookpublisher.controller;

import com.example.bookpublisher.model.Publisher;
import com.example.bookpublisher.repository.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/publishers")
public class PublisherController {

    @Autowired
    private PublisherRepository publisherRepository;

    // Get all publishers
    @GetMapping
    public List<Publisher> getAllPublishers() {
        return publisherRepository.findAll();
    }

    // Get publisher by ID
    @GetMapping("/{id}")
    public Publisher getPublisherById(@PathVariable Long id) {
        return publisherRepository.findById(id).orElse(null);
    }

    // Add a new publisher
    @PostMapping
    public Publisher addPublisher(@RequestBody Publisher publisher) {
        return publisherRepository.save(publisher);
    }

    // Update an existing publisher
    @PutMapping("/{id}")
    public Publisher updatePublisher(@PathVariable Long id, @RequestBody Publisher publisherDetails) {
        Publisher publisher = publisherRepository.findById(id).orElseThrow();
        publisher.setName(publisherDetails.getName());
        publisher.setAddress(publisherDetails.getAddress());
        return publisherRepository.save(publisher);
    }

    // Delete a publisher
    @DeleteMapping("/{id}")
    public String deletePublisher(@PathVariable Long id) {
        publisherRepository.deleteById(id);
        return "Publisher with ID " + id + " has been deleted.";
    }
}