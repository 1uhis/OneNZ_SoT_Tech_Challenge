# OneNZ_SoT_Tech_Challenge

This is a prototype built for the Summer of Tech 2026 technical challenge.
It demonstrates a responsive event floor plan that allows students to view their applied roles and company booth layout in an interactive way.

---

## Setup Instructions

1. Clone the repository:

```
git clone https://github.com/1uhis/OneNZ_SoT_Tech_Challenge.git
```

2. Install dependencies:

```
cd sot-2026-floorplan-prototype
npm install
```

3. Run the development server:

```
npm run dev
```

4. Open your browser:

```
http://localhost:3000
```

---

## Main Features Implemented

- Login Page with fake username/password
- Dashboard displaying a 2-column responsive floor plan
- Company names shown alongside their roles
- Applied roles highlighted in dark red when toggled
- Entrance marker and bordered container
- Toggle to show only applied roles
- Responsive design for desktop and mobile

---

## Known Limitations / Future Improvements

- Login is a fake login, no backend authentication
- Company booth data is static and hardcoded
- Booth positions are approximate, not a real floor layout
- Future improvements:
  - Real authentication and database integration
  - Interactive floor map with drag-and-drop
  - Mobile-friendly zoom/pan for floor plan
  - Search/filter roles by skills or company
  - Improved UI/UX and animations

---

## Repository Structure

```
sot-2026-floorplan-prototype/
├─ app/
│  ├─ page.tsx            # Login page
│  ├─ dashboard/page.tsx  # Dashboard page with FloorPlan
├─ components/
│  ├─ FloorPlan.tsx       # FloorPlan component
│  └─ ToggleButton.tsx    # Optional toggle button component
├─ package.json
├─ README.md
└─ ... other config files
```

---

This project demonstrates problem-solving, structured thinking, and a creative solution for optimizing the Summer of Tech 2026 experience for students, employers, and organizers.
