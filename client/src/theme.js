// color design tokens export
export const tokensDark = {
  grey: {
    0: "#f9f9f9", // manually adjusted
    10: "#f2f2f2", // manually adjusted
    50: "#eaeaea", // manually adjusted
    100: "#d1d1d1",
    200: "#b3b3b3",
    300: "#969696",
    400: "#7a7a7a",
    500: "#5e5e5e",
    600: "#474747",
    700: "#343434",
    800: "#202020",
    900: "#0d0d0d",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // vibrant purple-blue
    100: "#e1e2f2",
    200: "#c3c5e5",
    300: "#a4a8d8",
    400: "#868bcb",
    500: "#686ebd",
    600: "#525899", // manually adjusted
    700: "#3d4275",
    800: "#282d51",
    900: "#14162c",
  },
  secondary: {
    // teal green
    50: "#e0f7f7", // manually adjusted
    100: "#c1eff0",
    200: "#a2e6e8",
    300: "#83dee1",
    400: "#64d6d9",
    500: "#45ced2",
    600: "#379fa6",
    700: "#2a7079",
    800: "#1c484d",
    900: "#0e2426",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}

export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[300],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensLight.primary[400],
              light: tokensLight.primary[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensLight.secondary[600],
              light: tokensLight.secondary[300],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensLight.grey[0],
              alt: tokensLight.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
