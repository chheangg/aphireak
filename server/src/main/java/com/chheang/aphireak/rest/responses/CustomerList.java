package com.chheang.aphireak.rest.responses;

import java.util.List;

public class CustomerList {
    // TODO: Add pagination
    private List<CustomerListElement> customers;

    public CustomerList() {

    }

    public CustomerList(List<CustomerListElement> customers) {
        this.customers = customers;
    }

    public List<CustomerListElement> getCustomers() {
        return customers;
    }

    public void setCustomers(List<CustomerListElement> customers) {
        this.customers = customers;
    }
}
