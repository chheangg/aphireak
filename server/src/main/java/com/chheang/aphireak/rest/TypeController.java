package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Type;
import com.chheang.aphireak.rest.responses.IdResponse;
import com.chheang.aphireak.rest.responses.ListResponse;
import com.chheang.aphireak.rest.responses.TypeListElement;
import com.chheang.aphireak.service.TypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/types")
public class TypeController {
    private final TypeService typeService;

    public TypeController(TypeService ent) {
        typeService = ent;
    }

    @GetMapping("/")
    public ResponseEntity<ListResponse<TypeListElement>> getTypes() {
        List<Type> types = typeService.getTypes();
        List<TypeListElement> formattedTypes = types
                .stream()
                .map(t -> new TypeListElement(t.getId(), t.getName(), t.getProducts().size()))
                .toList();
        return new ResponseEntity<>(new ListResponse<>(formattedTypes), HttpStatus.OK);
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

    @PutMapping("/{id}")
    public Type updateType(@PathVariable int id, @RequestBody Type type) {
        return typeService.updateType(id, type);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<IdResponse> deleteTypeById(@PathVariable int id) {
        return new ResponseEntity<>(
                new IdResponse(id), HttpStatus.ACCEPTED
        );
    }
}
