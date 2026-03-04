const express = require('express');
const router = express.Router();
const Organization = require('../models/Organization');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { cache } = require('../middleware/cache');
const { rateLimit } = require('../middleware/rateLimit');
const { audit } = require('../middleware/audit');

/**
 * @route GET /organizations
 * @description List all Organization
 * @access Private
 */
router.get('/organizations',
  authenticate,
  authorize('organization:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('organization.get'),
  async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const sort = req.query.sort || '-createdAt';
      const filter = {};

      if (req.query.blkcbhws) {
        filter.blkcbhws = req.query.blkcbhws;
      }
      if (req.query.spqqmcgj) {
        filter.spqqmcgj = req.query.spqqmcgj;
      }
      if (req.query.qfyplkpv) {
        filter.qfyplkpv = req.query.qfyplkpv;
      }
      if (req.query.tismuljs) {
        filter.tismuljs = req.query.tismuljs;
      }

      const items = await Organization.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      const total = await Organization.countDocuments(filter);
      res.json({ data: items, total, page, limit });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /organizations/:id
 * @description Get by ID Organization
 * @access Private
 */
router.get('/organizations/:id',
  authenticate,
  authorize('organization:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('organization.get'),
  async (req, res, next) => {
    try {
      const item = await Organization.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Organization not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /organizations
 * @description Create Organization
 * @access Private
 */
router.post('/organizations',
  authenticate,
  authorize('organization:post'),
  validate('organization.post'),
  rateLimit({ max: 100 }),
  audit('organization.post'),
  async (req, res, next) => {
    try {
      const item = new Organization(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PUT /organizations/:id
 * @description Update Organization
 * @access Private
 */
router.put('/organizations/:id',
  authenticate,
  authorize('organization:put'),
  validate('organization.put'),
  rateLimit({ max: 100 }),
  audit('organization.put'),
  async (req, res, next) => {
    try {
      const item = await Organization.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!item) return res.status(404).json({ error: 'Organization not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PATCH /organizations/:id
 * @description Partial update Organization
 * @access Private
 */
router.patch('/organizations/:id',
  authenticate,
  authorize('organization:patch'),
  validate('organization.patch'),
  rateLimit({ max: 100 }),
  audit('organization.patch'),
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
 * @route DELETE /organizations/:id
 * @description Delete Organization
 * @access Private
 */
router.delete('/organizations/:id',
  authenticate,
  authorize('organization:delete'),
  rateLimit({ max: 100 }),
  audit('organization.delete'),
  async (req, res, next) => {
    try {
      const item = await Organization.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Organization not found' });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /organizations/:id/stats
 * @description Get stats Organization
 * @access Private
 */
router.get('/organizations/:id/stats',
  authenticate,
  authorize('organization:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('organization.get'),
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
 * @route POST /organizations/:id/duplicate
 * @description Duplicate Organization
 * @access Private
 */
router.post('/organizations/:id/duplicate',
  authenticate,
  authorize('organization:post'),
  validate('organization.post'),
  rateLimit({ max: 100 }),
  audit('organization.post'),
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
 * @route POST /organizations/bulk
 * @description Bulk create Organization
 * @access Private
 */
router.post('/organizations/bulk',
  authenticate,
  authorize('organization:post'),
  validate('organization.post'),
  rateLimit({ max: 100 }),
  audit('organization.post'),
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
 * @route DELETE /organizations/bulk
 * @description Bulk delete Organization
 * @access Private
 */
router.delete('/organizations/bulk',
  authenticate,
  authorize('organization:delete'),
  rateLimit({ max: 100 }),
  audit('organization.delete'),
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
 * @route GET /organizations/search
 * @description Search Organization
 * @access Private
 */
router.get('/organizations/search',
  authenticate,
  authorize('organization:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('organization.get'),
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
 * @route GET /organizations/export
 * @description Export Organization
 * @access Private
 */
router.get('/organizations/export',
  authenticate,
  authorize('organization:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('organization.get'),
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
 * @route POST /organizations/import
 * @description Import Organization
 * @access Private
 */
router.post('/organizations/import',
  authenticate,
  authorize('organization:post'),
  validate('organization.post'),
  rateLimit({ max: 100 }),
  audit('organization.post'),
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