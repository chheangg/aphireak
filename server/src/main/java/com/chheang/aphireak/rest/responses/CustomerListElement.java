package com.chheang.aphireak.rest.responses;

public class CustomerListElement {
    private int id;
    private String fullName;
    private String url;

    private int numberOfVehicles;


    public CustomerListElement() {

    }

    public CustomerListElement(int id, String fullName, int numberOfVehicles) {
        this.id = id;
        this.fullName = fullName;
        this.url = "/customers/" + id;
        this.numberOfVehicles = numberOfVehicles;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getNumberOfVehicles() {
        return numberOfVehicles;
    }

    public void setNumberOfVehicles(int numberOfVehicles) {
        this.numberOfVehicles = numberOfVehicles;
    }
}
