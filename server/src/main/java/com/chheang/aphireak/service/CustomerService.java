package com.chheang.aphireak.service;
import com.chheang.aphireak.entity.Customer;
import java.util.List;

public interface CustomerService {
    List<Customer> getCustomers();
    Customer findCustomerById(int id);
    void createCustomer(Customer customer);
    Customer updateCustomer(int id, Customer customer);
    void deleteCustomerById(int id);
}
