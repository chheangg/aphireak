package com.chheang.aphireak.rest;

import com.chheang.aphireak.entity.Account;
import com.chheang.aphireak.rest.responses.JwtResponse;
import com.chheang.aphireak.security.JwtRequestFilter;
import com.chheang.aphireak.security.JwtTokenUtil;
import com.chheang.aphireak.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class SecurityController {
    private SecurityService securityService;
    private UserDetailsService userDetailsService;
    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    public SecurityController
            (SecurityService ent, UserDetailsService uds, AuthenticationManager auth, JwtTokenUtil jwt) {
        securityService = ent;
        userDetailsService = uds;
        authenticationManager = auth;
        jwtTokenUtil = jwt;
    }

    @PostMapping("/sign-up")
    public Account createAccount(@RequestBody Account account) {
        securityService.createAccount(account);
        return account;
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> loginAccount(@RequestBody Account account) throws Exception {
        authenticate(account.getUsername(), account.getPassword());
        final UserDetails userDetails =
                userDetailsService.loadUserByUsername(account.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException     e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}