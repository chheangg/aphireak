package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Customer;

import java.util.List;

public interface CustomerDAO {
    List<Customer> getCustomers();
    Customer findCustomerById(int id);

    void createCustomer(Customer customer);
}
