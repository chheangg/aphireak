package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Vehicle;

import java.util.List;

public interface VehicleDAO {
    List<Vehicle> getVehicles();
    Vehicle findVehicleById(int id);
    void createVehicle(Vehicle vehicle);
    Vehicle updateVehicle(int id, Vehicle vehicle);

    void deleteVehicleById(int id);
}
