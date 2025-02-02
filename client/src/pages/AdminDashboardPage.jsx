import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboardPage() {

  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("add-new-package");
        }}
        style={{ margin: "10vw", height: "70px" }}
      >
        Add new Package Details
      </button>
      <button
        onClick={() => {
          navigate("edit-package");
        }}
        style={{ margin: "10vw", height: "70px" }}
      >
        Update Package Details
      </button>
    </div>
  );
}
