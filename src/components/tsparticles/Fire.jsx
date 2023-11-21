import React,{useCallback} from 'react';
import Particles from "react-particles";
import { loadFirePreset } from 'tsparticles-preset-fire';

const Fire = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadFirePreset(engine);
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
    const particlesOptions = {
        preset: "fire",
        // particles: {
        //     color: {
        //         value: [ "#0000ff", "#00ff00" ],
        //     },
        // }
       }
    return (
        <Particles 
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        />
    );
};



export default Fire;