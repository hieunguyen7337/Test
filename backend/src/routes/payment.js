const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { cache } = require('../middleware/cache');
const { rateLimit } = require('../middleware/rateLimit');
const { audit } = require('../middleware/audit');

/**
 * @route GET /payments
 * @description List all Payment
 * @access Private
 */
router.get('/payments',
  authenticate,
  authorize('payment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('payment.get'),
  async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const sort = req.query.sort || '-createdAt';
      const filter = {};

      if (req.query.fnitkqct) {
        filter.fnitkqct = req.query.fnitkqct;
      }
      if (req.query.ynfihloi) {
        filter.ynfihloi = req.query.ynfihloi;
      }
      if (req.query.xhaokfre) {
        filter.xhaokfre = req.query.xhaokfre;
      }
      if (req.query.gyodqlir) {
        filter.gyodqlir = req.query.gyodqlir;
      }

      const items = await Payment.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      const total = await Payment.countDocuments(filter);
      res.json({ data: items, total, page, limit });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /payments/:id
 * @description Get by ID Payment
 * @access Private
 */
router.get('/payments/:id',
  authenticate,
  authorize('payment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('payment.get'),
  async (req, res, next) => {
    try {
      const item = await Payment.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Payment not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /payments
 * @description Create Payment
 * @access Private
 */
router.post('/payments',
  authenticate,
  authorize('payment:post'),
  validate('payment.post'),
  rateLimit({ max: 100 }),
  audit('payment.post'),
  async (req, res, next) => {
    try {
      const item = new Payment(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PUT /payments/:id
 * @description Update Payment
 * @access Private
 */
router.put('/payments/:id',
  authenticate,
  authorize('payment:put'),
  validate('payment.put'),
  rateLimit({ max: 100 }),
  audit('payment.put'),
  async (req, res, next) => {
    try {
      const item = await Payment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!item) return res.status(404).json({ error: 'Payment not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PATCH /payments/:id
 * @description Partial update Payment
 * @access Private
 */
router.patch('/payments/:id',
  authenticate,
  authorize('payment:patch'),
  validate('payment.patch'),
  rateLimit({ max: 100 }),
  audit('payment.patch'),
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
 * @route DELETE /payments/:id
 * @description Delete Payment
 * @access Private
 */
router.delete('/payments/:id',
  authenticate,
  authorize('payment:delete'),
  rateLimit({ max: 100 }),
  audit('payment.delete'),
  async (req, res, next) => {
    try {
      const item = await Payment.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Payment not found' });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /payments/:id/stats
 * @description Get stats Payment
 * @access Private
 */
router.get('/payments/:id/stats',
  authenticate,
  authorize('payment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('payment.get'),
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
 * @route POST /payments/:id/duplicate
 * @description Duplicate Payment
 * @access Private
 */
router.post('/payments/:id/duplicate',
  authenticate,
  authorize('payment:post'),
  validate('payment.post'),
  rateLimit({ max: 100 }),
  audit('payment.post'),
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
 * @route POST /payments/bulk
 * @description Bulk create Payment
 * @access Private
 */
router.post('/payments/bulk',
  authenticate,
  authorize('payment:post'),
  validate('payment.post'),
  rateLimit({ max: 100 }),
  audit('payment.post'),
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
 * @route DELETE /payments/bulk
 * @description Bulk delete Payment
 * @access Private
 */
router.delete('/payments/bulk',
  authenticate,
  authorize('payment:delete'),
  rateLimit({ max: 100 }),
  audit('payment.delete'),
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
 * @route GET /payments/search
 * @description Search Payment
 * @access Private
 */
router.get('/payments/search',
  authenticate,
  authorize('payment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('payment.get'),
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
 * @route GET /payments/export
 * @description Export Payment
 * @access Private
 */
router.get('/payments/export',
  authenticate,
  authorize('payment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('payment.get'),
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
 * @route POST /payments/import
 * @description Import Payment
 * @access Private
 */
router.post('/payments/import',
  authenticate,
  authorize('payment:post'),
  validate('payment.post'),
  rateLimit({ max: 100 }),
  audit('payment.post'),
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