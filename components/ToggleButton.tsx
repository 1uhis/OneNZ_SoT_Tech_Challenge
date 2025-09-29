"use client";

type Props = {
    isActive: boolean;
    onToggle: () => void;
};

export default function ToggleButton({ isActive, onToggle }: Props) {
    return (
        <button
            onClick={onToggle}
            style={{
                backgroundColor: isActive ? "#ef4444" : "#ccc",
                color: "white",
                padding: "12px 24px",
                border: "none",
                cursor: "pointer",
                marginBottom: "24px",
                transition: "background-color 0.3s",
            }}
        >
            {isActive ? "Hide My Roles" : "Show My Roles"}
        </button>
    );
}