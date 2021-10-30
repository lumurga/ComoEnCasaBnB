package com.integrador.grupo7.controller;


import com.integrador.grupo7.model.User;
import com.integrador.grupo7.security.AuthenticationResponse;
import com.integrador.grupo7.service.UserService;
import com.integrador.grupo7.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    /* Attributes */

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    java.util.logging.Logger logger = java.util.logging.Logger.getLogger(String.valueOf(UserController.class));

    /* Constructor */
    @Autowired
    public UserController(UserService userService, AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    /* GET */
    @GetMapping("")
    public List<User> findAllUsers(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<User> findUserById(@PathVariable Long id) {

        logger.info("Search by id in the Users entity");
        return userService.findById(id);

    }


    /* POST */
    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user){

        ResponseEntity resp;

        if(userService.findByEmail(user.getEmail()) != null){
            resp = new ResponseEntity("The email already exists, please change it", HttpStatus.CONFLICT);
        } else{
            User us = userService.save(user);
            String token = jwtUtil.createToken(us.getUsername(), user);
            resp = new ResponseEntity(token, HttpStatus.CREATED);
        }

        return resp;

    }




    @CrossOrigin
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user){

        User us = userService.findByEmail(user.getEmail());

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        }catch (BadCredentialsException e) {
            e.printStackTrace();
        }
        final UserDetails userDetails = userService.loadUserByUsername(user.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails, us);


        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }


    /* PUT */

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user){

        ResponseEntity resp;

        if(userService.findById(user.getId()) != null){
            resp = new ResponseEntity(userService.update(user), HttpStatus.OK);
        }else{
            resp = new ResponseEntity("User with id:" + user.getId() + " does not exist", HttpStatus.NO_CONTENT);
        }

        return resp;
    }

    /* DELETE */
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id){
        ResponseEntity resp;

        if(userService.findById(id).isPresent()) {
            userService.delete(id);
            resp = new ResponseEntity(HttpStatus.NO_CONTENT);
            logger.info("User deleted correctly");
        } else {
            resp = new ResponseEntity("User not found!", HttpStatus.NOT_FOUND);
            logger.info("User not found!");
        }
        return resp;
    }


}
