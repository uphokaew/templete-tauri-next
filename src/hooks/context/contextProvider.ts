import React, { useContext } from 'react';

export function useContextProvider<T>(context: React.Context<T>) {
    const useProvider = () => {
        const ctx = useContext(context);
        if (!ctx)
            throw new Error(
                'useContextProvider must be used within a Provider',
            );
        return ctx;
    };

    return [useProvider, context.Provider] as const;
}
