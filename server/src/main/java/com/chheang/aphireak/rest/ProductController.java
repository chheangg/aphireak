package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Product;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.service.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService ent) {
        productService = ent;
    }

    @GetMapping("/")
    public ResponseEntity<ListResponse<Product>> getProducts() {
        List<Product> products = productService.getProducts();
        return new ResponseEntity<>(
                new ListResponse<>(products),
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public Product findProductById(@PathVariable int id) {
        return productService.findProductById(id);
    }
}
