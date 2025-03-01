package shushi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import shushi.exception.ResourceNotFoundException;
import shushi.model.OurUser;
import shushi.payload.AuthResponse;
import shushi.payload.LoginRequest;
import shushi.repository.OurUserRepo;
import shushi.utils.JwtProvider;

import java.util.UUID;

@Service
public class AuthService {

    @Autowired
    private OurUserRepo userRepo;



    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserDetailsServiceImpl userDetailsImpl;

    //signup user
    public AuthResponse signUpUser(OurUser user) {
        OurUser isExist = userRepo.findByEmail(user.getEmail());
        if (isExist != null) {
            throw new ResourceNotFoundException("Email already exists");
        }

        // Set the UUID for the user
        UUID uuid = UUID.randomUUID();
        user.setId(uuid.toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
         userRepo.save(user);
        return new AuthResponse(null, "REGISTER SUCCESS! Login Now.");
    }






    //login user
    public AuthResponse loginUser(LoginRequest loginRequest) {
        Authentication authentication =
                authenticate(loginRequest.getEmail(),loginRequest.getPassword());

        String token = JwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse(token,"LOGIN SUCCESS!!");
        return authResponse;
    }

    //Authentication of user
    private Authentication authenticate(String email, String password) {
        OurUser user = userRepo.findByEmail(email);
        if (user == null ) {
            throw new ResourceNotFoundException("User does not exist");
        }
            UserDetails userDetailsFromDB = userDetailsImpl.loadUserByUsername(email);

            if(userDetailsFromDB==null) {
                throw  new ResourceNotFoundException("USER NOT FOUND WITH THIS EMAIL");
            }
            if(!passwordEncoder.matches(password,userDetailsFromDB.getPassword())) {
                throw  new ResourceNotFoundException("Wrong password!!");
            }
            return new UsernamePasswordAuthenticationToken
                    (userDetailsFromDB,null, userDetailsFromDB.getAuthorities());


    }

}
