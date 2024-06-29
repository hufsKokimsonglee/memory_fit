import React, { useEffect, useRef, useState } from "react";
import * as tmPose from "@teachablemachine/pose";

const PoseModel = () => {
  const URL = "http://127.0.0.1:5000/";
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const labelContainerRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      // load the model and metadata
      const loadedModel = await tmPose.load(modelURL, metadataURL);
      setModel(loadedModel);
      setMaxPredictions(loadedModel.getTotalClasses());

      // Convenience function to setup a webcam
      const size = 200;
      const flip = true; // whether to flip the webcam
      const webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
      await webcam.setup(); // request access to the webcam
      await webcam.play();
      window.requestAnimationFrame(loop);

      webcamRef.current = webcam;
      const canvas = canvasRef.current;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      labelContainerRef.current.innerHTML = "";
      for (let i = 0; i < loadedModel.getTotalClasses(); i++) {
        // and class labels
        labelContainerRef.current.appendChild(document.createElement("div"));
      }

      const loop = async () => {
        webcam.update(); // update the webcam frame
        await predict(loadedModel, webcam, ctx);
        window.requestAnimationFrame(loop);
      };
    };

    init();
  }, []);

  const predict = async (model, webcam, ctx) => {
    // Prediction #1: run input through posenet
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainerRef.current.childNodes[i].innerHTML = classPrediction;
    }

    // finally draw the poses
    drawPose(pose, ctx);
  };

  const drawPose = (pose, ctx) => {
    if (webcamRef.current.canvas) {
      ctx.drawImage(webcamRef.current.canvas, 0, 0);
      // draw the keypoints and skeleton
      if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  return (
    <div>
      <div>Teachable Machine Pose Model</div>
      <div>
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
      <div id="label-container" ref={labelContainerRef}></div>
    </div>
  );
};

export default PoseModel;
