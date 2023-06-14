package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDAOImpl implements ProductDAO {
    private final EntityManager entityManager;

    @Autowired
    public ProductDAOImpl(EntityManager ent) {
        entityManager = ent;
    }
    public List<Product> getProducts() {
        TypedQuery<Product> products = entityManager.createQuery("FROM Product", Product.class);
        return products.getResultList();
    }

    @Override
    public Product findProductById(int id) {
        Product product = entityManager.find(Product.class, id);
        if (product == null) {
            throw new RuntimeException();
        }

        return product;
    }
    @Override
    public void createProduct(Product product) {
        product.setId(0);
        entityManager.persist(product);
    }

}
