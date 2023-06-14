package com.chheang.aphireak.dao;

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
}
