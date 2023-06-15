package com.chheang.aphireak.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

@Entity
@Table(name = "maintenance_detail")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = MaintenanceDetail.class)
public class MaintenanceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "id")
    private int id;
    @Column(name = "quantity")
    private int quantity;

    @Column(name = "price")
    private int priceInCent;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(name = "maintenance_id")
    private Maintenance maintenance;

    public MaintenanceDetail() {

    }

    public MaintenanceDetail(int quantity, int priceInCent, Maintenance maintenance) {
        this.quantity = quantity;
        this.priceInCent = priceInCent;
        this.maintenance = maintenance;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPriceInCent() {
        return priceInCent;
    }

    public void setPriceInCent(int priceInCent) {
        this.priceInCent = priceInCent;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Maintenance getMaintenance() {
        return maintenance;
    }

    public void setMaintenance(Maintenance maintenance) {
        this.maintenance = maintenance;
    }

    @Override
    public String toString() {
        return "MaintenanceDetail{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", priceInCent=" + priceInCent +
                ", product=" + product +
                ", maintenance=" + maintenance +
                '}';
    }
}
