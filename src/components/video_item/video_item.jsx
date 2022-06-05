import React, { memo } from 'react';
import styles from './video_item.module.css';

// video Item은 비디오가 클릭이 되거나 디스픓레이가 바뀌지 않는 이상 재렌더링 될 필요가 없으므로, memo함수를 써준다. 
const VideoItem = memo(({ video, video: {snippet}, onVideoClick, display }) =>   {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return( 
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <img  className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
                <div className={styles.metadata}>
                    <p className={styles.title} > {snippet.title} </p>
                    <p className={styles.channel} > {snippet.channelTitle} </p>
                </div>
            </div>
            
        </li>
    );
});

export default VideoItem;
