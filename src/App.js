import VideoRecorder from 'react-video-recorder';

function App() {
    return (
        <div className="App">
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    // Do something with the video...
                    console.log('videoBlob', videoBlob)
                }}
            />
        </div>
    );
}

export default App;
