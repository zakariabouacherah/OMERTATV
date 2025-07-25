package com.omerta.OmertaBackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String deviceType;
    private String mac;
    private int subscription;
    private String packageId;
    private String status; // PENDING, PAID, COMPLETED
}

