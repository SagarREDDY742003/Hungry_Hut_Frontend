const cloudName = process.env.REACT_APP_CLOUD_NAME;
const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

export const uploadImageToCloudinary=async(file)=>{
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset",uploadPreset);
    data.append("cloud_name",cloudName);

    const res = await fetch(apiUrl, {
        method:"post",
        body:data
    });

    const fileData = await res.json();
    return fileData.url
}