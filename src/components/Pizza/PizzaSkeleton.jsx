import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="103" cy="110" r="98" />
    <rect x="-1" y="219" rx="0" ry="0" width="210" height="40" />
    <rect x="8" y="276" rx="0" ry="0" width="191" height="99" />
    <rect x="8" y="397" rx="0" ry="0" width="78" height="36" />
    <rect x="108" y="394" rx="19" ry="19" width="107" height="39" />
  </ContentLoader>
);

export default PizzaSkeleton;
