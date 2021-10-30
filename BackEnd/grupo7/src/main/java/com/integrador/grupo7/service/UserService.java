package com.integrador.grupo7.service;


import com.integrador.grupo7.model.User;
import com.integrador.grupo7.repository.impl.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class UserService implements IEntityService<User>, UserDetailsService {

    /* Attributes */

    private final IUserRepository userRepository;
    java.util.logging.Logger logger = Logger.getLogger(String.valueOf(UserService.class));

    /* Constructor */

    @Autowired
    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /* Methods */

    @Override
    public User save(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }


    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User update(User user) {

        User tmp = userRepository.findById(user.getId()).orElseGet(null);

        if(tmp != null){

            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            tmp.setName(user.getName());
            tmp.setLastName(user.getLastName());
            tmp.setEmail(user.getEmail());
            tmp.setPassword(passwordEncoder.encode(user.getPassword()));
            tmp.setUserRole(user.getUserRole());

            return userRepository.save(tmp);
        }else {
            return null;
        }

    }

    @Override
    public void delete(Long id) {
        if(userRepository.findById(id).isPresent()){
            userRepository.deleteById(id);
            logger.info("User deleted correctly!");
            System.out.println("User deleted correctly!");
        } else {
            logger.info("User not found!");
            System.out.println("User not found!");
        }
    }



    public User findByEmail(String email){
        return userRepository.findUserByEmail(email).orElse(null);
    }


    public User findUserByData(String name, String lastName, String email, String username){
        return userRepository.findUserByNameAndLastNameAndEmail(name, lastName, email).orElseGet(null);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findUserByEmail(username).orElseThrow((()-> new UsernameNotFoundException("Usuario not found")));
    }


}
