/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        dots: "url('./images/dots.png')",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      keyframes: {
        upAndDown: {
          "0%,100%": { top: "0px" },
          "50%": { top: "50px" },
        },
        newBounce: {
          "0%,10%,20%,50%,80%": { transform: "translateY(0)" },
          "40%,60%": { transform: "translateY(-20px)" },
        },
        moveLeft: {
          "50%": { left: "0", "border-radius": "0" },
          "100%": {
            left: "0",
            width: "50%",
            height: "100%",
            "border-radius": "0",
          },
        },
        moveRight: {
          "50%": { right: "0", "border-radius": "0" },
          "100%": {
            right: "0",
            "border-radius": "0",
            width: "50%",
            height: "100%",
          },
        },
        flash: {
          "0%,40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            width: "100%",
            height: "100%",
          },
        },
      },
      animation: {
        upAndDown: "upAndDown 3s linear infinite",
        newBounce: "newBounce 1s infinite",
        moveLeft: "moveLeft 0.5s linear forwards",
        moveRight: "moveRight 0.5s linear forwards",
        flash: "flash 0.5s",
      },
    },
  },
  plugins: [],
};
