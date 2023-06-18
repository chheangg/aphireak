package com.chheang.aphireak.rest.responses;

import com.chheang.aphireak.entity.*;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;

public class MaintenanceListElement {
    private int id;
    private int totalCostInCent;
    private boolean paid;
    private OffsetDateTime timestamp;
    private String accountName;
    private String customerName;
    private String vehicleName;
    private String url;
    private int numberOfServices;

    public MaintenanceListElement() {

    }

    public MaintenanceListElement
            (int id, int totalCostInCent, boolean paid, OffsetDateTime timestamp, Customer customer, Vehicle vehicle
            , List<MaintenanceDetail> maintenanceDetails, Account account) {
        this.id = id;
        this.totalCostInCent = totalCostInCent;
        this.paid = paid;
        this.timestamp = timestamp;
        this.numberOfServices = maintenanceDetails.size();
        this.customerName = customer.getFullName();
        this.vehicleName = vehicle.getVehicleName();
        this.accountName = account.getUsername();
        this.url = "/maintenances/" + id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTotalCostInCent() {
        return totalCostInCent;
    }

    public void setTotalCostInCent(int totalCostInCent) {
        this.totalCostInCent = totalCostInCent;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public OffsetDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getNumberOfServices() {
        return numberOfServices;
    }

    public void setNumberOfServices(int numberOfServices) {
        this.numberOfServices = numberOfServices;
    }
}
