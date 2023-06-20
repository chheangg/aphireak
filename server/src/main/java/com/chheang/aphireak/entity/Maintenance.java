package com.chheang.aphireak.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;

@Entity
@Table(name = "maintenance")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Maintenance.class)
public class Maintenance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "total_cost")
    private int totalCostInCent;

    @Column(name = "paid")
    private boolean paid;

    @Column(name = "timestamp")
    private OffsetDateTime timestamp;

    @ManyToOne
    @JsonProperty("customer")
    private Customer customer;

    @ManyToOne()
    @JoinColumn(name = "account_id")
    @JsonProperty("account")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    @JsonProperty("vehicle")
    private Vehicle vehicle;

    @OneToMany(
            mappedBy = "maintenance",
            cascade = CascadeType.ALL
    )
    @JsonProperty("serviceDetails")
    private List<MaintenanceDetail> maintenanceDetails;

    public Maintenance(int totalCostInCent, boolean paid, OffsetDateTime timestamp) {
        this.totalCostInCent = totalCostInCent;
        this.paid = paid;
        this.timestamp = timestamp;
    }

    public Maintenance() {

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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public List<MaintenanceDetail> getMaintenanceDetails() {
        return maintenanceDetails;
    }

    public void setMaintenanceDetails(List<MaintenanceDetail> maintenanceDetails) {
        this.maintenanceDetails = maintenanceDetails;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    @Override
    public String toString() {
        return "Maintenance{" +
                "id=" + id +
                ", totalCostInCent=" + totalCostInCent +
                ", paid=" + paid +
                ", timestamp=" + timestamp +
                '}';
    }
}
