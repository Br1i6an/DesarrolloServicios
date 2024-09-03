package com.usta.springproject.rest;

import com.usta.springproject.models.BookModel;
import com.usta.springproject.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/book")
public class BookRest {
    
    @Autowired
    private BookService bookService;

    @GetMapping("/list")
    private ResponseEntity<List<BookModel>> list() {
        return ResponseEntity.ok(bookService.list());
    }

    @PostMapping("/create")
    private ResponseEntity<BookModel> create(@RequestBody BookModel bookModel) {
        BookModel temp = bookService.create(bookModel);
        try {
            return ResponseEntity.created(new URI("/api/book" + temp.getBookId())).body(bookModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/list/{id}")
    private ResponseEntity<Optional<BookModel>> getOneById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(bookService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<String> delete(@PathVariable("id") Long id) {
        try {
            bookService.delete(id);
            return ResponseEntity.ok("Successfully deleted!");
        } catch (Exception e) {
            return ResponseEntity.ok("Unsuccessfully deleted!");
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<BookModel> edit(@RequestBody BookModel bookModel) {
        BookModel temp = bookService.create(bookModel);
        try {
            return ResponseEntity.created(new URI("/api/book" + temp.getBookId())).body(bookModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/count")
    private ResponseEntity<String> count() {
        return ResponseEntity.ok("Amount:  " + String.valueOf(bookService.count()) + " books.");
    }

    @GetMapping(value = "/bookbylendid/{id}")
    private ResponseEntity<String> query(@PathVariable("id") Long id) {
        return ResponseEntity.ok("Book by lend id: " + bookService.bookByLendId(id));
    }
}
