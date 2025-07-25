package com.omerta.OmertaBackend.service;

import com.omerta.OmertaBackend.model.Order;
import com.omerta.OmertaBackend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepo;

    public Order save(Order order) {
        return orderRepo.save(order);
    }

    public Optional<Order> findById(Long id) {
        return orderRepo.findById(id);
    }
}

