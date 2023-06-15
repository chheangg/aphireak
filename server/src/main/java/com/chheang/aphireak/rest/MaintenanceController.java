package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Maintenance;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.rest.responses.MaintenanceListElement;
import com.chheang.aphireak.service.MaintenanceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/maintenances")
public class MaintenanceController {
    private final MaintenanceService maintenanceService;

    public MaintenanceController(MaintenanceService ent) {
        maintenanceService = ent;
    }

    @GetMapping("/")
    public ResponseEntity<ListResponse<MaintenanceListElement>> getMaintenances() {
        List<Maintenance> maintenances = maintenanceService.getMaintenances();
        List<MaintenanceListElement> formatted_maintenances =
                maintenances
                        .stream()
                        .map(m -> {
                            return new MaintenanceListElement(
                                    m.getId(),
                                    m.getTotalCostInCent(),
                                    m.isPaid(),
                                    m.getTimestamp(),
                                    m.getCustomer(),
                                    m.getVehicle(),
                                    m.getMaintenanceDetails(),
                                    m.getAccount()
                            );
                        })
                        .toList();
        return new ResponseEntity<>(
                new ListResponse<>(formatted_maintenances), HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public Maintenance findMaintenanceById(@PathVariable int id) {
        return maintenanceService.findMaintenanceById(id);
    }
}
