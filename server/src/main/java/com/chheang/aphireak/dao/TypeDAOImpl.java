package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Customer;
import com.chheang.aphireak.entity.Type;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TypeDAOImpl implements TypeDAO {
    private final EntityManager entityManager;

    @Autowired
    public TypeDAOImpl(EntityManager ent) {
        entityManager = ent;
    }

    @Override
    public List<Type> getTypes() {
        TypedQuery<Type> types = entityManager.createQuery("FROM Type", Type.class);
        return types.getResultList();
    }

    @Override
    public Type findTypeById(int id) {
        Type type = entityManager.find(Type.class, id);
        if (type == null) {
            throw new RuntimeException();
        }
        return type;
    }

    @Override
    public void createType(Type type) {
        type.setId(0);
        entityManager.persist(type);
    }

    @Override
    public Type updateType(int id, Type type) {
        type.setId(id);
        return entityManager.merge(type);
    }

    @Override
    public void deleteTypeById(int id) {
        Type type = entityManager.find(Type.class, id);
        if (type == null) {
            // TODO: add Custom Exception
            throw new RuntimeException();
        }
        entityManager.remove(type);
    }
}
