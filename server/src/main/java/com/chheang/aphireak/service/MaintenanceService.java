package com.chheang.aphireak.service;

import com.chheang.aphireak.entity.Maintenance;

import java.util.List;

public interface MaintenanceService {
    List<Maintenance> getMaintenances();
    Maintenance findMaintenanceById(int id);
    void createMaintenance(Maintenance maintenance);
    Maintenance updateMaintenance(int id, Maintenance maintenance);
    void deleteMaintenanceById(int id);
}
