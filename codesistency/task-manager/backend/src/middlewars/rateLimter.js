import rateLimit from "../config/upStash.js";

const rateLimter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("my-limit-key");
    if (!success) {
      return res.status(429).json({
        message: "Too many request please try later",
      });
    } 
    next();
  } catch (error) {
    console.log("Rate Limit Error", error);
    next(error);
  }
};
export default rateLimter;
