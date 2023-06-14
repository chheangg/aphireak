package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Customer;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.rest.responses.CustomerListElement;
import com.chheang.aphireak.rest.responses.IdResponse;
import com.chheang.aphireak.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private CustomerService customerService;

    public CustomerController(CustomerService ent) {
        customerService = ent;
    }

    @GetMapping("/")
    public ResponseEntity<ListResponse<CustomerListElement>>getCustomers() {
        List<Customer> customers = customerService.getCustomers();
        List<CustomerListElement> formattedCustomers =
                        customers
                                .stream()
                                .map(c -> new CustomerListElement(c.getId(), c.getFullName()))
                                .collect(toList());
        return new ResponseEntity<>(new ListResponse(formattedCustomers), HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public Customer findCustomerById(@PathVariable int id) {
        return customerService.findCustomerById(id);
    }

    @PostMapping("/")
    public Customer createCustomer(@RequestBody Customer customer) {
        customerService.createCustomer(customer);
        return customer;
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<IdResponse> deleteCustomerById(@PathVariable int id) {
        customerService.deleteCustomerById(id);
        return new ResponseEntity<>(new IdResponse(id), HttpStatus.ACCEPTED);
    }
}
