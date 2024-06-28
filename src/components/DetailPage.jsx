import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/scss/components/_main.scss"; // SCSS 파일 경로
import PoseModel from "./PoseModel";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cameraViewRef = useRef(null);
  const [streamVideo, setStreamVideo] = useState(null);

  useEffect(() => {
    openCamera();
    return () => {
      closeCamera();
    };
  }, []);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setStreamVideo(stream);
        if (cameraViewRef.current) {
          cameraViewRef.current.srcObject = stream;
          cameraViewRef.current.onloadedmetadata = () => {
            cameraViewRef.current.play().catch((error) => {
              console.error("Error attempting to play video:", error);
            });
          };
        }
      })
      .catch((error) => {
        console.error("Error accessing media devices.", error);
      });
  };

  const closeCamera = () => {
    if (streamVideo) {
      streamVideo.getTracks().forEach((track) => track.stop());
      setStreamVideo(null);
    }
  };

  const handleCloseFullScreen = () => {
    navigate("/");
    closeCamera();
  };

  return (
    <div className="fullscreen-camera">
      <video id="cameraview" ref={cameraViewRef}></video>
      <PoseModel />
      <button className="close-btn" onClick={handleCloseFullScreen}>
        닫기
      </button>
    </div>
  );
};

export default DetailPage;
