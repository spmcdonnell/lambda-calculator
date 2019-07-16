import React, { useState } from 'react';
import SpecialButton from './SpecialButton';
import { specials } from '../../../data.js';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
    // STEP 2 - add the imported data to state
    const [special, setSpecial] = useState(specials);

    return (
        <div>
            {special.map((spec, index) => (
                <SpecialButton key={index} special={spec} />
            ))}
        </div>
    );
};

export default Specials;
