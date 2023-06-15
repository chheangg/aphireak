package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Maintenance;

import java.util.List;

public interface MaintenanceDAO {
    List<Maintenance> getMaintenances();
    Maintenance findMaintenanceById(int id);
    void createMaintenance(Maintenance maintenance);
    Maintenance updateMaintenance(int id, Maintenance maintenance);
    void deleteMaintenanceById(int id);
}
