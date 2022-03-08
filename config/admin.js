module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13fd810bd6a4eeced003e5fc6496070c'),
  },
});
