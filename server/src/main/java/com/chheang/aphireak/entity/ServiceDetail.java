package com.chheang.aphireak.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

@Entity
@Table(name = "service_detail")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class ServiceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "oil_type")
    private String oilType;

    @Column(name = "change_oil_filter")
    private boolean changeOilFilter;

    @Column(name = "change_coolant")
    private boolean changeCoolant;

    @Column(name = "change_brake_fluid")
    private boolean changeBrakeFluid;

    @Column(name = "change_air_filter")
    private boolean changeAirFilter;

    @Column(name = "change_transmission")
    private boolean changeTransmission;

    @Column(name = "car_checkup")
    private boolean carCheckup;

    @Column(name = "other")
    private String other;

    @OneToOne(
            mappedBy = "serviceDetail",
            cascade = CascadeType.ALL
    )
    private Vehicle vehicle;

    public ServiceDetail() {

    }

    public ServiceDetail(
            String oilType,
            boolean changeOilFilter,
            boolean changeCoolant,
            boolean changeBrakeFluid,
            boolean changeAirFilter,
            boolean changeTransmission,
            boolean carCheckup, String other
    ) {
        this.oilType = oilType;
        this.changeOilFilter = changeOilFilter;
        this.changeCoolant = changeCoolant;
        this.changeBrakeFluid = changeBrakeFluid;
        this.changeAirFilter = changeAirFilter;
        this.changeTransmission = changeTransmission;
        this.carCheckup = carCheckup;
        this.other = other;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOilType() {
        return oilType;
    }

    public void setOilType(String oilType) {
        this.oilType = oilType;
    }

    public boolean isChangeOilFilter() {
        return changeOilFilter;
    }

    public void setChangeOilFilter(boolean changeOilFilter) {
        this.changeOilFilter = changeOilFilter;
    }

    public boolean isChangeCoolant() {
        return changeCoolant;
    }

    public void setChangeCoolant(boolean changeCoolant) {
        this.changeCoolant = changeCoolant;
    }

    public boolean isChangeBrakeFluid() {
        return changeBrakeFluid;
    }

    public void setChangeBrakeFluid(boolean changeBrakeFluid) {
        this.changeBrakeFluid = changeBrakeFluid;
    }

    public boolean isChangeAirFilter() {
        return changeAirFilter;
    }

    public void setChangeAirFilter(boolean changeAirFilter) {
        this.changeAirFilter = changeAirFilter;
    }

    public boolean isChangeTransmission() {
        return changeTransmission;
    }

    public void setChangeTransmission(boolean changeTransmission) {
        this.changeTransmission = changeTransmission;
    }

    public boolean isCarCheckup() {
        return carCheckup;
    }

    public void setCarCheckup(boolean carCheckup) {
        this.carCheckup = carCheckup;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    @Override
    public String toString() {
        return "ServiceDetail{" +
                "id=" + id +
                ", oilType='" + oilType + '\'' +
                ", changeOilFilter=" + changeOilFilter +
                ", changeCoolant=" + changeCoolant +
                ", changeBrakeFluid=" + changeBrakeFluid +
                ", changeAirFilter=" + changeAirFilter +
                ", changeTransmission=" + changeTransmission +
                ", carCheckup=" + carCheckup +
                ", other='" + other + '\'' +
                '}';
    }
}
