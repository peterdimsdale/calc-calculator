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

These two settings have the biggest impact on the estimate. Poor data quality increases effort because more time is needed to understand and work around data issues.

---

### 3. Calculation Types

Tick the calculation types that are in scope. Each selected type adds to the coding estimate. The options are:

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

The more types you select, the larger the coding effort.

---

### 4. Complexity Areas

Tick any additional complexity areas that apply to this scheme. Each adds extra days to the coding estimate:

- GMPe
- Underpins
- Added Years
- Special Service Credits
- Bridging Pension
- Hybrid
- MyPension Required Go-Live

Leave these unticked if they don't apply.

---

### 5. UAT

Choose the level of User Acceptance Testing expected:

- Minimal / Light / Standard / Intensive / Full Regression

This sets a flat number of days for the UAT phase.

---

## Reading the Results

The right-hand panel updates automatically as you make changes.

### Summary

- **Days** — total estimated working days
- **Hours** — total estimated hours (days multiplied by hours per day, default 7.5)

### Complexity Badge

A coloured badge (Low / Medium / High / Very High) gives a quick visual indicator of the overall size of the project.

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
| **Analysis base** | Starting days for the analysis phase before multipliers |
| **Coding base per calc** | Days to code each calculation type before multipliers |
| **Complexity multipliers** | How much each complexity level scales effort (e.g. "Very Complex" = 4×) |
| **Data quality multipliers** | How much data quality affects analysis effort (e.g. "Very Poor" = 2×) |
| **UAT values** | Flat days for each UAT level (e.g. Standard = 5 days) |
| **Complexity area values** | Days added for each complexity area (e.g. GMPe = 2 days) |
| **Complexity thresholds** | Day boundaries for the Low/Medium/High/Very High badge |

Team leads can **export** the configuration as a file and **import** it on another machine to share consistent settings across the team.

Click **Reset to Defaults** to restore all configuration values to their original settings.

---

## Tips

- Start with **Complexity of Calcs** and **Data Quality** — these have the biggest impact on the estimate
- Use the **timeline view** to give stakeholders a visual sense of project duration
- Save multiple estimates to compare different scope scenarios side by side
- Add notes to record your assumptions — they're included in the export
- If the default values don't reflect your team's experience, ask your team lead to update the configuration
