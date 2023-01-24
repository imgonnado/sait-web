import { useState } from "react";
import styles from "./PictureUpload.module.scss";

interface PictureUploadProps {
  disabled?: boolean;
}

function PictureUpload({ disabled = false }: PictureUploadProps) {
  const [images, setImages] = useState("");

  const handlePreview = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const url = URL.createObjectURL(targetFiles[0]);
    setImages(url);
  };

  return (
    <div className={styles.imageUploadArea}>
      <div className={styles.preview}>
        {images !== "" && <img src={images} alt="" />}
      </div>
      <input
        type="file"
        accept="image/*"
        id="imgUpload"
        className={styles.uploadInput}
        onChange={handlePreview}
        disabled={disabled}
      />
      <label htmlFor="imgUpload" className={styles.btnUpload}>
        사진추가
      </label>
    </div>
  );
}

export default PictureUpload;
