package com.chheang.aphireak.rest.responses;

public class CustomerListElement {
    private int id;
    private String fullName;
    private String url;


    public CustomerListElement() {

    }

    public CustomerListElement(int id, String fullName) {
        this.id = id;
        this.fullName = fullName;
        this.url = "/api/customers/" + id;
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
}
