// src/components/ProfilePictureChanger.js
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { storage, fireDB } from "../../firebase/FirebaseConfig";
import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { CameraIcon } from "@heroicons/react/24/outline";

const ProfilePictureChanger = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Load the user's current profile picture
        const userDocRef = doc(fireDB, "users", currentUser.email);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setImageUrl(userDoc.data().profilePicture || "");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file && user) {
      setLoading(true); // Start loading during the upload process
      try {
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL);

        // Update Firestore with the new profile picture URL
        const userDocRef = doc(fireDB, "users", user.email);
        await setDoc(
          userDocRef,
          { profilePicture: downloadURL },
          { merge: true }
        );
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
      setLoading(false); // Stop loading after the upload process
    }
  };

  if (loading) {
    return <Spinner color="blue" />;
  }

  return (
    <div className="flex flex-col items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 border border-gray-300"
        />
      ) : (
        <div className="w-32 h-32 rounded-full mb-4 flex items-center justify-center bg-gray-100 border border-gray-300">
          <CameraIcon className="w-12 h-12 text-gray-500" />
        </div>
      )}
      <Typography variant="h6" color="blue-gray" className="mb-4">
        {imageUrl ? "Change Profile Picture" : "Upload Profile Picture"}
      </Typography>
      <Input type="file" onChange={handleFileChange} />
      <Button color="blue" onClick={handleUpload} className="mt-4">
        {imageUrl ? "Update Picture" : "Upload Picture"}
      </Button>
    </div>
  );
};

export default ProfilePictureChanger;
