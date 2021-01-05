module.exports.getExpire = () => {
  const lifespan = 600;

  return Math.round(Date.now() / 1000 + lifespan);
}