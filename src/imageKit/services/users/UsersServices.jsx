import { imageKitConfig } from "../../ImageKitConfig";

// Users
// Get-Image
export const GetUsersImageKit = async () => {
    try {
        const res = await imageKitConfig.listFiles({ path: '/users', limit: 10 });
        console.log("GetUsers-ImageKit++", res);

        if (res?.$ResponseMetadata?.statusCode === 200) {
            // const images = res?.files || [];
            return res;
        }
    } catch (err) {
        console.error('Error-GetUsers-ImageKit--', err);
    }
}


// Post-Image
export const PostUsersImageKit = async (imagefile) => {
    try {
        const fileName = `${imagefile.name}_${Date.now()}`;
        const imgParams = {
            file: imagefile,
            fileName: fileName,
            folder: '/users/',
            tags: [],
        }

        const res = await imageKitConfig.upload(imgParams);
        console.log("PostUsers-ImageKit++", res);

        if (res?.$ResponseMetadata?.statusCode === 200) {
            return res;
        }
    } catch (err) {
        console.error('Error-PostUsers-ImageKit--', err);
    }
}


//  Delete-Image
export const DeleteUsersImageKit = async (imageId) => {
    try {
        const res = await imageKitConfig.deleteFile(imageId);
        console.log("DeleteUsers-ImageKit++", res);

        if (res?.$ResponseMetadata?.statusCode === 204) {
            return res;
        }
    } catch (err) {
        console.error('Error-DeleteUsers-ImageKit--', err);
    }
}
