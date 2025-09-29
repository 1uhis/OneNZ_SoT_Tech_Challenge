"use client";

import { useState, useEffect } from "react";
import FloorPlan from "@/components/FloorPlan";

export default function DashboardPage() {
    const [showApplied, setShowApplied] = useState(false);

    const appliedRoles = [
        { company: "Company A", role: "Software Engineer", line: 1 },
        { company: "Company E", role: "Software Engineer", line: 3 },
        { company: "Company G", role: "Software Engineer", line: 1 },
        { company: "Company H", role: "Software Engineer", line: 3 }
    ];

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            window.location.href = "/";
        }
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#f6f6f6",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "24px",
                boxSizing: "border-box",
            }}
        >
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "24px" }}>
                Event Floor Plan
            </h1>

            <button
                onClick={() => setShowApplied(!showApplied)}
                style={{
                    backgroundColor: "#b7241f",
                    color: "white",
                    padding: "12px 24px",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "24px",
                    borderRadius: "16px",
                }}
            >
                {showApplied ? "Hide My Roles" : "Show My Roles"}
            </button>

            <div
                style={{
                    border: "2px solid #ccc",
                    borderRadius: "16px",
                    padding: "16px",
                    backgroundColor: "#f6f6f6",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1000px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "16px",
                    }}
                >
                    <span style={{ fontWeight: "bold", fontSize: "14px" }}>Entrance</span>
                </div>

                <FloorPlan appliedRoles={appliedRoles} showApplied={showApplied} />
            </div>
        </div>
    );
}