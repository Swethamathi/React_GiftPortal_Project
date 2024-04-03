package swethamathi.gift.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import swethamathi.gift.model.User;

public interface UserRepo  extends JpaRepository<User,Long>
{
    User findByEmail(String username);
}
