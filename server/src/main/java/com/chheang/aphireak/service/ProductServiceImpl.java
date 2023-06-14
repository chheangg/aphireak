package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.ProductDAO;
import com.chheang.aphireak.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductDAO productDAO;

    public ProductServiceImpl(ProductDAO ent) {
        productDAO = ent;
    }

    @Override
    public List<Product> getProducts() {
        return productDAO.getProducts();
    }
}
