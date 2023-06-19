package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Customer;
import com.chheang.aphireak.entity.Vehicle;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VehicleDAOImpl implements VehicleDAO {
    private final EntityManager entityManager;

    @Autowired
    public VehicleDAOImpl(EntityManager ent) {
        entityManager = ent;
    }
    @Override
    public List<Vehicle> getVehicles(int customerId) {
        String queryStr = "FROM Vehicle v";
        TypedQuery<Vehicle> query = entityManager.createQuery(queryStr, Vehicle.class);
        return query.getResultList();
    }

    @Override
    public Vehicle findVehicleById(int id) {
        Vehicle vehicle = entityManager.find(Vehicle.class, id);
        if (vehicle == null) {
            throw new RuntimeException();
        }
        return vehicle;
    }

    @Override
    public void createVehicle(Vehicle vehicle) {
        vehicle.setId(0);
        vehicle.getServiceDetail().setId(0);
        entityManager.persist(vehicle);
    }

    @Override
    public Vehicle updateVehicle(int id, Vehicle newVehicle) {
        Vehicle vehicle = entityManager.find(Vehicle.class, id);

        // Make sure it exists
        if (vehicle == null) {
            throw new RuntimeException();
        }

        // Make sure vehicle id, and service id are correct
        newVehicle.setId(id);
        newVehicle.getServiceDetail().setId(vehicle.getServiceDetail().getId());

        return entityManager.merge(newVehicle);
    }

    @Override
    public void deleteVehicleById(int id) {
        Vehicle vehicle = entityManager.find(Vehicle.class, id);
        if (vehicle == null) {
            // TODO: add Custom Exception
            throw new RuntimeException();
        }
        entityManager.remove(vehicle);
    }
}
