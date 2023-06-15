package com.chheang.aphireak.entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "vehicle")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "plate_number")
    private String plateNumber;

    @Column(name = "vehicle_name")
    private String vehicleName;

    @Column(name = "vehicle_type")
    private String vehicleType;

    @Column(name = "next_service")
    private LocalDate nextService;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "service_detail_id")
    @JsonProperty("serviceDetail")
    private ServiceDetail serviceDetail;

    @ManyToOne(
            cascade = {
            CascadeType.DETACH,
            CascadeType.REFRESH
            }
    )
    @JoinColumn(name = "customer_id")
    @JsonProperty("customer")
    private Customer customer;

    @OneToMany(
            mappedBy = "vehicle",
            cascade = CascadeType.ALL
    )
    private List<Maintenance> maintenances;

    public Vehicle() {

    }

    public Vehicle(String plateNumber, String vehicleName, String vehicleType, LocalDate nextService) {
        this.plateNumber = plateNumber;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.nextService = nextService;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public LocalDate getNextService() {
        return nextService;
    }

    public void setNextService(LocalDate nextService) {
        this.nextService = nextService;
    }

    public ServiceDetail getServiceDetail() {
        return serviceDetail;
    }

    public void setServiceDetail(ServiceDetail serviceDetail) {
        this.serviceDetail = serviceDetail;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Maintenance> getMaintenances() {
        return maintenances;
    }

    public void setMaintenances(List<Maintenance> maintenances) {
        this.maintenances = maintenances;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "id=" + id +
                ", plateNumber='" + plateNumber + '\'' +
                ", vehicleName='" + vehicleName + '\'' +
                ", vehicleType='" + vehicleType + '\'' +
                ", nextService=" + nextService +
                ", serviceDetail=" + serviceDetail +
                ", customer=" + customer +
                '}';
    }
}
