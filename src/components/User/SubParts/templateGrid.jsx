import TemplateCards from "./templates";
import template1 from "../../../assests/images/template1.png";
import template2 from "../../../assests/images/template2.png";
import template3 from "../../../assests/images/template3.png";
import template4 from "../../../assests/images/template4.png";
import  { useState } from "react";


function TemplateGrid({ selectedTemplate, setSelectedTemplate }) {
  const templates = [
    { image: template1, title: "template1" },
    { image: template2, title: "template2" },
    { image: template3, title: "template3" },
    { image: template4, title: "template4" }
  ];

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-center mb-4">Choose a Template</h2>
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex gap-6 min-w-fit justify-start px-4">
          {templates.map((template, index) => (
            <TemplateCards
              key={index}
              image={template.image}
              title={template.title}
              isSelected={selectedTemplate === template.title}
              onClick={() => setSelectedTemplate(template.title)} // ✅ update title in formData
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateGrid;