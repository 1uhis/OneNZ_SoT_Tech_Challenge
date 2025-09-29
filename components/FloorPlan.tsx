"use client";

type Role = {
    company: string;
    role: string;
    line: number;
};

type Props = {
    appliedRoles: Role[];
    showApplied: boolean;
};

const booths = [
    { name: "Company A", positions: [{ role: "Software Engineer", line: 1 }, { role: "Data Analyst", line: 2 }, { role: "Product Manager", line: 3 }] },
    { name: "Company B", positions: [{ role: "Product Manager", line: 1 }, { role: "UX Designer", line: 2 }, { role: "Data Analyst", line: 3 }] },
    { name: "Company C", positions: [{ role: "Data Analyst", line: 1 }, { role: "Technical Writer", line: 2 }, { role: "UX Designer", line: 3 }] },
    { name: "Company D", positions: [{ role: "Test Engineer", line: 1 }, { role: "Product Manager", line: 2 }, { role: "UX Designer", line: 3 }] },
    { name: "Company E", positions: [{ role: "UX Designer", line: 1 }, { role: "Data Analyst", line: 2 }, { role: "Software Engineer", line: 3 }] },
    { name: "Company F", positions: [{ role: "Product Manager", line: 1 }, { role: "Test Engineer", line: 2 }, { role: "UX Designer", line: 3 }] },
    { name: "Company G", positions: [{ role: "Software Engineer", line: 1 }, { role: "Data Analyst", line: 2 }, { role: "Product Manager", line: 3 }] },
    { name: "Company H", positions: [{ role: "Data Analyst", line: 1 }, { role: "UX Designer", line: 2 }, { role: "Software Engineer", line: 3 }] },
];

export default function FloorPlan({ appliedRoles, showApplied }: Props) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(150px, 1fr))", // 固定两列，最小 150px 自动缩小
                gap: "20px 40px",
                justifyContent: "center",
                width: "100%",
            }}
        >
            {booths.map((booth, index) => {
                const isLeftColumn = index % 2 === 0;
                return (
                    <div
                        key={booth.name}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "16px",
                            backgroundColor: "#fff",
                            minHeight: "120px",
                        }}
                    >
                        {isLeftColumn && (
                            <>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", fontWeight: "bold", marginRight: "16px" }}>
                                    <span>{booth.name}</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                                    {booth.positions.map((pos) => {
                                        const isApplied = appliedRoles.some(
                                            (ar) => ar.company === booth.name && ar.role === pos.role
                                        );
                                        return (
                                            <div
                                                key={pos.role}
                                                style={{
                                                    padding: "8px",
                                                    backgroundColor: showApplied && isApplied ? "#b7241f" : "#f3f3f3",
                                                    width: "100%",
                                                    textAlign: "center",
                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                {pos.role} (Line {pos.line})
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                        {!isLeftColumn && (
                            <>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                                    {booth.positions.map((pos) => {
                                        const isApplied = appliedRoles.some(
                                            (ar) => ar.company === booth.name && ar.role === pos.role
                                        );
                                        return (
                                            <div
                                                key={pos.role}
                                                style={{
                                                    padding: "8px",
                                                    backgroundColor: showApplied && isApplied ? "#b7241f" : "#f3f3f3",
                                                    width: "100%",
                                                    textAlign: "center",
                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                {pos.role} (Line {pos.line})
                                            </div>
                                        );
                                    })}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", fontWeight: "bold", marginLeft: "16px" }}>
                                    <span>{booth.name}</span>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}