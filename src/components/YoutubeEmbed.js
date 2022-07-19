import PropTypes from 'prop-types';
import React from 'react';

export default function YoutubeEmbed({ url }) {
  return (
    <div className="video-responsive absolute top-[380px] right-[150px] changeA">
      <iframe
        className="w-[560px] h-[315px] rounded-lg"
        data-testid="video"
        src={ url }
        frameBorder="0"
        allow={ `accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture` }
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};
