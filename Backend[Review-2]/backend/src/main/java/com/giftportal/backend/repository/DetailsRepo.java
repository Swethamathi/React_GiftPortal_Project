package com.giftportal.backend.repository;

import com.giftportal.backend.model.Details;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailsRepo extends JpaRepository<Details, Long> {
}
