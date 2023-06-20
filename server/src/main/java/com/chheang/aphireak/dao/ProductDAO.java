package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Product;

import java.util.List;

public interface ProductDAO {
    List<Product> getProducts(String q);
    Product findProductById(int id);
    void createProduct(Product product);
    Product updateProduct(int id, Product product);
    void deleteProductById(int id);
}
