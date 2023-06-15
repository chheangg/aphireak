package com.chheang.aphireak.entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "account")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Account.class)
public class Account implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "password")
    private String password;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "enabled")
    private boolean enabled;

    @OneToMany(
            mappedBy = "account",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Authorities> authorities;

    @OneToMany(
            mappedBy = "account",
            cascade = CascadeType.ALL
    )
    private List<Maintenance> maintenances;

    public Account() {
    }

    public Account(String username, String password, boolean enabled) {
        this.username = username;
        this.password = password;
        this.enabled = enabled;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<Authorities> getAuthoritiesCustom() {
        return this.authorities;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authoritiesNew = new ArrayList<GrantedAuthority>();
        for (Authorities authorithy : getAuthoritiesCustom()) {
            authoritiesNew.add(new SimpleGrantedAuthority(authorithy.getRole()));
        }
        return authoritiesNew;
    }

    public void setAuthorities(List<Authorities> authorities) {
        this.authorities = authorities;
    }

    @JsonIdentityReference(alwaysAsId = true)
    public List<Maintenance> getMaintenances() {
        return maintenances;
    }

    public void setMaintenances(List<Maintenance> maintenances) {
        this.maintenances = maintenances;
    }
}
