import React, { useCallback} from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Glowing = () => {
    const particlesInit = useCallback( async engine => {
        console.log(engine)
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback ( async container => {
        console.log(container)
    }, [])

    const particlesOptions = {
        background:{
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
  emitters: {
    size: {
      width: 100,
      height: 0
    },
    position: {
      x: 50,
      y: 100
    },
    rate: {
      delay: 0.1,
      quantity: 2
    }
  },
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1
    },
    size: {
      value: { min: 0.1, max: 20 },
      animation: {
        enable: true,
        speed: 5,
        sync: true,
        startValue: "min",
        destroy: "max"
      }
    },
    move: {
      enable: true,
      speed: 5,
      direction: "top",
      outModes: "destroy"
    }
  },
      }
    return (
        <>
            <Particles 
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
            />
        </>
    );
};



export default Glowing;