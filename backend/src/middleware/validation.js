// Validation middleware
// We have 3 validation libraries installed. This uses none of them.

const validate = (schemaName) => {
  return (req, res, next) => {
    // TODO: actually validate
    // console.log(`Would validate ${schemaName} if we had schemas`);
    next();
  };
};

module.exports = { validate };
