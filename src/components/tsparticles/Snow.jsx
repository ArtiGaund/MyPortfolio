import React, { useCallback} from 'react';
import Particles from 'react-particles';
import { loadSnowPreset } from 'tsparticles-preset-snow';

const Snow = () => {
    const particlesInit = useCallback( async engine => {
        console.log(engine)
        await loadSnowPreset(engine)
    }, [])

    const particlesLoaded = useCallback( async container => {
        console.log(container)
    }, [])

    const particlesOptions = {
        preset: "snow",
        background: {
            color: {
                value: "#30193f",
            }
        }
    }
    return (
        <Particles 
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        />
    );
};

export default Snow;