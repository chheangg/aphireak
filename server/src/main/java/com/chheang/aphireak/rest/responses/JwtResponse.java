package com.chheang.aphireak.rest.responses;

public class JwtResponse {
    private final String token;
    private final String username;
    private final int id;

    public JwtResponse(String jwt, String username, int id) {
        token = jwt;
        this.username = username;
        this.id = id;
    }

    public String getToken() {
        return token;
    }
    public String getUsername() { return username; }
    public int getId() {
        return id;
    }
}
