import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";


cloudinary.config({
    cloud_name: 'dg9ce2cer',
    api_key: '592326591569719',
    api_secret: 'uwXhy8PdL_ojDoxpQAB11KivXos',
    secure: true
})

/* eslint-disable no-undef */
describe('pruebas en fileUpload', () => { 
    test('should subir el archivo correctamente a cloudinary', async() => { 
        const imgUrl = 'https://st4.depositphotos.com/4749861/25333/i/450/depositphotos_253332156-stock-photo-landscapes-image-of-mt-fuji.jpg';

        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg')

        const url =  await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.webp', '');

        await cloudinary.api.delete_resources(['journal/'+imageId]);

     });

     test('should devolver error', async() => { 

        const file = new File([], 'foto.jpg')

        const url =  await fileUpload(file);

        expect(url).toBe(null)
      })
 })