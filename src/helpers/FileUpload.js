export const fileUpload = async (file) => {
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/duczcedgc/upload";
  const formData = new FormData();
  formData.append("upload_preset", "React-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};
