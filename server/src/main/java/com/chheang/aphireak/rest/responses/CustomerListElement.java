package com.chheang.aphireak.rest.responses;

public class CustomerListElement {
    private int id;
    private String fullName;
    private String url;
    private String phoneNumber;

    private int numberOfVehicles;


    public CustomerListElement() {

    }

    public CustomerListElement(int id, String fullName, int numberOfVehicles, String phoneNumber) {
        this.id = id;
        this.fullName = fullName;
        this.url = "/customers/" + id;
        this.numberOfVehicles = numberOfVehicles;
        this.phoneNumber = phoneNumber;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
