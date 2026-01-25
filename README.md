# Calcs Cost Calculator

A web-based estimation tool for calculating implementation effort and costs for pension scheme calculation builds. Built for XPS Group.

## Features

- **Scheme Structure Configuration**: Define benefit categories, member tranches, and overall scheme complexity
- **Calculation Types**: Select from 10 calculation types including Active to Deferred, Active to Retired, Death Benefits, and more
- **Complexity Areas**: Add additional effort for specific complexity factors (GMPe, Underpins, Added Years, Special Service Credits, Bridging Pension, Hybrid)
- **Testing Configuration**: Configure test case counts and UAT complexity levels
- **Real-time Estimates**: Instant calculation of total hours, days, and cost with detailed effort breakdown
- **Light/Dark Mode**: Toggle between light and dark themes
- **Hours/Days Toggle**: View effort breakdown in hours or days
- **Configurable Parameters**: Adjust all formulas, multipliers, and rates via the Configuration page
- **Export**: Export estimates to text file for sharing

## Files

- `index.html` - Main calculator interface
- `config.html` - Configuration page for adjusting formulas and rates

## Usage

1. Open `index.html` in a web browser
2. Configure the scheme structure (categories, tranches, complexity)
3. Select required calculation types
4. Check any applicable complexity areas
5. Set testing requirements
6. View the estimated effort and cost in real-time
7. Add notes and export the estimate

## Configuration

Access the Configuration page to customise:

- **General Settings**: Hourly rate, hours per day, PM overhead percentage
- **Analysis & Specification**: Base hours and per-category/tranche hours
- **Test Case Design**: Hours per test case
- **Coding**: Base hours per calculation type and complexity multipliers
- **Testing & Iteration**: Hours per test case and complexity multipliers
- **UAT Support**: Hours for light, standard, and intensive UAT
- **Complexity Thresholds**: Hour boundaries for Low/Medium/High/Very High badges
- **Complexity Areas**: Hours for each specific complexity factor

The configuration page supports both hours and days input modes, with configurable hours-per-day conversion (supports decimal values like 7.25).

## Data Storage

All configuration is stored in browser localStorage, allowing settings to persist across sessions. Configuration can be exported/imported as JSON files for backup or sharing between users.

## Technologies

- HTML5
- CSS3 (CSS Variables for theming)
- Vanilla JavaScript
- No external dependencies

## License

Proprietary - XPS Group
