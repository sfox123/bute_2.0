import React from "react";

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="youtube-icon" // Use the custom class
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * A responsive and stylish YouTube video player component for Next.js.
 * This version uses a separate CSS file for styling.
 *
 * @returns {JSX.Element} The rendered YouTube player component.
 */
const YoutubePlayer = () => {
  // Add 'dark' to the body or a parent element to enable dark mode
  // For example: document.body.classList.add('dark');
  return (
    // Main container to center the component on the page
    <div className="youtube-player-container">
      {/* Video card container with styling */}
      <div className="video-card">
        {/* Aspect ratio container for the video iframe */}
        <div className="video-aspect-ratio">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/GcM-igDQGTM?si=cKF3qnMkTpKLBpj6&autoplay=1&mute=1&loop=1&playlist=GcM-igDQGTM&controls=0&showinfo=0&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video information section */}
        <div className="video-info">
          <div className="video-title-container">
            <YouTubeIcon />
            <h2 className="video-title">
              BBC London: Hemel Hempstead's "Dutch-style Roundabout"
            </h2>
          </div>
          <p className="video-description">
            ©BBC 2025 - COPYRIGHT REMAINS WITH THE ORIGINAL OWNER AND IS USED
            FOR EDUCATIONAL & REFERENCE USE. Hemel Hempstead has a new £2m
            roundabout which gives priority to pedestrians and cyclists over
            motor vehicles. BBC London reporter Briohny Willams has a look and
            learns how to use the roundabout from a driver perspective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
