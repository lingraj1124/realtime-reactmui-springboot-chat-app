package com.javatechie.service;

import com.javatechie.model.User;
import com.javatechie.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;  // Assumes a UserRepository interface is available

    private final PasswordEncoder passwordEncoder;

//    public String register(String username, String password) {
//        if (userRepository.findByUsername(username).isPresent()) {
//            return "User already exists";
//        }
//        User user = new User();
//        user.setUsername(username);
//        user.setPassword(passwordEncoder.encode(password));
//        userRepository.save(user);
//        return "User registered successfully";
//    }

    public User findByUsername(String username) {
        Optional<User> userOptional = userRepository.findByUsername(username);
        return userOptional.orElse(null);
    }
}
