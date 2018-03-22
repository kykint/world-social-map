package com.netcracer.worldsocialmap.database.repositories;

import com.netcracer.worldsocialmap.database.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {
}
