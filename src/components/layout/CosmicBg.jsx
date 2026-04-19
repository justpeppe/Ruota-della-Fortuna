import React from 'react';

/**
 * Global Cosmic Background Component.
 * Contains animated neon blobs that stay persistent across route changes.
 */
const CosmicBg = () => {
  return (
    <div className="cosmic-bg">
      <div className="cosmic-bg__blob cosmic-bg__blob--purple" />
      <div className="cosmic-bg__blob cosmic-bg__blob--blue" />
      <div className="cosmic-bg__blob cosmic-bg__blob--cyan" />
    </div>
  );
};

export default CosmicBg;
