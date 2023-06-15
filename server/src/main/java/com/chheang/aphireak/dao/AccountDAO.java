package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Account;

public interface AccountDAO {
    Account findByUsername(String username);
    Account findAccountById(int id);
    void createAccount(Account account);
}
