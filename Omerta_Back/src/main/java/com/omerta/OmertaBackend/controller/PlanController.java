package com.omerta.OmertaBackend.controller;

import com.omerta.OmertaBackend.model.Plan;
import com.omerta.OmertaBackend.service.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PlanController {

    private final PlanService planService;

    // Get all active plans (for frontend)
    @GetMapping("/plans")
    public ResponseEntity<List<Plan>> getActivePlans() {
        List<Plan> plans = planService.getAllActivePlans();
        return ResponseEntity.ok(plans);
    }

    // Get all plans (for admin)
    @GetMapping("/plans/all")
    public ResponseEntity<List<Plan>> getAllPlans() {
        List<Plan> plans = planService.getAllPlans();
        return ResponseEntity.ok(plans);
    }

    // Get plans grouped by category
    @GetMapping("/plans/grouped")
    public ResponseEntity<Map<Plan.PlanCategory, List<Plan>>> getPlansGroupedByCategory() {
        Map<Plan.PlanCategory, List<Plan>> groupedPlans = planService.getPlansGroupedByCategory();
        return ResponseEntity.ok(groupedPlans);
    }

    // Get plans by category
    @GetMapping("/plans/category/{category}")
    public ResponseEntity<List<Plan>> getPlansByCategory(@PathVariable String category) {
        try {
            Plan.PlanCategory planCategory = Plan.PlanCategory.valueOf(category.toUpperCase());
            List<Plan> plans = planService.getPlansByCategory(planCategory);
            return ResponseEntity.ok(plans);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Get all plans by category (including inactive, for admin)
    @GetMapping("/plans/category/{category}/all")
    public ResponseEntity<List<Plan>> getAllPlansByCategory(@PathVariable String category) {
        try {
            Plan.PlanCategory planCategory = Plan.PlanCategory.valueOf(category.toUpperCase());
            List<Plan> plans = planService.getAllPlansByCategory(planCategory);
            return ResponseEntity.ok(plans);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Get plan by category and duration
    @GetMapping("/plans/category/{category}/duration/{duration}")
    public ResponseEntity<Plan> getPlanByCategoryAndDuration(
            @PathVariable String category,
            @PathVariable int duration) {
        try {
            Plan.PlanCategory planCategory = Plan.PlanCategory.valueOf(category.toUpperCase());
            return planService.getPlanByCategoryAndDuration(planCategory, duration)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Get available durations for a category
    @GetMapping("/plans/category/{category}/durations")
    public ResponseEntity<List<Integer>> getAvailableDurationsForCategory(@PathVariable String category) {
        try {
            Plan.PlanCategory planCategory = Plan.PlanCategory.valueOf(category.toUpperCase());
            List<Integer> durations = planService.getAvailableDurationsForCategory(planCategory);
            return ResponseEntity.ok(durations);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Get plan by ID
    @GetMapping("/plans/{id}")
    public ResponseEntity<Plan> getPlanById(@PathVariable Long id) {
        return planService.getPlanById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get plan by planId (e.g., "standard_1month")
    @GetMapping("/plans/by-plan-id/{planId}")
    public ResponseEntity<Plan> getPlanByPlanId(@PathVariable String planId) {
        return planService.getPlanByPlanId(planId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new plan
    @PostMapping("/plans")
    public ResponseEntity<?> createPlan(@RequestBody Plan plan) {
        if (!planService.isValidPlan(plan)) {
            return ResponseEntity.badRequest()
                    .body("Invalid plan data. Duration must be 1, 3, 6, or 12 months, and category must be specified.");
        }

        Plan savedPlan = planService.savePlan(plan);
        return ResponseEntity.ok(savedPlan);
    }

    // Update plan
    @PutMapping("/plans/{id}")
    public ResponseEntity<?> updatePlan(@PathVariable Long id, @RequestBody Plan planDetails) {
        try {
            if (!planService.isValidPlan(planDetails)) {
                return ResponseEntity.badRequest()
                        .body("Invalid plan data. Duration must be 1, 3, 6, or 12 months, and category must be specified.");
            }

            Plan updatedPlan = planService.updatePlan(id, planDetails);
            return ResponseEntity.ok(updatedPlan);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete plan
    @DeleteMapping("/plans/{id}")
    public ResponseEntity<Void> deletePlan(@PathVariable Long id) {
        planService.deletePlan(id);
        return ResponseEntity.ok().build();
    }

    // Toggle plan active status
    @PatchMapping("/plans/{id}/toggle-active")
    public ResponseEntity<Plan> togglePlanActive(@PathVariable Long id) {
        return planService.getPlanById(id)
                .map(plan -> {
                    plan.setActive(!plan.isActive());
                    Plan updatedPlan = planService.savePlan(plan);
                    return ResponseEntity.ok(updatedPlan);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Get all available categories
    @GetMapping("/plans/categories")
    public ResponseEntity<Plan.PlanCategory[]> getAvailableCategories() {
        return ResponseEntity.ok(Plan.PlanCategory.values());
    }
}