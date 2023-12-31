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
    public List<Product> getProducts(String q, int type) {
        String queryStrWithGetAll =
                "FROM Product p WHERE UPPER(p.name) LIKE CONCAT('%', UPPER(:query), '%')";

        String queryStrWithType = "FROM Product p WHERE p.type.id = :type_id";

        TypedQuery<Product> products = entityManager.createQuery(
                type == 0 ? queryStrWithGetAll : queryStrWithType
                , Product.class);

        if (type == 0) {
            products.setParameter("query", q);
        } else {
            products.setParameter("type_id", type);
        }
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

    @Override
    public Product updateProduct(int id, Product product) {
        Product tempProduct = entityManager.find(Product.class, id);
        if (tempProduct == null) {
            throw new RuntimeException();
        }

        product.setId(id);
        return entityManager.merge(product);
    }

    @Override
    public void deleteProductById(int id) {
       Product product = entityManager.find(Product.class, id);
        if (product == null) {
            throw new RuntimeException();
        }

        entityManager.remove(product);
    }
}
