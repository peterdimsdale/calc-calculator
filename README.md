# XPS Calcs Timeline Estimator

A browser-based tool for quickly estimating the effort and timeline for pension scheme calculation builds. Designed for project managers to produce indicative estimates during the RFP stage, before work is won.

No installation required. Just open the file in your web browser.

---

## What Does This Tool Do?

You describe the scope of a calculation build — which calculation types are in scope, how complex the scheme rules are, the quality of the data, and the expected level of UAT — and the tool instantly produces:

- A total effort estimate in **days and hours**
- A breakdown across **Analysis, Coding, and UAT** phases
- A visual **timeline** showing how the phases sequence from a start date
- An **exported text file** you can attach to a quote or proposal

All estimates are clearly labelled as indicative RFP figures only. A full caveat is displayed alongside the results and included in every export.

---

## Getting Started

1. Open **index.html** in any web browser (Chrome, Edge, Firefox, or Safari)
2. Fill in the client and scheme details at the top
3. Work through the options on the left-hand side
4. The estimate on the right updates automatically as you make changes
5. When you're happy, save or export your estimate

---

## Step-by-Step Guide

### 1. Client Information

At the top of the page, enter:

- **Client Name** — the name of the client or employer
- **Scheme Name** — the pension scheme name
- **Quote Reference** — your internal quote or RFP reference number

Fill these in before you save or export, as they appear in the output file and are used to name saved estimates.

---

### 2. Scheme Parameters

Choose two settings that describe the overall nature of the work:

- **Complexity of Calcs** — how complex are the calculation rules?
  - Very Simple / Simple / Moderate / Complex / Very Complex
- **Data Quality** — how clean and reliable is the source data?
  - Excellent / Good / Average / Poor / Very Poor

Each option includes a short description to help you choose. Click the **(i)** icon next to either label to open a detailed guide to what each level means.

These two settings have the biggest impact on the estimate. Poor data quality increases effort because more time is needed to understand and work around data issues.

---

### 3. Calculation Types

Tick the calculation types that are in scope. The options are:

- Active to Deferred
- Active to Retired
- Active Benefit Statement
- Annual Allowance
- Pension Increase
- Deferred to Retired
- Death in Service
- Death in Deferment
- Death in Retirement
- Deferred Benefit Statement
- Dashboard

Each selected type adds to the Analysis, Coding, and UAT estimates. The tool applies **tapering** when many types are selected — the first few calc types are charged at full rate, but beyond a threshold each additional type carries a reduced rate, reflecting the shared work that comes with building a larger suite. This keeps estimates realistic rather than simply multiplying up.

---

### 4. Complexity Areas

Tick any additional complexity areas that apply to this scheme. Each adds extra days to the Coding estimate:

- **GMPe** — GMP equalisation work
- **MyPension Required Go-Live** — additional effort for MyPension integration

Leave these unticked if they don't apply.

---

### 5. UAT

Choose the level of User Acceptance Testing expected:

- Minimal / Light / Standard / Intensive / Full Regression

UAT effort scales with the number of calculation types in scope, reflecting the analyst and admin testing time required per calc. A wider scope means more test scenarios.

---

## Reading the Results

The right-hand panel updates automatically as you make changes.

### Summary

- **Days** — total estimated working days
- **Hours** — total estimated hours (days multiplied by hours per day, default 7.5)

### Complexity Badge and Caveat

A coloured badge (Low / Medium / High / Very High) gives a quick visual indicator of the overall size of the project.

Below the badge is an **indicative estimate caveat**. Click **Read full caveat** to see the full disclaimer text. This caveat is also included at the top of every exported file. The estimates are produced for RFP purposes only and should not be treated as a commitment or formal project plan.

### Effort Breakdown

Shows how the total breaks down across three phases:

| Phase | What it covers |
|-------|---------------|
| **Analysis** | Understanding scheme rules, writing specifications, data analysis |
| **Coding** | Programming the calculations, including complexity areas |
| **UAT** | Supporting client user acceptance testing and sign-off |

Use the **Days / Hours** toggle to switch the breakdown display between days and hours.

### Indicative Timeline

A visual waterfall chart showing the three phases running sequentially:

```
Analysis ████████
Coding            ████████████████
UAT                                 ██████
         Start    M1       M2       M3
```

- Phases run one after the other (Analysis first, then Coding, then UAT)
- The timeline only counts **working days** (weekends are excluded)
- For larger projects, the axis shows **months** (M1, M2, M3...)
- For smaller projects (under 2 weeks), the axis shows **days** (D1, D2...)
- Hover over any bar to see the exact number of days for that phase

The total calendar duration is shown in the top-right corner of the timeline section.

---

## Notes

Use the **Notes** text box to record any assumptions, caveats, or context for the estimate. Notes are included in the exported text file and saved alongside the estimate.

---

## Saving and Loading Estimates

### Save an Estimate

1. Make sure you have entered a Client Name or Scheme Name
2. Click **Save Estimate**
3. The estimate is saved in your browser — it will still be there next time you open the file in the same browser on the same computer

### Load a Saved Estimate

1. Click **Load Saved**
2. A list of your previously saved estimates appears
3. Click **Load** next to the one you want to restore
4. Click **Delete** to remove old estimates you no longer need

> **Note:** Saved estimates are stored in your browser only. They won't appear on a different computer or in a different browser. Use Export (see below) if you need to share or keep a permanent record.

---

## Exporting

Click **Export as Text** to download a plain text file containing:

- The indicative estimate caveat and disclaimer
- Client information and quote reference
- All your input selections (complexity, data quality, calculation types, UAT level)
- The estimate results and effort breakdown
- The indicative timeline with day ranges per phase
- Any notes you've added

The file is named using the client and scheme name, for example: `acme-corp-db-scheme-2026-03-23.txt`

---

## Reset

Click **Reset** to clear all fields back to their defaults and start a fresh estimate.

---

## Changing the Theme

Use the **Light / Dark** toggle in the top-right corner of the header to switch between light and dark mode. Your preference is remembered across sessions.

---

## Configuration (Advanced — Team Leads Only)

Click the **Config** link in the top-right corner to access the configuration page. This is where the underlying numbers that drive the estimates can be adjusted.

**Project managers should not normally need to change these.** If the estimates feel too high or too low compared to your team's experience, speak to your team lead who can adjust the values and share the updated settings with the team.

The configuration options are:

| Setting | What it controls |
|---------|-----------------|
| **Hours per Day** | Working hours in a day (default: 7.5) |
| **Full-rate threshold** | How many calc types are charged at full rate before tapering kicks in (default: 3) |
| **Reduced rate** | The fraction of full effort applied to each calc type beyond the threshold (default: 0.65) |
| **Analysis base per calc type** | Days per selected calc type for the analysis phase, before multipliers |
| **Coding base per calc type** | Days per selected calc type for coding, before the complexity multiplier |
| **Complexity multipliers** | How much each complexity level scales effort (e.g. "Very Complex" = 4×) |
| **Data quality multipliers** | How much data quality affects analysis effort (e.g. "Very Poor" = 2×) |
| **UAT values** | Days per calc type for each UAT level (e.g. Standard = 2 days per calc) |
| **Complexity area values** | Flat days added to coding for GMPe and MyPension Go-Live |
| **Complexity thresholds** | Day boundaries for the Low/Medium/High/Very High badge |

Team leads can **export** the configuration as a file and **import** it on another machine to share consistent settings across the team.

Click **Reset to Defaults** to restore all configuration values to their original settings.

---

## Tips

- Start with **Complexity of Calcs** and **Data Quality** — these have the biggest impact on the estimate
- Use the **(i)** icons next to those fields for a detailed guide to choosing the right level
- Use the **timeline view** to give stakeholders a visual sense of project duration
- Save multiple estimates to compare different scope scenarios side by side
- Add notes to record your assumptions — they're included in the export
- If the default values don't reflect your team's experience, ask your team lead to update the configuration
