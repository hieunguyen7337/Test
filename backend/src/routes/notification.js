const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { cache } = require('../middleware/cache');
const { rateLimit } = require('../middleware/rateLimit');
const { audit } = require('../middleware/audit');

/**
 * @route GET /notifications
 * @description List all Notification
 * @access Private
 */
router.get('/notifications',
  authenticate,
  authorize('notification:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('notification.get'),
  async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const sort = req.query.sort || '-createdAt';
      const filter = {};

      if (req.query.bdoaqama) {
        filter.bdoaqama = req.query.bdoaqama;
      }
      if (req.query.bsnzitll) {
        filter.bsnzitll = req.query.bsnzitll;
      }
      if (req.query.wkavztzg) {
        filter.wkavztzg = req.query.wkavztzg;
      }

      const items = await Notification.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      const total = await Notification.countDocuments(filter);
      res.json({ data: items, total, page, limit });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /notifications/:id
 * @description Get by ID Notification
 * @access Private
 */
router.get('/notifications/:id',
  authenticate,
  authorize('notification:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('notification.get'),
  async (req, res, next) => {
    try {
      const item = await Notification.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Notification not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /notifications
 * @description Create Notification
 * @access Private
 */
router.post('/notifications',
  authenticate,
  authorize('notification:post'),
  validate('notification.post'),
  rateLimit({ max: 100 }),
  audit('notification.post'),
  async (req, res, next) => {
    try {
      const item = new Notification(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PUT /notifications/:id
 * @description Update Notification
 * @access Private
 */
router.put('/notifications/:id',
  authenticate,
  authorize('notification:put'),
  validate('notification.put'),
  rateLimit({ max: 100 }),
  audit('notification.put'),
  async (req, res, next) => {
    try {
      const item = await Notification.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!item) return res.status(404).json({ error: 'Notification not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PATCH /notifications/:id
 * @description Partial update Notification
 * @access Private
 */
router.patch('/notifications/:id',
  authenticate,
  authorize('notification:patch'),
  validate('notification.patch'),
  rateLimit({ max: 100 }),
  audit('notification.patch'),
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
 * @route DELETE /notifications/:id
 * @description Delete Notification
 * @access Private
 */
router.delete('/notifications/:id',
  authenticate,
  authorize('notification:delete'),
  rateLimit({ max: 100 }),
  audit('notification.delete'),
  async (req, res, next) => {
    try {
      const item = await Notification.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Notification not found' });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /notifications/:id/stats
 * @description Get stats Notification
 * @access Private
 */
router.get('/notifications/:id/stats',
  authenticate,
  authorize('notification:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('notification.get'),
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
 * @route POST /notifications/:id/duplicate
 * @description Duplicate Notification
 * @access Private
 */
router.post('/notifications/:id/duplicate',
  authenticate,
  authorize('notification:post'),
  validate('notification.post'),
  rateLimit({ max: 100 }),
  audit('notification.post'),
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
 * @route POST /notifications/bulk
 * @description Bulk create Notification
 * @access Private
 */
router.post('/notifications/bulk',
  authenticate,
  authorize('notification:post'),
  validate('notification.post'),
  rateLimit({ max: 100 }),
  audit('notification.post'),
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
 * @route DELETE /notifications/bulk
 * @description Bulk delete Notification
 * @access Private
 */
router.delete('/notifications/bulk',
  authenticate,
  authorize('notification:delete'),
  rateLimit({ max: 100 }),
  audit('notification.delete'),
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
 * @route GET /notifications/search
 * @description Search Notification
 * @access Private
 */
router.get('/notifications/search',
  authenticate,
  authorize('notification:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('notification.get'),
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
 * @route GET /notifications/export
 * @description Export Notification
 * @access Private
 */
router.get('/notifications/export',
  authenticate,
  authorize('notification:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('notification.get'),
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
 * @route POST /notifications/import
 * @description Import Notification
 * @access Private
 */
router.post('/notifications/import',
  authenticate,
  authorize('notification:post'),
  validate('notification.post'),
  rateLimit({ max: 100 }),
  audit('notification.post'),
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