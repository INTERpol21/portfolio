import React, { useState, useEffect } from "react";

type UseLocalStorageResult<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const useLocalStorage = <T extends unknown>(key:string, defaultValue:T): UseLocalStorageResult<T> => {
  const [value, setValue] = useState<T>(() => {
    let currentValue: T;

    try {
      currentValue = JSON.parse(
          localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
