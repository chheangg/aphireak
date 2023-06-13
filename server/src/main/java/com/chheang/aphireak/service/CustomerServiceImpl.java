package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.CustomerDAO;
import com.chheang.aphireak.entity.Customer;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    private CustomerDAO customerDAO;

    public CustomerServiceImpl(CustomerDAO ent) {
        customerDAO = ent;
    }

    @Override
    public List<Customer> getCustomers() {
        return customerDAO.getCustomers();
    }

    @Override
    public Customer findCustomerById(int id) {
        return customerDAO.findCustomerById(id);
    }

    @Override
    @Transactional
    public void createCustomer(Customer customer) {
        customerDAO.createCustomer(customer);
    }

    @Override
    @Transactional
    public Customer updateCustomer(int id, Customer customer) {
        return customerDAO.updateCustomer(id ,customer);
    }
}
