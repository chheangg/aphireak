package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.TypeDAO;
import com.chheang.aphireak.entity.Type;
import jakarta.transaction.Transactional;
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

    @Override
    public Type findTypeById(int id) {
        return typeDAO.findTypeById(id);
    }

    @Override
    @Transactional
    public void createType(Type type) {
        typeDAO.createType(type);
    }

    @Override
    @Transactional
    public Type updateType(int id, Type type) {
        return typeDAO.updateType(id, type);
    }

    @Override
    public void deleteTypeById(int id) {
        typeDAO.deleteTypeById(id);
    }
}
