package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.MaintenanceDAO;
import com.chheang.aphireak.entity.Maintenance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaintenanceServiceImpl implements MaintenanceService {
    private final MaintenanceDAO maintenanceDAO;

    @Autowired
    public MaintenanceServiceImpl(MaintenanceDAO ent) {
        maintenanceDAO = ent;
    }

    @Override
    public List<Maintenance> getMaintenances() {
        return maintenanceDAO.getMaintenances();
    }

    @Override
    public Maintenance findMaintenanceById(int id) {
        return maintenanceDAO.findMaintenanceById(id);
    }
}
