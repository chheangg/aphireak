package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Customer;
import com.chheang.aphireak.rest.responses.CustomerList;
import com.chheang.aphireak.rest.responses.CustomerListElement;
import com.chheang.aphireak.service.CustomerService;
import jakarta.persistence.TypedQuery;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<CustomerList>getCustomers() {
        List<Customer> customers = customerService.getCustomers();
        List<CustomerListElement> formattedCustomers =
                        customers
                                .stream()
                                .map(c -> new CustomerListElement(c.getId(), c.getFullName()))
                                .collect(toList());
        return new ResponseEntity<>(new CustomerList(formattedCustomers), HttpStatus.OK);

    }
}
