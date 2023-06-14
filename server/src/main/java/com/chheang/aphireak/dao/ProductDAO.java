package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Product;

import java.util.List;

public interface ProductDAO {
    List<Product> getProducts();
    Product findProductById(int id);
}
