package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.CustomerDAO;
import com.chheang.aphireak.dao.VehicleDAO;
import com.chheang.aphireak.entity.Customer;
import com.chheang.aphireak.entity.ServiceDetail;
import com.chheang.aphireak.entity.Vehicle;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {
    private final VehicleDAO vehicleDAO;
    private final CustomerDAO customerDAO;

    @Autowired
    public VehicleServiceImpl(VehicleDAO daoX, CustomerDAO daoY) {
        vehicleDAO = daoX;
        customerDAO = daoY;
    }

    @Override
    public List<Vehicle> getVehicles() {
        return vehicleDAO.getVehicles();
    }

    @Override
    public List<Vehicle> getVehiclesWithinDays(int days) {
        return vehicleDAO.getVehiclesWithinDays(days);
    }

    @Override
    public Vehicle findVehiclesById(int id) {
        return vehicleDAO.findVehicleById(id);
    }

    @Override
    @Transactional
    public Vehicle createVehicle(Vehicle vehicle) {
        // Create serviceDAO and sanitize it
            // Set correct vehicle type
            vehicle.getServiceDetail().setVehicle(vehicle);
            // Set correct ID for object creation
            vehicle.getServiceDetail().setId(0);
            // Set sanitized service detail to vehicle
        // Find customer by id and make sure the correct customer is set
        Customer customer = customerDAO.findCustomerById(vehicle.getCustomer().getId());

        if (customer == null) {
            throw new RuntimeException();
        }

        vehicle.setCustomer(customer);

        // Add ServiceDAO
        vehicleDAO.createVehicle(vehicle);
        return vehicle;
    }

    @Override
    @Transactional
    public Vehicle updateVehicle(int id, Vehicle vehicle) {
        return vehicleDAO.updateVehicle(id, vehicle);
    }

    @Override
    @Transactional
    public void deleteVehicleById(int id) {
        vehicleDAO.deleteVehicleById(id);
    }
}
