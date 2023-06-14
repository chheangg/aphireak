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
    public Vehicle findVehiclesById(int id) {
        return vehicleDAO.findVehicleById(id);
    }

    @Override
    @Transactional
    public Vehicle createVehicle(Vehicle vehicle) {
        // Create serviceDAO and sanitize it
            // First get the non-sanitized object
            ServiceDetail serviceDetail = vehicle.getServiceDetail();
            // Set correct vehicle type
            serviceDetail.setVehicle(vehicle);
            // Set correct ID for object creation
            serviceDetail.setId(0);
            // Set sanitized service detail to vehicle
            vehicle.setServiceDetail(serviceDetail);

        // Find customer by id and make sure the correct customer is set
        Customer customer = customerDAO.findCustomerById(vehicle.getCustomer().getId());
        vehicle.setCustomer(customer);

        if (customer == null) {
            throw new RuntimeException();
        }
        
        // Add ServiceDAO
        vehicleDAO.createVehicle(vehicle);
        return vehicle;
    }


}
