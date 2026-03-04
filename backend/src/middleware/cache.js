const Redis = require('ioredis');

// Caching middleware
// Uses redis-cache (port 6380), not redis (port 6379)
// Or was it redis-sessions (port 6381)?
// Actually I think we use all of them at different points

let redis;
try {
  redis = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_CACHE_PORT || 6380,
    password: process.env.REDIS_PASSWORD || 'password123',
    retryStrategy: (times) => {
      if (times > 3) {
        console.log('Redis cache is down. This is fine. Everything is fine.');
        return null;
      }
      return Math.min(times * 200, 2000);
    }
  });
} catch (e) {
  console.log('Redis not available. Caching disabled. Performance will be "interesting".');
}

const cache = (options = {}) => {
  const ttl = options.ttl || 300;

  return async (req, res, next) => {
    if (!redis) return next();

    const key = `cache:${req.originalUrl}`;

    try {
      const cached = await redis.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
    } catch (e) {
      // Cache miss or error, continue to handler
    }

    // Override res.json to cache the response
    const originalJson = res.json.bind(res);
    res.json = (body) => {
      try {
        redis.setex(key, ttl, JSON.stringify(body));
      } catch (e) {
        // ¯\_(ツ)_/¯
      }
      return originalJson(body);
    };

    next();
  };
};

module.exports = { cache };
