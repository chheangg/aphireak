package com.chheang.aphireak.rest.responses;

public class VehicleListElement {
    private int id;
    private String vehicleName;
    private String vehicleType;
    private String plateNumber;
    private String url;

    public VehicleListElement() {

    }

    public VehicleListElement(int id, String vehicleName, String vehicleType, String plateNumber) {
        this.id = id;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.plateNumber = plateNumber;
        this.url = "/api/vehicles/" + id;
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
}
