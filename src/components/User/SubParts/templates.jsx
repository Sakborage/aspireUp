import { CheckCircle } from "lucide-react";

function TemplateCard({ image, title, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative w-60 h-100 bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-105 cursor-pointer ${
        isSelected ? "ring-4 ring-teal-500" : ""
      }`}
    >
      <img src={image} alt={title} className="w-full h-full object-contain rounded-xl" />
      {isSelected && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <CheckCircle className="text-green-500" size={24} />
        </div>
      )}
    </div>
  );
}

export default TemplateCard;
