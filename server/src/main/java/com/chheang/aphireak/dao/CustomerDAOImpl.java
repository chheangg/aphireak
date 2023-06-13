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

    @Override
    public Customer findCustomerById(int id) {
        System.out.println(id);
        return entityManager.find(Customer.class, id);
    }

    @Override
    public void createCustomer(Customer customer) {
        customer.setId(0);
        entityManager.persist(customer);
    }

    @Override
    public Customer updateCustomer(int id, Customer newCustomer) {
        Customer customer = entityManager.find(Customer.class, id);
        if (customer == null) {
            // TODO: add Custom Exception
            throw new RuntimeException();
        }
        newCustomer.setId(id);
        newCustomer.setVehicles(customer.getVehicles());
        entityManager.merge(newCustomer);
        return newCustomer;
    }

    @Override
    public void deleteCustomerById(int id) {
        Customer customer = entityManager.find(Customer.class, id);
        if (customer == null) {
            // TODO: add Custom Exception
            throw new RuntimeException();
        }
        entityManager.remove(customer);
    }
}
