const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { cache } = require('../middleware/cache');
const { rateLimit } = require('../middleware/rateLimit');
const { audit } = require('../middleware/audit');

/**
 * @route GET /tasks
 * @description List all Task
 * @access Private
 */
router.get('/tasks',
  authenticate,
  authorize('task:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('task.get'),
  async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const sort = req.query.sort || '-createdAt';
      const filter = {};

      if (req.query.kwxjebak) {
        filter.kwxjebak = req.query.kwxjebak;
      }
      if (req.query.irzswtuv) {
        filter.irzswtuv = req.query.irzswtuv;
      }
      if (req.query.jiqbpbtw) {
        filter.jiqbpbtw = req.query.jiqbpbtw;
      }
      if (req.query.ncnkdxvc) {
        filter.ncnkdxvc = req.query.ncnkdxvc;
      }
      if (req.query.fthtkzjs) {
        filter.fthtkzjs = req.query.fthtkzjs;
      }

      const items = await Task.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      const total = await Task.countDocuments(filter);
      res.json({ data: items, total, page, limit });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /tasks/:id
 * @description Get by ID Task
 * @access Private
 */
router.get('/tasks/:id',
  authenticate,
  authorize('task:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('task.get'),
  async (req, res, next) => {
    try {
      const item = await Task.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Task not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /tasks
 * @description Create Task
 * @access Private
 */
router.post('/tasks',
  authenticate,
  authorize('task:post'),
  validate('task.post'),
  rateLimit({ max: 100 }),
  audit('task.post'),
  async (req, res, next) => {
    try {
      const item = new Task(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PUT /tasks/:id
 * @description Update Task
 * @access Private
 */
router.put('/tasks/:id',
  authenticate,
  authorize('task:put'),
  validate('task.put'),
  rateLimit({ max: 100 }),
  audit('task.put'),
  async (req, res, next) => {
    try {
      const item = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!item) return res.status(404).json({ error: 'Task not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PATCH /tasks/:id
 * @description Partial update Task
 * @access Private
 */
router.patch('/tasks/:id',
  authenticate,
  authorize('task:patch'),
  validate('task.patch'),
  rateLimit({ max: 100 }),
  audit('task.patch'),
  async (req, res, next) => {
    try {
      // TODO: implement Partial update
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route DELETE /tasks/:id
 * @description Delete Task
 * @access Private
 */
router.delete('/tasks/:id',
  authenticate,
  authorize('task:delete'),
  rateLimit({ max: 100 }),
  audit('task.delete'),
  async (req, res, next) => {
    try {
      const item = await Task.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Task not found' });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /tasks/:id/stats
 * @description Get stats Task
 * @access Private
 */
router.get('/tasks/:id/stats',
  authenticate,
  authorize('task:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('task.get'),
  async (req, res, next) => {
    try {
      // TODO: implement Get stats
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /tasks/:id/duplicate
 * @description Duplicate Task
 * @access Private
 */
router.post('/tasks/:id/duplicate',
  authenticate,
  authorize('task:post'),
  validate('task.post'),
  rateLimit({ max: 100 }),
  audit('task.post'),
  async (req, res, next) => {
    try {
      // TODO: implement Duplicate
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /tasks/bulk
 * @description Bulk create Task
 * @access Private
 */
router.post('/tasks/bulk',
  authenticate,
  authorize('task:post'),
  validate('task.post'),
  rateLimit({ max: 100 }),
  audit('task.post'),
  async (req, res, next) => {
    try {
      // TODO: implement Bulk create
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route DELETE /tasks/bulk
 * @description Bulk delete Task
 * @access Private
 */
router.delete('/tasks/bulk',
  authenticate,
  authorize('task:delete'),
  rateLimit({ max: 100 }),
  audit('task.delete'),
  async (req, res, next) => {
    try {
      // TODO: implement Bulk delete
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /tasks/search
 * @description Search Task
 * @access Private
 */
router.get('/tasks/search',
  authenticate,
  authorize('task:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('task.get'),
  async (req, res, next) => {
    try {
      // TODO: implement Search
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /tasks/export
 * @description Export Task
 * @access Private
 */
router.get('/tasks/export',
  authenticate,
  authorize('task:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('task.get'),
  async (req, res, next) => {
    try {
      // TODO: implement Export
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /tasks/import
 * @description Import Task
 * @access Private
 */
router.post('/tasks/import',
  authenticate,
  authorize('task:post'),
  validate('task.post'),
  rateLimit({ max: 100 }),
  audit('task.post'),
  async (req, res, next) => {
    try {
      // TODO: implement Import
      res.json({ message: 'Not implemented yet', todo: true });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;