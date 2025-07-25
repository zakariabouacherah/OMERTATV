package com.omerta.OmertaBackend.repository;

import com.omerta.OmertaBackend.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

public interface PlanRepository extends JpaRepository<Plan, Long> {
    List<Plan> findByActiveTrue();
    Optional<Plan> findByPlanId(String planId);
    List<Plan> findByActiveTrueOrderByDurationAsc();
    
    // Find plans by category
    List<Plan> findByCategoryAndActiveTrueOrderByDurationAsc(Plan.PlanCategory category);
    
    // Find plans by category (including inactive)
    List<Plan> findByCategoryOrderByDurationAsc(Plan.PlanCategory category);
    
    // Find single plan by category and duration
    Optional<Plan> findByCategoryAndDurationAndActiveTrue(Plan.PlanCategory category, int duration);
    
    // Find all active plans grouped by category
    @Query("SELECT p FROM Plan p WHERE p.active = true ORDER BY p.category, p.duration")
    List<Plan> findAllActivePlansOrderedByCategoryAndDuration();
    
    // Check if plan exists with category and duration
    boolean existsByCategoryAndDuration(Plan.PlanCategory category, int duration);
}