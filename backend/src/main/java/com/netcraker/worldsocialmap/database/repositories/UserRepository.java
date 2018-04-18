package com.netcraker.worldsocialmap.database.repositories;

import com.netcraker.worldsocialmap.database.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {
}
