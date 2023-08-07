export const fileUpload = async(file) => {
    const cloudURL = 'https://api.cloudinary.com/v1_1/dg9ce2cer/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        })

        if(!resp.ok) throw new Error('No se puedo susbir imagen');
        const cloudResp = await resp.json();

        return cloudResp.secure_url;
    } catch (error) {
        return null
    }
}