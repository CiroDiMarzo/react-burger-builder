import React from 'react';

export default React.createContext({
    isModalOpen: false,
    startOrder: () => {},
    cancelOrder: () => {}
})