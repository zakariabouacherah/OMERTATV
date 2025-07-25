package com.omerta.OmertaBackend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String planId; // e.g., "standard_1month", "premium_3months", "adult_12months"
    private String name; // e.g., "Standard Monthly", "Premium Quarterly"
    
    @Enumerated(EnumType.STRING)
    private PlanCategory category; // STANDARD, PREMIUM, ADULT
    
    private int duration; // in months (1, 3, 6, 12)
    private double price;
    private double originalPrice;
    private boolean popular;
    private boolean active; // to enable/disable plans
    
    @ElementCollection
    @CollectionTable(name = "plan_features", joinColumns = @JoinColumn(name = "plan_id"))
    @Column(name = "feature")
    private List<String> features;
    
    private String description;
    
    // Enum for plan categories
    public enum PlanCategory {
        STANDARD("Standard"),
        PREMIUM("Premium"),
        ADULT("Adult");
        
        private final String displayName;
        
        PlanCategory(String displayName) {
            this.displayName = displayName;
        }
        
        public String getDisplayName() {
            return displayName;
        }
    }
}