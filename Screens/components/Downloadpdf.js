import RNFetchBlob from 'rn-fetch-blob'


const RNFS = require('react-native-fs');

export default function Downloadpdf(props) {
    console.log('donload pdf file me porps agya', props)
    console.log('rnfs details', RNFS)

    // const pdflink = props.link;

    // try{
    //     const DownloadFileOptions = {
    //         fromUrl: pdflink,          // URL to download file from
    //         toFile: RNFS.DownloadDirectoryPath,          // Local filesystem path to save the file to
    //         // headers?: Headers,        // An object of headers to be passed to the server
    //         // background?: boolean,     // Continue the download in the background after the app terminates (iOS only)
    //         // discretionary?: boolean,  // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
    //         // cacheable?: boolean,      // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
    //         // progressInterval?: number,
    //         // progressDivider?: number,
    //         // begin?: (res: DownloadBeginCallbackResult) => void,
    //         // progress?: (res: DownloadProgressCallbackResult) => void,
    //         // resumable?: () => void,    // only supported on iOS yet
    //         // connectionTimeout?: number, // only supported on Android yet
    //         // readTimeout?: number,      // supported on Android and iOS
    //         // backgroundTimeout?: number // Maximum time (in milliseconds) to download an entire resource (iOS only, useful for timing out background downloads)
    //       }
    //     RNFS.downloadFile(DownloadFileOptions);
    // } 
    // catch(err) {
    //     console.log('download error',err)
    // }
    try {
        const pdflink = props.link;
        const date = new Date();
        const { config, fs } = RNFetchBlob
        console.log('RNFetchBlob1', RNFetchBlob)
        let PictureDir = fs.dirs.DownloadDir // this is the pictures directory. You can check the available directories in the wiki.
        const android = RNFetchBlob.android
        let options = {
            fileCache: false,
            indicator: true,
            overwrite: true,
            addAndroidDownloads: {
                useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
                notification: true,
                path: PictureDir, // this is the path where your downloaded file will live in
                description: 'A PDFfile.',
                mime: 'application/pdf',
                overwrite: true,
                mediaScannable: false,
                title: 'pdf format file',
            }
        }
        RNFetchBlob.config(options).fetch('GET', pdflink).then((res) => {
            console.log('rnfetchBlob', res)
            console.log('download pdf ho gyi hai', res.path())
        })

    }
    catch (err) {
        alert(err);
    }




}

