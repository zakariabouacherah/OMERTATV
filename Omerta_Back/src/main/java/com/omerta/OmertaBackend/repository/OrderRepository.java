package com.omerta.OmertaBackend.repository;

import com.omerta.OmertaBackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}

