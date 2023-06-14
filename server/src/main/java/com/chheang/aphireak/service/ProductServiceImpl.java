package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.ProductDAO;
import com.chheang.aphireak.dao.TypeDAO;
import com.chheang.aphireak.entity.Product;
import com.chheang.aphireak.entity.Type;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductDAO productDAO;
    private final TypeDAO typeDAO;

    public ProductServiceImpl(ProductDAO daoX, TypeDAO daoY) {
        productDAO = daoX;
        typeDAO = daoY;
    }

    @Override
    public List<Product> getProducts() {
        return productDAO.getProducts();
    }

    @Override
    public Product findProductById(int id) {
        return productDAO.findProductById(id);
    }

    @Override
    @Transactional
    public void createProduct(Product product) {
        // find if Type exists
        Type type = typeDAO.findTypeById(product.getType().getId());
        product.setType(type);

        productDAO.createProduct(product);
    }

    @Override
    @Transactional
    public Product updateProduct(int id, Product product) {
        // Make sure product's cucrrent/new type exists
        int typeId = product.getType().getId();
        Type type = typeDAO.findTypeById(typeId);

        if (type == null) {
            throw new RuntimeException();
        }

        product.setType(type);

        return productDAO.updateProduct(id, product);
    }

    @Override
    @Transactional
    public void deleteProductById(int id) {
        productDAO.deleteProductById(id);
    }
}
