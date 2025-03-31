module.exports = {
  default:
    "--require-module ts-node/register --require tests/support/world.ts --require tests/support/hooks.ts --require tests/steps/**/*.ts tests/features/**/*.feature",
};
