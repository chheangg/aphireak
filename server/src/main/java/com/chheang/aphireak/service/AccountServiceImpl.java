package com.chheang.aphireak.service;

import com.chheang.aphireak.dao.AccountDAO;
import com.chheang.aphireak.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements UserDetailsService {
    private final AccountDAO accountDAO;

    @Autowired
    public AccountServiceImpl(AccountDAO ent) {
        accountDAO = ent;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountDAO.findByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException(username);
        }

        return account;
    }
}
