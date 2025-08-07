import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6 text-center">About Paste App</h2>
        <p className="text-lg leading-relaxed">
          <strong>Paste App</strong> is a lightweight and user-friendly note-taking application
          built for quickly capturing and organizing your thoughts. Whether it's ideas,
          reminders, or to-do lists, Paste App makes it easy to store and revisit them anytime.
        </p>

        <div className="mt-6 text-lg leading-relaxed">
          <p>
            This application runs entirely in your browser and utilizes{" "}
            <strong>Local Storage</strong> to save your notes securely on your device.
            That means:
          </p>
          <ul className="list-disc list-inside mt-4 ml-2">
            <li>No account or login is required</li>
            <li>Your notes never leave your device</li>
            <li>Fast and privacy-focused experience</li>
          </ul>
        </div>

        <p className="mt-6 text-lg">
          Paste App does not use any external database or server — it's perfect for personal use
          or jotting things down without worrying about data syncing or cloud storage.
        </p>

        <p className="mt-6 text-lg font-semibold">
          Start pasting. Stay organized. Stay private.
        </p>
      </div>
    </div>
  );
};

export default About;
