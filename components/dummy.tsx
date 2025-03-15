"use client";
import React from "react";

const DummyContent = () => {
  return (
    <div className="p-10 space-y-8">
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i} className="text-lg">
          Toto je príklad odstavca číslo {i + 1}. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis nec justo eget urna tempus tempus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
      ))}
    </div>
  );
};

export default DummyContent;
