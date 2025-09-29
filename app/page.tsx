"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "test" && password === "test") {
      localStorage.setItem("user", username);
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
        <img
          src="https://app.summeroftech.co.nz/assets/sot/square-logo-c5c3a0d0.svg"
          alt="Summer of Tech Logo"
          style={{ width: "350px", height: "350px" }}
        />
      </div>
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: "white",
          padding: "32px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          width: "384px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "26px",
        }}
      >
        <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "0" }}>
          Candidate log in
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "16px",
            width: "100%",
            border: "1px solid #ccc",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "16px",
            width: "100%",
            border: "1px solid #ccc",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#b7241f",
            color: "white",
            padding: "12px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}