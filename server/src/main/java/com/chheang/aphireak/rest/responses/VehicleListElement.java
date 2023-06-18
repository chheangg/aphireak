package com.chheang.aphireak.rest.responses;

import java.time.LocalDate;

public class VehicleListElement {
    private int id;
    private String vehicleName;
    private String vehicleType;
    private String plateNumber;
    private String url;
    private LocalDate nextService;
    private String vehicleOwner;

    private String ownerUrl;

    public VehicleListElement() {

    }

    public VehicleListElement(int id, String vehicleName, String vehicleType, String plateNumber, LocalDate nextService,
                              String vehicleOwner, int ownerId) {
        this.id = id;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.plateNumber = plateNumber;
        this.nextService = nextService;
        this.vehicleOwner = vehicleOwner;
        this.url = "/vehicles/" + id;
        this.url = "/customers/" + ownerId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public LocalDate getNextService() {
        return nextService;
    }

    public void setNextService(LocalDate nextService) {
        this.nextService = nextService;
    }

    public String getVehicleOwner() {
        return vehicleOwner;
    }

    public void setVehicleOwner(String vehicleOwner) {
        this.vehicleOwner = vehicleOwner;
    }
}
