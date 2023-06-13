package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Customer;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerDAOImpl implements CustomerDAO {
    private final EntityManager entityManager;

    @Autowired
    public CustomerDAOImpl(EntityManager ent) {
        entityManager = ent;
    }

    @Override
    public List<Customer> getCustomers() {
        TypedQuery<Customer> query = entityManager
                .createQuery("FROM Customer c", Customer.class);
        return query.getResultList();
    }
}
