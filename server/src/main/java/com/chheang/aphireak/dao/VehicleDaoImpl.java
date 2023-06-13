package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Vehicle;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VehicleDaoImpl implements VehicleDAO {
    private final EntityManager entityManager;

    @Autowired
    public VehicleDaoImpl(EntityManager ent) {
        entityManager = ent;
    }
    @Override
    public List<Vehicle> getVehicles() {
        TypedQuery<Vehicle> query = entityManager.createQuery("FROM Vehicle", Vehicle.class);
        return query.getResultList();
    }
}