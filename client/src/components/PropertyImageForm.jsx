<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { useSelector } from "react-redux";
=======
import { useState } from "react";
import { FormWrapper } from "./FormWrapper";

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const PropertyImageForm = ({ imageUrls, updateFields, ...data }) => {
 
=======

const PropertyImageForm = (prevData) => {
  const { imageUrls, updateFields, ...data } = prevData;
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a

  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

console.log(imageUrls)
 

  const handleImageSubmit = (e) => {
=======

  const [files, setFiles] = useState([]);

  console.log(imageUrls);

  const handleImageSubmit = (e) => {
    e.preventDefault();
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
    if (files.length > 0 && files.length + imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          updateFields({ ...data, imageUrls: [...imageUrls, ...urls] });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
<<<<<<< HEAD
          console.log(err)
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
=======
          console.log(err);
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
          setError(err)
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    // setFormData({
    //   ...formData,
    //   imageUrls: imageUrls.filter((_, i) => i !== index),
    // });
    updateFields({
      ...data,
      imageUrls: imageUrls.filter((_, i) => i !== index),
    });
  };
  return (
<<<<<<< HEAD
    <FormWrapper title="Property Images" subTitle="Please add images of the property for better clarity">
=======
    <FormWrapper
      title="Property Images"
      subTitle="Please add images of the property for better clarity"
    >
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
      <div className="flex flex-col flex-1 gap-4">
        <p className="font-semibold">
          Images:
          <span className="font-normal text-gray-600 ml-2">
            The first image will be the cover (max 6)
          </span>
        </p>
        <div className="flex gap-4">
          <input
            onChange={(e) => setFiles(e.target.files)}
            className="p-3 border border-gray-300 rounded w-full"
            type="file"
            id="images"
            accept="image/*"
            multiple
          />
          <button
            type="button"
            disabled={uploading}
            id="uploadbtn"
            onClick={handleImageSubmit}
            className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
        <p className="text-red-700 text-sm">
          {imageUploadError && imageUploadError}
        </p>
        {imageUrls.length > 0 &&
          imageUrls.map((url, index) => (
            <div
              key={url}
              className="flex justify-between p-3 border items-center"
            >
              <img
                src={url}
                alt="listing image"
                className="w-20 h-20 object-contain rounded-lg"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
              >
                Delete
              </button>
            </div>
          ))}
<<<<<<< HEAD
        
=======

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
        {error && <p className="text-red-700 text-sm">{error}</p>}
      </div>
    </FormWrapper>
  );
};

export default PropertyImageForm;
