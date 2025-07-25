package com.omerta.OmertaBackend.service;

import com.omerta.OmertaBackend.model.Plan;
import com.omerta.OmertaBackend.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;

    public List<Plan> getAllActivePlans() {
        return planRepository.findByActiveTrueOrderByDurationAsc();
    }

    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Optional<Plan> getPlanById(Long id) {
        return planRepository.findById(id);
    }

    public Optional<Plan> getPlanByPlanId(String planId) {
        return planRepository.findByPlanId(planId);
    }

    // Get plans by category
    public List<Plan> getPlansByCategory(Plan.PlanCategory category) {
        return planRepository.findByCategoryAndActiveTrueOrderByDurationAsc(category);
    }

    // Get all plans by category (including inactive)
    public List<Plan> getAllPlansByCategory(Plan.PlanCategory category) {
        return planRepository.findByCategoryOrderByDurationAsc(category);
    }

    // Get plans grouped by category
    public Map<Plan.PlanCategory, List<Plan>> getPlansGroupedByCategory() {
        List<Plan> allActivePlans = planRepository.findAllActivePlansOrderedByCategoryAndDuration();
        return allActivePlans.stream()
                .collect(Collectors.groupingBy(Plan::getCategory));
    }

    // Get plan by category and duration
    public Optional<Plan> getPlanByCategoryAndDuration(Plan.PlanCategory category, int duration) {
        return planRepository.findByCategoryAndDurationAndActiveTrue(category, duration);
    }

    public Plan savePlan(Plan plan) {
        // Generate planId based on category and duration if not provided
        if (plan.getPlanId() == null || plan.getPlanId().isEmpty()) {
            plan.setPlanId(generatePlanId(plan.getCategory(), plan.getDuration()));
        }
        return planRepository.save(plan);
    }

    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }

    public Plan updatePlan(Long id, Plan planDetails) {
        Plan plan = planRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));
        
        plan.setPlanId(planDetails.getPlanId());
        plan.setName(planDetails.getName());
        plan.setCategory(planDetails.getCategory());
        plan.setDuration(planDetails.getDuration());
        plan.setPrice(planDetails.getPrice());
        plan.setOriginalPrice(planDetails.getOriginalPrice());
        plan.setPopular(planDetails.isPopular());
        plan.setActive(planDetails.isActive());
        plan.setFeatures(planDetails.getFeatures());
        plan.setDescription(planDetails.getDescription());
        
        return planRepository.save(plan);
    }

    // Helper method to generate planId
    private String generatePlanId(Plan.PlanCategory category, int duration) {
        return category.name().toLowerCase() + "_" + duration + "month" + (duration > 1 ? "s" : "");
    }

    // Validate plan data
    public boolean isValidPlan(Plan plan) {
        // Check if duration is valid (1, 3, 6, 12)
        return List.of(1, 3, 6, 12).contains(plan.getDuration()) && 
               plan.getCategory() != null &&
               plan.getPrice() > 0;
    }

    // Get available durations for a category
    public List<Integer> getAvailableDurationsForCategory(Plan.PlanCategory category) {
        return planRepository.findByCategoryAndActiveTrueOrderByDurationAsc(category)
                .stream()
                .map(Plan::getDuration)
                .distinct()
                .collect(Collectors.toList());
    }
}