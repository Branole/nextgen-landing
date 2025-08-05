import React, { useState } from "react";

export default function Home() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [report, setReport] = useState(null);

  const handleFileChange = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (side === "front") setFrontImage(reader.result);
        else setBackImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Placeholder logic for grading
    setReport({
      corners: "8.5",
      centering: "9.0",
      edges: "8.0",
      surface: "8.5",
      overall: "8.5",
    });
  };

  return (
    <main style={{ minHeight: "100vh", padding: "2rem", backgroundColor: "#f3f4f6" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" }}>
        NextGen Grading
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
        <div style={{ padding: "1rem", borderRadius: "0.75rem", backgroundColor: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Upload Front Image</h2>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "front")} />
          {frontImage && (
            <img
              src={frontImage}
              alt="Front"
              style={{
                borderRadius: "0.75rem",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                marginTop: "1rem",
                maxWidth: "100%",
              }}
            />
          )}
        </div>

        <div style={{ padding: "1rem", borderRadius: "0.75rem", backgroundColor: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Upload Back Image</h2>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "back")} />
          {backImage && (
            <img
              src={backImage}
              alt="Back"
              style={{
                borderRadius: "0.75rem",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                marginTop: "1rem",
                maxWidth: "100%",
              }}
            />
          )}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
          }}
        >
          Analyze
        </button>
      </div>

      {report && (
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.5rem",
            backgroundColor: "white",
            borderRadius: "0.75rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            maxWidth: "40rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Pre-Grading Report</h3>
          <ul style={{ fontSize: "1.125rem", listStyle: "none", paddingLeft: "0" }}>
            <li><strong>Corners:</strong> {report.corners}</li>
            <li><strong>Centering:</strong> {report.centering}</li>
            <li><strong>Edges:</strong> {report.edges}</li>
            <li><strong>Surface:</strong> {report.surface}</li>
            <li><strong>Overall Grade:</strong> {report.overall}</li>
          </ul>
        </div>
      )}
    </main>
  );
}
