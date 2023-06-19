package com.chheang.aphireak.rest.responses;

public class TypeListElement {
    private int id;
    private String name;
    private int numberOfProducts;

    public TypeListElement() {

    }

    public TypeListElement(int id, String name, int numberOfProducts) {
        this.id = id;
        this.name = name;
        this.numberOfProducts = numberOfProducts;
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

    public int getNumberOfProducts() {
        return numberOfProducts;
    }

    public void setNumberOfProducts(int numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
    }
}
