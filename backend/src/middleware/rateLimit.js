// Rate limiting middleware
// After the Great DDoS of 2023, we added rate limiting everywhere
// The limits are arbitrary numbers that felt right at the time

const rateLimitStore = new Map();

const rateLimit = (options = {}) => {
  const max = options.max || 100;
  const windowMs = options.windowMs || 60000;

  return (req, res, next) => {
    const key = req.ip + ':' + req.path;
    const now = Date.now();

    if (!rateLimitStore.has(key)) {
      rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    const record = rateLimitStore.get(key);
    if (now > record.resetAt) {
      record.count = 1;
      record.resetAt = now + windowMs;
      return next();
    }

    record.count++;
    if (record.count > max) {
      return res.status(429).json({
        error: 'Too many requests',
        retryAfter: Math.ceil((record.resetAt - now) / 1000),
        message: 'Please slow down. The hamsters powering our servers need a break.'
      });
    }

    next();
  };
};

// Clean up old entries every minute
// This is a memory leak if this never runs but it probably runs
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) {
      rateLimitStore.delete(key);
    }
  }
}, 60000);

module.exports = { rateLimit };
