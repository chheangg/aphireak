package com.chheang.aphireak.rest.responses;

import com.chheang.aphireak.entity.Type;
import com.chheang.aphireak.service.TypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
