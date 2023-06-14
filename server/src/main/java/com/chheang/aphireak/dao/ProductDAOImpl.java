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
}
