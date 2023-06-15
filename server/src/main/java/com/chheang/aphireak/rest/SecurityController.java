package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Account;
import com.chheang.aphireak.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class SecurityController {
    private SecurityService securityService;
    @Autowired
    public SecurityController(SecurityService ent) {
        securityService = ent;
    }

    @PostMapping("/sign-up")
    public Account createAccount(@RequestBody Account account) {
        securityService.createAccount(account);
        return account;
    }
}
