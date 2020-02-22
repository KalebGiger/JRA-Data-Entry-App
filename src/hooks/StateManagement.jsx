import { useCallback } from 'react';
/**
 * State helper functions for commonly used state operations
 */

export function useStateHelpers() {
    /**
    * Updates key in the state with the passed in value
    */
    const updateStateByKey = useCallback((key, value, callback) => {
        callback(prevState => {
            let newState = { ...prevState };
            newState[key] = value;
            return newState;
        });
    }, []);

    /**
     * Deletes a value in the state by the passed in key
     * If the object has no keys after the deletion, it is set to null
     */
    const deleteKey = useCallback((key, callback) => {
        callback(prevState => {
            let newState = { ...prevState };
            delete newState[key];
            return !Object.keys(newState).length ? null : newState;
        });
    }, []);

    /**
     * adds key to a new set object 
     */
    const addKeyToSet = useCallback((key, callback) => {
        callback(prevStateSet => {
            let newStateSet = new Set(prevStateSet);
            newStateSet.add(key);
            return newStateSet;
        });
    }, []);

    /**
     * deletes key from a new set object
     */
    const deleteKeyFromSet = useCallback((key, callback) => {
        callback(prevStateSet => {
            let newStateSet = new Set(prevStateSet);
            newStateSet.delete(key);
            return newStateSet;
        });
    }, []);

    return {
        updateStateByKey,
        deleteKey,
        addKeyToSet,
        deleteKeyFromSet,
    };


}
