// ============================================================
// FORMULA CONFIG — Calcs Timeline Estimator
// ============================================================
//
// This file defines everything about how estimates are calculated.
// Edit the values below to change the formula, or add/remove
// calculation types and complexity areas.
// No other files need editing.
//
// HOW THE ESTIMATE WORKS
// ----------------------
// The estimator calculates effort across three sequential phases:
//
//   1. ANALYSIS  — understanding the scheme rules and data
//   2. CODING    — building and configuring the calculations
//   3. UAT       — testing and sign-off
//
// THE FORMULAS
// ------------
//   Analysis days = effectiveCalcs x analysis.basePerCalc x complexityMultiplier x dataQualityMultiplier
//   Coding days   = effectiveCalcs x coding.basePerCalc x complexityMultiplier + complexityAreaDays
//   UAT days      = effectiveCalcs x uatDaysPerCalc
//   Total         = Analysis + Coding + UAT
//
// TAPERING (efficiency discount for multiple calc types)
// -----------------------------------------------------
// When multiple calc types are selected, later ones take less
// effort because of shared analysis and code reuse.
//
//   The first N types (tapering.threshold) count at full rate.
//   Each additional type counts as a fraction (tapering.rate).
//
//   Example: threshold=3, rate=0.65, 5 calc types selected
//            → effectiveCalcs = 3 + (2 × 0.65) = 4.3
//
// ============================================================

const FORMULA = {

    // Hours in a working day (for days-to-hours display conversion)
    hoursPerDay: 7.5,

    // Tapering — efficiency discount when many calc types are selected
    tapering: {
        threshold: 3,    // first N calc types at full rate
        rate: 0.65,      // each additional type counts as this fraction
    },

    // Base effort per calc type for each phase (in days, before multipliers)
    phases: {
        analysis: { basePerCalc: 5 },
        coding:   { basePerCalc: 5 },
    },


    // ----- COMPLEXITY -----
    // Multiplier applied to both analysis and coding phases.
    // 1.0 is the baseline. Higher = more effort.

    complexityLevels: [
        { value: "very-simple",  label: "Very Simple - Single calc type, standard rules only",          multiplier: 0.7 },
        { value: "simple",       label: "Simple - 1-2 calc types, minor special factors",               multiplier: 1.0 },
        { value: "moderate",     label: "Moderate - Several calc types, some scheme complexity",         multiplier: 1.3, default: true },
        { value: "complex",      label: "Complex - Many calc types, significant complexity e.g. GMP",   multiplier: 1.7 },
        { value: "very-complex", label: "Very Complex - Full calc suite, multiple interacting factors", multiplier: 2.2 },
    ],


    // ----- DATA QUALITY -----
    // Multiplier applied to analysis phase only.
    // Poor data = more time investigating before calcs can begin.

    dataQualityLevels: [
        { value: "excellent",  label: "Excellent - Fully validated, no known issues", multiplier: 0.8 },
        { value: "good",       label: "Good - Clean, minor gaps",                    multiplier: 1.0 },
        { value: "average",    label: "Average - Some gaps/issues",                  multiplier: 1.25, default: true },
        { value: "poor",       label: "Poor - Significant data issues",              multiplier: 1.6 },
        { value: "very-poor",  label: "Very Poor - Major remediation needed",        multiplier: 2.0 },
    ],


    // ----- UAT -----
    // Days per calc type for each UAT testing level.

    uatLevels: [
        { value: "minimal",         label: "Minimal - Basic sanity checks only",              daysPerCalc: 0.5 },
        { value: "light",           label: "Light - Targeted testing, limited test pack",     daysPerCalc: 1 },
        { value: "standard",        label: "Standard - Structured test pack, all calc types", daysPerCalc: 2, default: true },
        { value: "intensive",       label: "Intensive - Extended test pack, parallel running", daysPerCalc: 3 },
        { value: "full-regression", label: "Full Regression - Complete regression, bulk runs", daysPerCalc: 5 },
    ],


    // ----- CALCULATION TYPES -----
    // Each entry becomes a checkbox on the form.
    // To add a new calc type, add a new line here.
    // Optional: set weight (0-1) for calc types that take less effort
    // than a full calc. Omit weight or set to 1 for full effort.
    // WARNING: changing an id will break previously saved estimates.

    calcTypes: [
        { id: "activeDeferred",           label: "Active to Deferred",           default: true },
        { id: "activeRetired",            label: "Active to Retired" },
        { id: "activeBenefitStatement",   label: "Active Benefit Statement" },
        { id: "annualAllowance",          label: "Annual Allowance" },
        { id: "pensionIncrease",          label: "Pension Increase" },
        { id: "deferredRetired",          label: "Deferred to Retired" },
        { id: "deathInService",           label: "Death in Service" },
        { id: "deathInDeferment",         label: "Death in Deferment" },
        { id: "deathInRetirement",        label: "Death in Retirement" },
        { id: "deferredBenefitStatement", label: "Deferred Benefit Statement" },
        { id: "dashboard",               label: "Dashboard",                    weight: 0.25 },
    ],


    // ----- COMPLEXITY AREAS -----
    // Flat additional days added to the coding phase.
    // To add a new area, add a new line here.
    // WARNING: changing an id will break previously saved estimates.

    complexityAreas: [
        { id: "gmpe",            label: "GMPe",                       days: 2 },
        { id: "myPensionGoLive", label: "MyPension Required Go-Live", days: 3 },
    ],


    // ----- COMPLEXITY BADGE -----
    // Total day thresholds for the complexity badge on the results panel.
    // Below low = "LOW", below medium = "MEDIUM", below high = "HIGH", above = "VERY HIGH"

    complexityBadge: {
        low: 25,
        medium: 60,
        high: 120,
    },
};
