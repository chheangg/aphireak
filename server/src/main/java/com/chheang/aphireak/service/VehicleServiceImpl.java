package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.VehicleDAO;
import com.chheang.aphireak.entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {
    private final VehicleDAO vehicleDAO;

    @Autowired
    public VehicleServiceImpl(VehicleDAO ent) {
        vehicleDAO = ent;
    }

    public List<Vehicle> getVehicles() {
        return vehicleDAO.getVehicles();
    }

    @Override
    public Vehicle findVehiclesById(int id) {
        return vehicleDAO.findVehicleById(id);
    }
}
