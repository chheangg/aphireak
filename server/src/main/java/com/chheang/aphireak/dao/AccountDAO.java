package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Account;

import java.util.List;

public interface AccountDAO {
    List<Account> getAccounts();
    Account findByUsername(String username);
    Account findAccountById(int id);
    void createAccount(Account account);
}
