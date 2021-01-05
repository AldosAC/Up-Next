module.exports.getExpire = () => {
  const lifespan = 172800;

  return Math.round(Date.now() / 1000 + lifespan);
}