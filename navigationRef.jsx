import { createRef } from 'react';

export const navigationRef = createRef();

// export const navigate = (name, params) => {
//     navigationRef.current?.navigate(name, params);
// };

export const navigate = (name, params) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
};

// export const goBack = () => {
//     navigationRef.current?.goBack();
// };


export const goBack = () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack();
    }
};