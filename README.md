# Calcs Timeline Estimator

A browser-based tool for estimating the effort and timeline for pension scheme calculation builds. Designed for project managers to produce indicative estimates during the RFP stage.

No installation required — just open `index.html` in a web browser.

---

## Getting Started

1. **Download** — Click the green **Code** button at the top of this page, then **Download ZIP**
2. **Extract** — Find the downloaded `.zip` file (usually in your Downloads folder) and extract it. On Windows, right-click and choose "Extract All". On Mac, double-click the zip file.
3. **Open** — Inside the extracted folder, find `index.html` and double-click it. It will open in your default web browser (Chrome, Edge, Firefox, Safari — any will work).

That's it. Everything runs locally in your browser — nothing to install, no internet connection needed after download.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The calculator app — all UI, styling, and calculation logic |
| `formula.js` | The formula config — all tuneable values, calc types, and complexity areas |

`formula.js` is the only file you need to edit to change the formula or add/remove calculation types. `index.html` reads everything from it and builds the UI dynamically.

---

## How the Estimate Works

The estimator calculates effort across three sequential phases:

| Phase | What it covers |
|-------|---------------|
| **Analysis** | Understanding scheme rules, writing specs, data analysis |
| **Coding** | Programming the calculations, including complexity extras |
| **UAT** | Supporting user acceptance testing and sign-off |

### The formulas

```
Analysis days = effectiveCalcs x basePerCalc x complexityMultiplier x dataQualityMultiplier
Coding days   = effectiveCalcs x basePerCalc x complexityMultiplier + complexityAreaDays
UAT days      = effectiveCalcs x uatDaysPerCalc
Total         = Analysis + Coding + UAT
```

### Tapering

When multiple calc types are selected, later ones take less effort because of shared analysis and code reuse. The first N types (default: 3) are costed at full rate. Each additional type counts as a fraction (default: 0.65).

Example: 5 calc types selected with threshold=3 and rate=0.65:
```
effectiveCalcs = 3 + (2 x 0.65) = 4.3
```

### Multipliers

- **Complexity** multiplier applies to both analysis and coding. Ranges from 0.7 (very simple) to 2.2 (very complex).
- **Data quality** multiplier applies to analysis only. Ranges from 0.8 (excellent) to 2.0 (very poor).
- **UAT** has a flat days-per-calc rate for each testing level, from 0.5 (minimal) to 5 (full regression).
- **Complexity areas** (e.g. GMPe) add flat extra days to the coding phase.

All of these values are defined in `formula.js` and can be changed there.

---

## Using the Calculator

1. Open `index.html` in any browser (Chrome, Edge, Firefox, Safari)
2. Fill in client and scheme details at the top
3. Choose scheme parameters on the left (complexity, data quality, calc types, UAT level)
4. The estimate on the right updates automatically
5. Save or export when done

### Inputs

**Scheme Parameters** — two dropdowns that have the biggest impact on the estimate:
- **Complexity of Calcs** — how complex the calculation rules are
- **Data Quality** — how clean the source data is

Click the **(i)** icon next to each for a guide to choosing the right level.

**Calculation Types** — tick the calc types in scope. Each adds effort to all three phases.

**Complexity Areas** — tick any that apply (e.g. GMPe). Each adds flat extra days to coding.

**UAT** — choose the testing level from minimal to full regression.

### Results

- **Days / Hours** — total estimate, with a toggle to switch the breakdown display
- **Complexity Badge** — coloured indicator (Low / Medium / High / Very High)
- **Effort Breakdown** — days per phase
- **Timeline** — visual waterfall chart showing phases sequentially, with month or day axis
- **Caveat** — all estimates include a disclaimer that they are indicative RFP figures only

### Save, Load, Export

- **Save Estimate** — stores the current estimate in your browser (localStorage). Requires a client or scheme name.
- **Load Saved** — restore a previously saved estimate.
- **Export as Text** — downloads a plain text file with all inputs, results, and the disclaimer. Named using client/scheme, e.g. `acme-corp-db-scheme-2026-03-23.txt`.
- **Reset** — clears all fields back to defaults.

Saved estimates are browser-local. Use Export for a permanent record or to share with others.

---

## Changing the Formula

Everything configurable lives in `formula.js`. Open it in any text editor.

### Change a multiplier or base rate

Find the value and change the number. For example, to make "moderate" complexity slightly harder:

```javascript
{ value: "moderate", label: "Moderate - Several calc types, some scheme complexity", multiplier: 1.5 },
//                                                                   was 1.3 ──────────────────────^
```

### Add a new calculation type

Add a line to the `calcTypes` array:

```javascript
calcTypes: [
    { id: "activeDeferred",  label: "Active to Deferred", default: true },
    { id: "activeRetired",   label: "Active to Retired" },
    // ... existing types ...
    { id: "transferValue",   label: "Transfer Value" },       // <-- new
],
```

The checkbox will appear automatically. No HTML editing needed.

### Add a new complexity area

Add a line to the `complexityAreas` array:

```javascript
complexityAreas: [
    { id: "gmpe",            label: "GMPe",                       days: 2 },
    { id: "myPensionGoLive", label: "MyPension Required Go-Live", days: 3 },
    { id: "mccloud",         label: "McCloud Remedy",             days: 4 },   // <-- new
],
```

### Add a new dropdown option

Add a line to the relevant array (`complexityLevels`, `dataQualityLevels`, or `uatLevels`):

```javascript
uatLevels: [
    // ... existing levels ...
    { value: "full-regression", label: "Full Regression - Complete regression, bulk runs", daysPerCalc: 5 },
    { value: "parallel-run",   label: "Parallel Run - Full parallel with legacy system",  daysPerCalc: 8 },  // <-- new
],
```

### Change the default selection

Move `default: true` to the option you want selected by default:

```javascript
{ value: "simple",   label: "Simple - ...", multiplier: 1.0, default: true },  // <-- now the default
{ value: "moderate", label: "Moderate - ...", multiplier: 1.3 },               // <-- was the default
```

### Important: don't change IDs

The `id` field on calc types and complexity areas is used to store saved estimates. If you rename an ID, previously saved estimates will lose that selection when loaded. Adding new items or removing old ones is fine.

---

## What you can't change without editing index.html

These are deliberately kept in the HTML because they change rarely:

- Tooltip descriptions (the **(i)** popup content for each dropdown)
- Caveat/disclaimer wording
- Phase names (Analysis, Coding, UAT)
- Section headings and labels
- The formula structure itself (which multiplier applies to which phase)

If any of these need updating, edit `index.html` directly.

---

## Tips

- Start with **Complexity** and **Data Quality** — they have the biggest impact
- Use the **(i)** icons for guidance on choosing the right level
- Save multiple estimates to compare different scope scenarios
- Add notes to record assumptions — they're included in the export
- The timeline only counts working days (not calendar days)
