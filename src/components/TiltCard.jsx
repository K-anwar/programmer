import Tilt from 'react-parallax-tilt';

export default function TiltCard({ children, className }) {
  return (
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1.05}
      transitionSpeed={400}
      glareEnable={true}
      glareMaxOpacity={0.5}
      className={className}
    >
      {children}
    </Tilt>
  );
}