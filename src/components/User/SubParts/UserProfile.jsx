import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const [file, setFile] = useState(null);
    const [extractedText, setExtractedText] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");
    const navigate = useNavigate();

    // Restore extracted text from localStorage if page is refreshed
    useEffect(() => {
        const savedText = localStorage.getItem("resumeText");
        if (savedText) {
            setExtractedText(savedText);
            console.log("Restored text from localStorage:", savedText.substring(0, 100) + "...");
        }
    }, []);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setUploadError(""); // Clear any previous errors
        
        if (selectedFile) {
            console.log("File selected:", selectedFile.name, "Size:", selectedFile.size);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadError("Please select a file first");
            return;
        }

        setIsUploading(true);
        setUploadError("");

        const formData = new FormData();
        formData.append("resume", file);

        try {
            console.log("Starting upload for file:", file.name);
            
            const response = await axios.post(
                "http://localhost:5000/api/v1/resume/uploadResume",
                formData,
                {
                    headers: { 
                        "Content-Type": "multipart/form-data" 
                    },
                    timeout: 60000 // 60 second timeout for OCR processing
                }
            );

            console.log("Upload response:", response.data);

            const text = (response.data.text || "").trim();
            
            if (text) {
                setExtractedText(text);
                localStorage.setItem("resumeText", text);
                console.log("Text extracted successfully, length:", text.length);
                alert("Resume text extracted successfully!");
            } else {
                setUploadError("No text could be extracted from the file.");
                console.warn("Empty text extracted");
            }
        } catch (err) {
            console.error("Error uploading file:", err);
            
            let errorMessage = "Failed to upload or extract resume.";
            if (err.response) {
                errorMessage = err.response.data?.error || errorMessage;
            } else if (err.request) {
                errorMessage = "Network error - please check if the server is running.";
            }
            
            setUploadError(errorMessage);
        } finally {
            setIsUploading(false);
        }
    };

    const handleViewData = () => {
        if (extractedText) {
            navigate("/resumeData", { state: { extractedText } });
        } else {
            alert("No extracted text available");
        }
    };

    const handleClearData = () => {
        setExtractedText("");
        setFile(null);
        localStorage.removeItem("resumeText");
        setUploadError("");
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="50"
                        height="50"
                        fill="gray">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                </div>
            </div>

            <h2 className="text-xl font-semibold">Harsh Badhe</h2>
            <div className="border-b my-4"></div>

            {/* Profile Info */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                <div>
                    <p className="font-semibold">Email:</p>
                    <p>harshbadhe83@gmail.com</p>
                </div>
                <div>
                    <p className="font-semibold">Phone number:</p>
                    <p>9633584020</p>
                </div>
                <div>
                    <p className="font-semibold">Address:</p>
                    <p>Vrindavan Heights, Saswad</p>
                </div>
                <div>
                    <p className="font-semibold">Job title:</p>
                    <p>Full Stack Developer</p>
                </div>
                <div>
                    <p className="font-semibold">Experience:</p>
                    <p>Wipro, Google</p>
                </div>
                <div>
                    <p className="font-semibold">Education:</p>
                    <p>B.Tech in Computer Engineering</p>
                </div>
                <div>
                    <p className="font-semibold">City:</p>
                    <p>Pune</p>
                </div>
                <div>
                    <p className="font-semibold">Country:</p>
                    <p>India</p>
                </div>
            </div>

            {/* Error Display */}
            {uploadError && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {uploadError}
                </div>
            )}

            {/* File Info */}
            {file && (
                <div className="mt-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
                    Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </div>
            )}

            {/* Extraction Status */}
            {extractedText && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    ✅ Text extracted ({extractedText.length} characters)
                </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 items-center">
                <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                    Edit Profile
                </button>

                {/* Resume Upload */}
                <label className="bg-accent text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-700">
                    Choose Resume
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        className="hidden"
                        onChange={handleFileChange}
                        disabled={isUploading}
                    />
                </label>

                <button
                    onClick={handleUpload}
                    disabled={!file || isUploading}
                    className={`px-4 py-2 rounded-lg text-white ${
                        !file || isUploading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-700'
                    }`}
                >
                    {isUploading ? "Processing..." : "Upload & Extract"}
                </button>

                {/* Show only if text extracted */}
                {extractedText && (
                    <>
                        <button
                            onClick={handleViewData}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800"
                        >
                            View Extracted Data
                        </button>
                        
                        <button
                            onClick={handleClearData}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        >
                            Clear Data
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default UserProfile;