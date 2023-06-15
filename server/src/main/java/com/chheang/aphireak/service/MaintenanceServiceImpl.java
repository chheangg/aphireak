package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.*;
import com.chheang.aphireak.entity.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MaintenanceServiceImpl implements MaintenanceService {
    private final MaintenanceDAO maintenanceDAO;
    private final CustomerDAO customerDAO;
    private final VehicleDAO vehicleDAO;
    private final ProductDAO productDAO;
    private final AccountDAO accountDAO;

    @Autowired
    public MaintenanceServiceImpl(
            MaintenanceDAO dao1,
            CustomerDAO dao2,
            VehicleDAO dao3,
            ProductDAO dao4,
            AccountDAO dao5
    ) {
        maintenanceDAO = dao1;
        customerDAO = dao2;
        vehicleDAO = dao3;
        productDAO = dao4;
        accountDAO = dao5;
    }

    @Override
    public List<Maintenance> getMaintenances() {
        return maintenanceDAO.getMaintenances();
    }

    @Override
    public Maintenance findMaintenanceById(int id) {
        return maintenanceDAO.findMaintenanceById(id);
    }

    @Override
    @Transactional
    public void createMaintenance(Maintenance maintenance) {
        Customer customer = customerDAO.findCustomerById(maintenance.getCustomer().getId());

        if (customer == null) {
            throw new RuntimeException();
        }

        Vehicle vehicle = vehicleDAO.findVehicleById(maintenance.getVehicle().getId());

        if (vehicle == null) {
            throw new RuntimeException();
        }

        Account account = accountDAO.findAccountById(maintenance.getAccount().getId());

        if (account == null) {
            throw new RuntimeException();
        }

        // Check in each maintenance detail if the product is empty
        maintenance.getMaintenanceDetails().forEach(d -> {
            d.setId(0);
            Product p = d.getProduct();
            Product product = productDAO.findProductById(p.getId());

            if (product != null) {
                d.setProduct(product);
            } else {
                throw new RuntimeException();
            }
        });

        maintenance.setCustomer(customer);
        maintenance.setVehicle(vehicle);
        maintenance.setAccount(account);
        maintenanceDAO.createMaintenance(maintenance);
    }
}
