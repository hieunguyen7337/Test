// Audit logging middleware
// Legal said we need to log everything
// We log everything
// We have never once looked at the logs

const AuditLog = require('../models/AuditLog');

const audit = (action) => {
  return async (req, res, next) => {
    const startTime = Date.now();

    // Override res.end to capture response
    const originalEnd = res.end.bind(res);
    res.end = function(...args) {
      const duration = Date.now() - startTime;

      // Fire and forget - we don't await this because
      // we don't want audit logging to slow down responses
      // (it does anyway because MongoDB)
      AuditLog.create({
        action,
        userId: req.user?._id,
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        duration,
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        timestamp: new Date(),
      }).catch(err => {
        console.error('Audit log failed:', err.message);
        // The irony of the audit system failing silently is not lost on us
      });

      return originalEnd(...args);
    };

    next();
  };
};

module.exports = { audit };
