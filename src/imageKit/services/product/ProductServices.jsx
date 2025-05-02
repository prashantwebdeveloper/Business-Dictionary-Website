import { imageKitConfig } from "../../ImageKitConfig";

// Product
// Get-Image
export const GetProductImageKit = async () => {
    try {
        const res = await imageKitConfig.listFiles({ path: '/products', limit: 10 });
        console.log("GetProduct-ImageKit++", res);

        if (res?.$ResponseMetadata?.statusCode === 200) {
            // const images = res?.files || [];
            return res;
        }
    } catch (err) { 
        console.error('Error-GetProduct-ImageKit--', err);
    }
}


// Post-Image
export const PostProductImageKit = async (imagefile) => {
    try {
        const fileName = `${imagefile.name}_${Date.now()}`;
        const imgParams = {
            file: imagefile,
            fileName: fileName,
            folder: '/products/',
            tags: [],
        }

        const res = await imageKitConfig.upload(imgParams);
        console.log("PostProduct-ImageKit++", res);

        if (res?.$ResponseMetadata?.statusCode === 200) {
            return res;
        }   
    } catch (err) {
        console.error('Error-PostProduct-ImageKit--', err);
    }
}


//  Delete-Image
export const DeleteProductImageKit = async (imageId) => {
    try {
        const res = await imageKitConfig.deleteFile(imageId);
        console.log("DeleteProduct-ImageKit++", res);

        if (res?.$ResponseMetadata?.statusCode === 204) {
            return res;
        }
    } catch (err) {
        console.error('Error-DeleteProduct-ImageKit--', err);
    }
}
