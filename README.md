# XPS Calcs Timeline Estimator

A browser-based tool for quickly estimating the effort and timeline for pension scheme calculation builds. Designed for project managers to produce indicative estimates during the RFP stage, before work is won.

No installation required. Just open the file in your web browser.

---

## Getting Started

1. Open **index.html** in any web browser (Chrome, Edge, Firefox, Safari)
2. Fill in the form on the left-hand side
3. Watch the results update automatically on the right-hand side
4. Save or export your estimate when you're happy

---

## Step-by-Step Guide

### 1. Client Information

At the top of the page, enter:

- **Client Name** - the name of the client or employer
- **Scheme Name** - the pension scheme name
- **Quote Reference** - your internal quote or RFP reference number

These are used when saving and exporting estimates, so fill them in before you save.

### 2. Scheme Parameters

Choose two settings that describe the overall nature of the work:

- **Complexity of Calcs** - how complex are the calculation rules? Choose from:
  - Very Simple / Simple / Moderate / Complex / Very Complex
- **Data Quality** - how clean and reliable is the source data? Choose from:
  - Excellent / Good / Average / Poor / Very Poor

Both of these affect the analysis and coding estimates. Poor data quality increases effort because more time is needed to understand and work around data issues.

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

### 5. UAT

Choose the level of User Acceptance Testing expected:

- Minimal / Light / Standard / Intensive / Full Regression

This sets a flat number of days for the UAT phase.

---

## Reading the Results

The right-hand panel updates automatically as you make changes.

### Summary

- **Days** - total estimated working days
- **Hours** - total estimated hours (days multiplied by hours per day, default 7.5)

### Complexity Badge

A coloured badge (Low / Medium / High / Very High) gives a quick visual indicator of the overall size of the project.

### Effort Breakdown

Shows how the total breaks down across three phases:

| Phase | What it covers |
|-------|---------------|
| **Analysis** | Understanding scheme rules, writing specifications, data analysis |
| **Coding** | Programming the calculations, including complexity areas |
| **UAT** | Supporting client user acceptance testing and sign-off |

Use the **Days / Hours** toggle to switch the breakdown display.

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
- Hover over any bar to see the exact number of days

The total duration is shown in the top-right corner of the timeline section.

---

## Saving and Loading Estimates

### Save an Estimate

1. Make sure you have entered a Client Name or Scheme Name
2. Click **Save Estimate**
3. The estimate is saved to your browser's local storage

### Load a Saved Estimate

1. Click **Load Saved**
2. A list of your previously saved estimates appears
3. Click **Load** next to the one you want to restore
4. Click **Delete** to remove old estimates you no longer need

Saved estimates are stored in your browser only. They won't appear on a different computer or in a different browser.

---

## Exporting

Click **Export as Text** to download a text file containing:

- Client information
- All your input selections
- The estimate results and effort breakdown
- The indicative timeline with day ranges per phase
- Any notes you've added

The file is named using the client and scheme name, e.g. `acme-corp-db-scheme-2024-06-15.txt`.

---

## Notes

Use the **Notes** text box to record any assumptions, caveats, or context for the estimate. Notes are included in the text export and saved with the estimate.

---

## Reset

Click **Reset** to clear all fields back to their defaults and start a fresh estimate.

---

## Changing the Theme

Use the **Light / Dark** toggle in the top-right corner to switch between light and dark mode. Your preference is remembered across sessions.

---

## Configuration (Advanced)

Click the **Config** link in the top-right corner to access the configuration page. This is where you can adjust the underlying values that drive the estimates:

| Setting | What it controls |
|---------|-----------------|
| **Hours per Day** | Working hours in a day (default: 7.5) |
| **Analysis base** | Starting days for the analysis phase before multipliers |
| **Coding base per calc** | Days to code each calculation type before multipliers |
| **Complexity multipliers** | How much each complexity level scales effort (e.g. "Very Complex" = 4x) |
| **Data quality multipliers** | How much data quality affects analysis effort (e.g. "Very Poor" = 2x) |
| **UAT values** | Flat days for each UAT level (e.g. Standard = 5 days) |
| **Complexity area values** | Days added for each complexity area (e.g. GMPe = 2 days) |
| **Complexity thresholds** | Day boundaries for the Low/Medium/High/Very High badge |

You can also **export** your configuration as a JSON file and **import** it on another machine to share settings across a team.

Click **Reset to Defaults** to restore all configuration values to their original settings.

---

## Tips

- Start with the **Complexity of Calcs** and **Data Quality** dropdowns - these have the biggest impact on the estimate
- Use the timeline view to give stakeholders a visual sense of the project duration
- Save estimates regularly so you can compare different scenarios
- Add notes to explain your assumptions - they're included in the export
- If the default values don't match your experience, ask your team lead to adjust the configuration
