package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Maintenance;
import com.chheang.aphireak.rest.responses.IdResponse;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.rest.responses.MaintenanceListElement;
import com.chheang.aphireak.service.MaintenanceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenances")
public class MaintenanceController {
    private final MaintenanceService maintenanceService;

    public MaintenanceController(MaintenanceService ent) {
        maintenanceService = ent;
    }

    @GetMapping("")
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

    @PostMapping("")
    public Maintenance createMaintenance(@RequestBody Maintenance maintenance) {
        System.out.println(maintenance.getVehicle());
        maintenanceService.createMaintenance(maintenance);
        return maintenance;
    }

    @PutMapping("/{id}")
    public Maintenance updateMaintenance(@PathVariable int id, @RequestBody Maintenance maintenance) {
        return maintenanceService.updateMaintenance(id, maintenance);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<IdResponse> deleteMaintenance(@PathVariable int id) {
        maintenanceService.deleteMaintenanceById(id);
        return new ResponseEntity<>(new IdResponse(id), HttpStatus.ACCEPTED);
    }
}
