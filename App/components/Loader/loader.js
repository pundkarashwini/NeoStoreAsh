import React from 'react';
import { ActivityIndicator } from 'react-native';


export const Loader = () => {

    return (
        <ActivityIndicator

            style={{ color: "#0000ff", position: 'absolute', zIndex: 10, marginTop: '60%', marginLeft: "35%" }}
            size="large" />
    );

}

