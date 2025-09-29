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

- **User Authentication (Login Page)**
  - Prototype login system for accessing the dashboard

- **Interactive Event Floor Plan (Dashboard)**
  - Realistic layout showing **booths and entrance**
  - Displays **applied roles per user** directly on the floor plan
  - Highlights applied roles to **reduce queueing confusion and navigation errors**
  - Helps students **quickly locate the correct booth and line** for each role
  - Responsive design for **desktop and mobile screens**

- **Applied Roles Toggle**
  - Show only the roles the user applied for
  - Addresses the **pain point of locating relevant positions among multiple companies**

- **Design Considerations**
  - Floor plan arranged in columns to **match physical booth arrangement**
  - Roles displayed in a **single vertical list per company**, minimizing cognitive load
  - Bordered container and entrance marker replicate **real-world environment for clarity**

---

## Known Limitations

- **Login system** is a prototype with no real authentication or backend integration.  
- **Static data**: Company booths and roles are hardcoded; not fetched from a database or API.  
- **Booth positions** are approximate and do not reflect the exact physical layout of a real event.  
- **Limited interactivity**: Floor plan is static; cannot drag, zoom, or pan.

---

## Future Improvements

- Implement **real authentication and user database** for secure login.  
- Integrate **dynamic booth and role data** from an API or backend service.  
- Add **interactive floor map features** such as drag-and-drop booth arrangement and zoom/pan.  
- Enhance **mobile usability**, including responsive scaling and touch gestures.  
- Provide **search and filtering** for roles or companies to help students locate positions faster.  
- Improve **UI/UX**, including animations and better visual hierarchy for booths and roles.  

---

## Repository Structure

```
onenz_sot_tech_challenge/
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
