package com.chheang.aphireak.rest.responses;

import java.util.List;

public class ListResponse<T> {
    // TODO: Add pagination
    private List<T> data;

    public ListResponse() {

    }

    public ListResponse(List<T> data) {
        this.data = data;
    }

    public List<T> getData() {
        return this.data;
    }

    public void setData(List<T> customers) {
        this.data = customers;
    }
}
