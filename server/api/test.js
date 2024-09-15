const { TEST_KEY } = useRuntimeConfig();

export default defineEventHandler(function (event) {
  return { "you got the test key": "here it is", TEST_KEY };
});

// access via "localhost:3000/api/test"
// these routes are backend, so we can use API keys, etc... from the ENV file
