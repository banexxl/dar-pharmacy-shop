export const tryParseArrayOfObjectsFromLocalStorage = (key: string) => {
          const input = localStorage.getItem(key);

          if (input === null) {
                    return null; // Key not found in local storage
          }

          try {
                    const parsedArray = JSON.parse(input);
                    if (Array.isArray(parsedArray)) {
                              return parsedArray;
                    }
          } catch (error) {
                    // Parsing failed or the parsed result is not an array
          }

          return null;
}
