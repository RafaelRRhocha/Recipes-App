import PropTypes from 'prop-types';
import React from 'react';

export default function YoutubeEmbed({ url }) {
  return (
    <div className="p-8 m-auto">
      <iframe
        className="w-[560px] h-[315px] rounded-lg changeWYT"
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
