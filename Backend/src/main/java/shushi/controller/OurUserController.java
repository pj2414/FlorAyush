package shushi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shushi.model.OurUser;
import shushi.service.OurUserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class OurUserController {

    @Autowired
    private OurUserService userService;


    //get all users
    @GetMapping
    public List<OurUser> getAllUsers() {
        return userService.getallUsers();
    }

    //get by id
    @GetMapping("/{userId}")
    public OurUser getUserById(@PathVariable String userId) {
        return userService.getById(userId);
    }

    //delete user
    @DeleteMapping("/{userId}")
    public void deleteUserById(@PathVariable String userId) {
        userService.deleteById(userId);
    }

    //update user
    @PutMapping()
    public OurUser updateUserById(@RequestHeader("Authorization") String jwtToken, @RequestBody OurUser user) {
        OurUser userFromDB = userService.getUserProfileFromToken(jwtToken);
        return userService.updateById(userFromDB.getId(), user);
    }

    //user's profile
    @GetMapping("/profile")
    public OurUser getUserProfile(@RequestHeader("Authorization") String jwtToken){
        return userService.getUserProfileFromToken(jwtToken);
    }

}
