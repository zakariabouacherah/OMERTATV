package com.omerta.OmertaBackend.controller;

import com.omerta.OmertaBackend.model.Order;
import com.omerta.OmertaBackend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/order")
    public ResponseEntity<Map<String, Object>> createOrder(@RequestBody Order order) {
        order.setStatus("PENDING");
        Order saved = orderService.save(order);
        return ResponseEntity.ok(Map.of("orderId", saved.getId()));
    }

    @PostMapping("/payment-confirmed")
    public ResponseEntity<Map<String, Object>> confirmPayment(@RequestParam Long orderId) {
        Order order = orderService.findById(orderId).orElseThrow();
        order.setStatus("PAID");
        orderService.save(order);
        // TODO: Call TVPLUS API and send email
        return ResponseEntity.ok(Map.of("status", "success"));
    }
}

