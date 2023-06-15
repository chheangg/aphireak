package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.AccountDAO;
import com.chheang.aphireak.entity.Account;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SecurityServiceImpl implements SecurityService {
    private AccountDAO accountDAO;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public SecurityServiceImpl(AccountDAO ent, PasswordEncoder pe) {
        accountDAO = ent;
        passwordEncoder = pe;
    }

    @Override
    @Transactional
    public void createAccount(Account account) {
        if (accountDAO.findByUsername(account.getUsername()) != null) {
            throw new RuntimeException();
        }

        account.setPassword(passwordEncoder.encode(account.getPassword()));
        accountDAO.createAccount(account);
    }
}
