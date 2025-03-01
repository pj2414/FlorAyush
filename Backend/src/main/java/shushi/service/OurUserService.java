package shushi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import shushi.exception.ResourceNotFoundException;
import shushi.model.OurUser;
import shushi.repository.OurUserRepo;
import shushi.utils.JwtProvider;

import java.util.List;

@Service
public class OurUserService {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private OurUserRepo ourUserRepo;


    //get all users
    public List<OurUser> getallUsers(){
        return ourUserRepo.findAll();
    }

    //get by id
    public OurUser getById(String userId){
        return ourUserRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("USER NOT FOUND WITH ID: "+userId));
    }

    //delete by id
    public String  deleteById(String userId){
        getById(userId);
        ourUserRepo.deleteById(userId);
        return "User Deleted with ID: "+userId;
    }

    //update user
    public OurUser updateById(String userId, OurUser user) {
        OurUser userFromDB = getById(userId);
        if (user.getName() != null && !user.getName().trim().isEmpty()) {
            userFromDB.setName(user.getName().trim());
        }
        if (user.getEmail() != null && !user.getEmail().trim().isEmpty()) {
            userFromDB.setEmail(user.getEmail().trim());
        }
        if (user.getPassword() != null && !user.getPassword().trim().isEmpty()) {
            // Ensure to hash the password
            userFromDB.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        return ourUserRepo.save(userFromDB);
    }
        //get user profile
        public OurUser getUserProfileFromToken(String jwt) {
            String email = JwtProvider.getEmailFromToken(jwt);
            OurUser userFromDB = ourUserRepo.findByEmail(email);
            if (userFromDB == null) {
                throw new ResourceNotFoundException("USER NOT FOUND WITH EMAIL: " + email);
            }
            return userFromDB;
        }



    }
