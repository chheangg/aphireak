package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Type;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.service.TypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/types")
public class TypeController {
    private final TypeService typeService;

    public TypeController(TypeService ent) {
        typeService = ent;
    }

    @GetMapping("/")
    public ResponseEntity<ListResponse<Type>> getTypes() {
        return new ResponseEntity<>(
                new ListResponse(
                        typeService.getTypes()
                ),
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public Type findTypeById(@PathVariable int id) {
        return typeService.findTypeById(id);
    }

    @PostMapping("/")
    public Type createType(@RequestBody Type type) {
        typeService.createType(type);
        return type;
    }
}
