package com.chheang.aphireak.rest.responses;

public class JwtResponse {
    private final String token;
    private final String username;

    public JwtResponse(String jwt, String username) {
        token = jwt;
        this.username = username;
    }

    public String getToken() {
        return token;
    }
    public String getUsername() { return username; }
}
