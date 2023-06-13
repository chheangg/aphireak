package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.CustomerDAO;
import com.chheang.aphireak.entity.Customer;
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
}
