import { imageToBase64 } from '../dist';

imageToBase64('https://avatars.githubusercontent.com/u/34081591?v=4', (res) => {
    console.log(res)
}, 'image/png')
