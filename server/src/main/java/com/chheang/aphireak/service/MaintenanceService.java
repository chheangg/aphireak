package com.chheang.aphireak.service;

import com.chheang.aphireak.entity.Maintenance;

import java.util.List;

public interface MaintenanceService {
    List<Maintenance> getMaintenances();
    Maintenance findMaintenanceById(int id);
}
