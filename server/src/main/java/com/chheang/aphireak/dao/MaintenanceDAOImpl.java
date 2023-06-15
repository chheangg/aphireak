package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Maintenance;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MaintenanceDAOImpl implements MaintenanceDAO {
    private EntityManager entityManager;

    @Autowired
    public MaintenanceDAOImpl(EntityManager ent) {
        entityManager = ent;
    }

    @Override
    public List<Maintenance> getMaintenances() {
        TypedQuery<Maintenance> query = entityManager.createQuery("FROM Maintenance", Maintenance.class);
        return query.getResultList();
    }

    @Override
    public Maintenance findMaintenanceById(int id) {
        Maintenance maintenance = entityManager.find(Maintenance.class, id);
        if (maintenance == null) {
            throw new RuntimeException();
        }
        return maintenance;
    }

    @Override
    public void createMaintenance(Maintenance maintenance) {
        maintenance.setId(0);
        entityManager.persist(maintenance);
    }

    @Override
    public Maintenance updateMaintenance(int id, Maintenance maintenance) {
        maintenance.setId(id);
        return entityManager.merge(maintenance);
    }
}
