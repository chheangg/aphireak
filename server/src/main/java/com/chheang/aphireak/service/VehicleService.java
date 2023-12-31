package com.chheang.aphireak.service;

import com.chheang.aphireak.entity.Vehicle;

import java.util.List;

public interface VehicleService {
    List<Vehicle> getVehicles();
    List<Vehicle> getVehiclesWithinDays(int days);
    Vehicle findVehiclesById(int id);
    Vehicle createVehicle(Vehicle vehicle);
    Vehicle updateVehicle(int id, Vehicle vehicle);
    void deleteVehicleById(int id);
}
