import React, { FC } from 'react';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { PlayerBox } from './styled';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

export const Player: FC<PlayerProps> = ({ src: srcProp }) => {
  const [src, setSrc] = React.useState(srcProp);

  React.useEffect(() => {
    setSrc(srcProp);
  }, [srcProp]);

  return (
    <PlayerBox>
      <AspectRatio ratio='16:9'>
        <Plyr
		source={{
			type: "video",
			  sources: [{ src:src, type:'video/mp4' }],
			}}
	/>
      </AspectRatio>
    </PlayerBox>
  );
};

type PlayerProps = {
  src: string;
};
