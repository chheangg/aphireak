package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Vehicle;
import com.chheang.aphireak.rest.responses.IdResponse;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.rest.responses.VehicleListElement;
import com.chheang.aphireak.service.VehicleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    private final VehicleService vehicleService;

    public VehicleController(VehicleService ent) {
        vehicleService = ent;
    }

    @GetMapping("")
    public ResponseEntity<ListResponse<VehicleListElement>> getVehicles() {
        List<Vehicle> vehicles = vehicleService.getVehicles();
        List<VehicleListElement> formattedVehicles =
                vehicles
                        .stream()
                        .map((v -> new VehicleListElement(
                                v.getId(),
                                v.getVehicleName(),
                                v.getVehicleType(),
                                v.getPlateNumber(),
                                v.getNextService(),
                                v.getCustomer().getFullName(),
                                v.getCustomer().getId()
                        )))
                        .toList();
        return new ResponseEntity<>(new ListResponse<>(formattedVehicles), HttpStatus.OK);
    }

    @GetMapping("/upcoming")
    public ResponseEntity<ListResponse<VehicleListElement>> getVehiclesWithinDays(@RequestParam String days) {
        int withinDays = Integer.parseInt(days);
        List<Vehicle> vehicles = vehicleService.getVehiclesWithinDays(withinDays);
        List<VehicleListElement> formattedVehicles =
                vehicles
                        .stream()
                        .map((v -> new VehicleListElement(
                                v.getId(),
                                v.getVehicleName(),
                                v.getVehicleType(),
                                v.getPlateNumber(),
                                v.getNextService(),
                                v.getCustomer().getFullName(),
                                v.getCustomer().getId()
                        )))
                        .toList();
        return new ResponseEntity<>(new ListResponse<>(formattedVehicles), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Vehicle findVehicleById(@PathVariable int id) {
        return vehicleService.findVehiclesById(id);
    }

    @PostMapping("")
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.createVehicle(vehicle);
    }

    @PutMapping("/{id}")
    public Vehicle updateVehicle(@PathVariable int id, @RequestBody Vehicle vehicle) {
        return vehicleService.updateVehicle(id, vehicle);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<IdResponse> deleteVehicleById(@PathVariable int id) {
        vehicleService.deleteVehicleById(id);
        return new ResponseEntity<>(new IdResponse(id), HttpStatus.ACCEPTED);
    }
}
