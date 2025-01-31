import "./style.css";
import previewImage from "../../images/preview.webp";

const PreviewVideo = ({ title = "Sample title" }) => {
  return (
    <div className="previewContainer">
      <h4 className="previewTitle">{title}</h4>
      <video
        className="previewContent"
        controls
        playsinline
        poster={previewImage}
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/tripimagestore-57c72.appspot.com/o/videos%2FWedding%2FSarita%20Suneet%20Prewedding.mp4?alt=media&token=48050b0e-7208-4d30-a0a8-2eb72054e6db"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PreviewVideo;
