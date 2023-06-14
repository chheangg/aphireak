package com.chheang.aphireak.service;

import com.chheang.aphireak.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProducts();
    Product findProductById(int id);
    void createProduct(Product product);
}
