import { useState } from "react";
import styles from "./PictureUploadList.module.scss";

interface PictureUploadListProps {
  disabled?: boolean;
}

function PictureUploadList({ disabled = false }: PictureUploadListProps) {
  const [images, setImages] = useState<string[]>([]);
  const [imagesCounter, setImagesCounter] = useState(0);

  const handlePreview = (e: React.ChangeEvent) => {
    setImages([]);
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);

    if (targetFilesArray.length <= 3) {
      const selectedFiles: string[] = targetFilesArray.map(file => {
        return URL.createObjectURL(file);
      });
      setImagesCounter(targetFilesArray.length);
      setImages(prev => prev.concat(selectedFiles));
    } else {
      e.target.value = null;
    }
  };

  const handleClose = (e: any) => {
    let file = e.target.parentElement;
    let list = images.indexOf(file.id);

    images.splice(list, 1);
    setImagesCounter(imagesCounter - 1);
  };

  return (
    <div className={styles.imageUploadArea}>
      <div className={styles.imageUpload}>
        <input
          type="file"
          accept="image/*"
          id="imgUploadList"
          multiple
          className={styles.uploadInput}
          onChange={handlePreview}
          disabled={disabled}
        />
        <label htmlFor="imgUploadList" className={styles.btnUpload}>
          <span>{imagesCounter}</span>/3
        </label>
      </div>
      <div className={styles.previewList}>
        <ul>
          {images.map((url, i) => (
            <li key={url} id={url}>
              <div className={styles.img}>
                <img src={url} alt="" />
              </div>
              <button type="button" onClick={handleClose}>
                <span className="hiddenText">삭제</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PictureUploadList;
