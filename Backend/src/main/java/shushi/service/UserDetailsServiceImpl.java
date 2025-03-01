package shushi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import shushi.exception.ResourceNotFoundException;
import shushi.model.OurUser;
import shushi.repository.OurUserRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private OurUserRepo userRepo;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        OurUser userFromDB = userRepo.findByEmail(email);
        if (userFromDB == null) {
            throw new ResourceNotFoundException("Wrong email!!");
        }
        if (userFromDB.getEmail() == null || userFromDB.getPassword() == null) {
            throw new IllegalArgumentException("User email or password cannot be null");
        }
        List<GrantedAuthority> authorities = new ArrayList<>();

        return new org.springframework.security.core.userdetails.User(userFromDB.getEmail(), userFromDB.getPassword(), authorities);
    }
}
