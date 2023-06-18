package com.chheang.aphireak.rest.responses;

public class ProductListElement {
    private int id;
    private String name;
    private String typeName;
    private int priceInCent;

    public ProductListElement() {

    }

    public ProductListElement(int id, String name, String typeName, int priceInCent) {
        this.id = id;
        this.name = name;
        this.typeName = typeName;
        this.priceInCent = priceInCent;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public int getPriceInCent() {
        return priceInCent;
    }

    public void setPriceInCent(int priceInCent) {
        this.priceInCent = priceInCent;
    }
}
