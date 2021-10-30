package com.integrador.grupo7.repository.impl;

import com.integrador.grupo7.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface IUserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByEmail(String email);
    Optional<User> findUserByNameAndLastNameAndEmail(String Name, String lastName, String Email);

}
