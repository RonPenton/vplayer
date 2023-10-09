import React from 'react';
import VideoJS, { VideoJSPlayer } from './VideoJS'

const App = () => {
    const playerRef = React.useRef<VideoJSPlayer>(null);

    const videoJsOptions = {
        autoplay: false,
        controls: false,
        responsive: true,
        fluid: true,
        sources: [{
            src: '/video',
            type: 'video/mp4'
        }]
    };

    const onPlay = () => {
        const player = playerRef.current;
        player?.play();
    }

    const onEnd = (player: VideoJSPlayer) => {
        player.play();
    }

    const handlePlayerReady = (player: VideoJSPlayer) => {
        (playerRef as any).current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
        });

        player.on('dispose', () => {
        });

        player.on('ended', () => {
            onEnd(player);
        });
    };

    return (
        <>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            <div className="custom-overlay">
                <button onClick={onPlay}>My Custom Button</button>
            </div>
        </>
    );
};

export default App;
