package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Product;
import com.chheang.aphireak.rest.responses.IdResponse;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.service.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/")
    public Product createProduct(@RequestBody Product product) {
        productService.createProduct(product);
        return product;
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<IdResponse> deleteProductById(@PathVariable int id) {
        productService.deleteProductById(id);
        return new ResponseEntity<>(
                new IdResponse(id), HttpStatus.ACCEPTED
        );
    }
}