package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.TypeDAO;
import com.chheang.aphireak.entity.Type;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeServiceImpl implements TypeService {
    private final TypeDAO typeDAO;

    public TypeServiceImpl(TypeDAO ent) {
        typeDAO = ent;
    }

    @Override
    public List<Type> getTypes() {
        return typeDAO.getTypes();
    }
}
