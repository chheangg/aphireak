package com.chheang.aphireak.rest.responses;

public class InitResponse {
    private boolean isInitialization;

    public InitResponse(boolean isInit) {
        isInitialization = isInit;
    }

    public boolean isInitialization() {
        return isInitialization;
    }
}
