package com.chheang.aphireak.service;

import com.chheang.aphireak.entity.Account;

public interface SecurityService {
    void createAccount(Account account);
    boolean isInitializationMode();
    Account findAccount(String username);
}
