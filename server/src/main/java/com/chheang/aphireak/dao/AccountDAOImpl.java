package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Account;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccountDAOImpl implements AccountDAO {
    private EntityManager entityManager;

    public AccountDAOImpl(EntityManager ent) {
        entityManager = ent;
    }

    @Override
    public Account findByUsername(String username) {
        TypedQuery<Account> query =
                entityManager.createQuery("FROM Account WHERE username = :username", Account.class);

        query.setParameter("username", username);

        List<Account> results = query.getResultList();
        if (results.isEmpty()) {
            return null;
        } else {
            return results.get(0);
        }
    }

    @Override
    public Account findAccountById(int id) {
        return entityManager.find(Account.class, id);
    }

    @Override
    public void createAccount(Account account) {
        account.setId(0);
        entityManager.persist(account);
    }
}
