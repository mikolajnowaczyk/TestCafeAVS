module.exports = {
  src: ["e2e/tests"],
  baseUrl: "https://angular-qa-recruitment-app.netlify.app/",
  browsers: ["chrome", "firefox", "edge"],
  screenshoots: {
    path: "e2e/artifacts/screenshots/",
    fullPage: false,
    thumbnails: false,
    takeOnfails: true,
  },
  videoPath: "e2e/artifacts/videos",
  videoOptions: {
    singleFile: false,
    failedOnly: true,
  },
  videoEncodingOptions: {
    framerate: 120,
    aspect: "16:9",
  },
  pageLoadTimeout: 60000,
  selectorTimeout: 200,
  pageNavigateAttempts: 3,
  pageLoadTimeout: 60000,
  concurrency: 1,
  speed: 1,
  cache: false,
  debugMode: false,
  stopOnFirstfail: false,
  // quarantineMode: {
  // attemptLimit: 1,
  // successThreshold: 1,
  // },
};
