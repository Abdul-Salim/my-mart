import { AtomEffect, DefaultValue } from "recoil";

const localStorageEffect =
  (key: string): AtomEffect<any> =>
  ({ setSelf, onSet }) => {
    // Check if window and localStorage are available (only in browser)
    if (typeof window !== "undefined") {
      const savedValue = localStorage?.getItem(key);

      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
          localStorage?.removeItem(key);
        } else {
          localStorage?.setItem(key, JSON.stringify(newValue));
        }
      });
    }
  };

export default localStorageEffect;
