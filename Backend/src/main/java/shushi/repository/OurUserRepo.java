package shushi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shushi.model.OurUser;

@Repository
public interface OurUserRepo extends JpaRepository<OurUser, String> {
    OurUser findByEmail(String email);
}
