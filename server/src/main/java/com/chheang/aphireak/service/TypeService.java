package com.chheang.aphireak.service;

import com.chheang.aphireak.entity.Type;

import java.util.List;

public interface TypeService {
    List<Type> getTypes();
    Type findTypeById(int id);
    void createType(Type type);
    Type updateType(int id, Type type);
    void deleteTypeById(int id);
}
