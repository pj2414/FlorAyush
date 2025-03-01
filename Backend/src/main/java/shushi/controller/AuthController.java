package shushi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shushi.model.OurUser;
import shushi.payload.AuthResponse;
import shushi.payload.LoginRequest;
import shushi.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

  @Autowired
  private AuthService authService;

    // Register a new user
    @PostMapping("/register")
    public AuthResponse signup(@RequestBody OurUser user) {
        return authService.signUpUser(user);
    }

    // Login user
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest loginRequest) {
        return authService.loginUser(loginRequest);
    }


}
