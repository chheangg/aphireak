package com.chheang.aphireak.rest.responses;

public class JwtResponse {
    private final String token;

    public JwtResponse(String jwt) {
        token = jwt;
    }

    public String getToken() {
        return token;
    }
}
