package com.chheang.aphireak.service;

import com.chheang.aphireak.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProducts(String q, int type);
    Product findProductById(int id);
    void createProduct(Product product);
    Product updateProduct(int id, Product product);
    void deleteProductById(int id);
}
