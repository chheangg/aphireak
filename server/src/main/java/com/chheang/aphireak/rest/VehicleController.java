package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Vehicle;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.rest.responses.VehicleListElement;
import com.chheang.aphireak.service.VehicleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    private final VehicleService vehicleService;

    public VehicleController(VehicleService ent) {
        vehicleService = ent;
    }

    @GetMapping("/")
    public ResponseEntity<ListResponse<VehicleListElement>> getVehicles() {
        List<Vehicle> vehicles = vehicleService.getVehicles();
        List<VehicleListElement> formattedVehicles =
                vehicles
                        .stream()
                        .map((v -> new VehicleListElement(
                                v.getId(),
                                v.getVehicleName(),
                                v.getVehicleType(),
                                v.getPlateNumber()
                        )))
                        .toList();
        return new ResponseEntity<>(new ListResponse<>(formattedVehicles), HttpStatus.OK);
    }
}