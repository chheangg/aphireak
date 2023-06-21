package com.chheang.aphireak.rest.responses;

public class TokenValidResponse {
    private boolean valid;

    public TokenValidResponse(boolean valid) {
        this.valid = valid;
    }

    public boolean getValid() {
        return valid;
    }
}
