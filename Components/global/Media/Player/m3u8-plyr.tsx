import React, { FC } from 'react';
import React, { useLayoutEffect, useRef } from 'react';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { PlayerBox } from './styled';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import Hls from 'hls.js';

export const Player: FC<PlayerProps> = ({ src: srcProp }) => {
  const [src, setSrc] = React.useState(srcProp);

  React.useEffect(() => {
    setSrc(srcProp);
  }, [srcProp]);

  return (
    <PlayerBox>
      <AspectRatio ratio='16:9'>
    const PlyrComponent = () => {
    const video = useRef();
    const playerInstance = useRef();

    useLayoutEffect(() => {
        const source = 'https%3A//v.vrv.co/evs1/e8a946030fdb7cb0dadd5b715dab1bb2/assets/778fa7fb69bd5fee895f433654a5690b_%2C3649292.mp4%2C3649294.mp4%2C3649290.mp4%2C3649286.mp4%2C3649288.mp4%2C.urlset/master.m3u8%3FPolicy%3DeyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMxL2U4YTk0NjAzMGZkYjdjYjBkYWRkNWI3MTVkYWIxYmIyL2Fzc2V0cy83NzhmYTdmYjY5YmQ1ZmVlODk1ZjQzMzY1NGE1NjkwYl8sMzY0OTI5Mi5tcDQsMzY0OTI5NC5tcDQsMzY0OTI5MC5tcDQsMzY0OTI4Ni5tcDQsMzY0OTI4OC5tcDQsLnVybHNldC9tYXN0ZXIubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY0Mjg3NzI3NH19fV19%26Signature%3Dkf3d15GV6BjaqzcvUt95rPq46yedXpZ13QtkB5f42SjZkUUI3W81eSJ9FoIZnQVQNERMUt7HwIsBTwMmwd~HbiOh2jri6z1hxflsC97~xgYeHlR~iLK4lMI5OhUnEyHYZhAQprS0nN4YhtyKro2tNrSur3~m81NuldIh-y23xWwfWERb4igkRvUnl4Bfky3UzaGWT2wKrSmYWy3u4b4Xd7Gdmn5jJRkOwdhImIEKXDJ8sDQzBnwYvDz81f-zMI-rpub-fRVcWdE79e6XBMLZN9lHMiMEW1Ju5PW78DtcSOzYLzrlxjbuFP5jlTt3yd2czv8DC~lx8q7aCKDjm3oSdg__%26Key-Pair-Id%3DAPKAJMWSQ5S7ZB3MF5VA';
        playerInstance.current = new Plyr(video.current);
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video.current);
        window.hls = hls;
        return () => {
            playerInstance.current.destroy();
        };
    }, []);

    return <video id="player" ref={video} className="video-js" autoPlay={true} preload="auto"></video>;
};

export default PlyrComponent;
      </AspectRatio>
    </PlayerBox>
  );
};

type PlayerProps = {
  src: string;
};
