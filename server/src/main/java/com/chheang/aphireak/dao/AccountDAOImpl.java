package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Account;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

@Repository
public class AccountDAOImpl implements AccountDAO {
    private EntityManager entityManager;

    public AccountDAOImpl(EntityManager ent) {
        entityManager = ent;
    }

    @Override
    public Account findAccountById(int id) {
        return entityManager.find(Account.class, id);
    }
}
