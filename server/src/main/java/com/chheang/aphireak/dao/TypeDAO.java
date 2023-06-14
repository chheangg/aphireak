package com.chheang.aphireak.dao;

import com.chheang.aphireak.entity.Type;

import java.util.List;

public interface TypeDAO {
    List<Type> getTypes();
    Type findTypeById(int id);
    void createType(Type type);
    Type updateType(int id, Type type);
}
