const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { cache } = require('../middleware/cache');
const { rateLimit } = require('../middleware/rateLimit');
const { audit } = require('../middleware/audit');

/**
 * @route GET /invoices
 * @description List all Invoice
 * @access Private
 */
router.get('/invoices',
  authenticate,
  authorize('invoice:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('invoice.get'),
  async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const sort = req.query.sort || '-createdAt';
      const filter = {};

      if (req.query.vorppdnc) {
        filter.vorppdnc = req.query.vorppdnc;
      }
      if (req.query.vxssawlv) {
        filter.vxssawlv = req.query.vxssawlv;
      }
      if (req.query.fmxrbtru) {
        filter.fmxrbtru = req.query.fmxrbtru;
      }
      if (req.query.wzdncckp) {
        filter.wzdncckp = req.query.wzdncckp;
      }
      if (req.query.ikbrdbrf) {
        filter.ikbrdbrf = req.query.ikbrdbrf;
      }
      if (req.query.okopliiq) {
        filter.okopliiq = req.query.okopliiq;
      }

      const items = await Invoice.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      const total = await Invoice.countDocuments(filter);
      res.json({ data: items, total, page, limit });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /invoices/:id
 * @description Get by ID Invoice
 * @access Private
 */
router.get('/invoices/:id',
  authenticate,
  authorize('invoice:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('invoice.get'),
  async (req, res, next) => {
    try {
      const item = await Invoice.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Invoice not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /invoices
 * @description Create Invoice
 * @access Private
 */
router.post('/invoices',
  authenticate,
  authorize('invoice:post'),
  validate('invoice.post'),
  rateLimit({ max: 100 }),
  audit('invoice.post'),
  async (req, res, next) => {
    try {
      const item = new Invoice(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PUT /invoices/:id
 * @description Update Invoice
 * @access Private
 */
router.put('/invoices/:id',
  authenticate,
  authorize('invoice:put'),
  validate('invoice.put'),
  rateLimit({ max: 100 }),
  audit('invoice.put'),
  async (req, res, next) => {
    try {
      const item = await Invoice.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!item) return res.status(404).json({ error: 'Invoice not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PATCH /invoices/:id
 * @description Partial update Invoice
 * @access Private
 */
router.patch('/invoices/:id',
  authenticate,
  authorize('invoice:patch'),
  validate('invoice.patch'),
  rateLimit({ max: 100 }),
  audit('invoice.patch'),
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
 * @route DELETE /invoices/:id
 * @description Delete Invoice
 * @access Private
 */
router.delete('/invoices/:id',
  authenticate,
  authorize('invoice:delete'),
  rateLimit({ max: 100 }),
  audit('invoice.delete'),
  async (req, res, next) => {
    try {
      const item = await Invoice.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Invoice not found' });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /invoices/:id/stats
 * @description Get stats Invoice
 * @access Private
 */
router.get('/invoices/:id/stats',
  authenticate,
  authorize('invoice:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('invoice.get'),
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
 * @route POST /invoices/:id/duplicate
 * @description Duplicate Invoice
 * @access Private
 */
router.post('/invoices/:id/duplicate',
  authenticate,
  authorize('invoice:post'),
  validate('invoice.post'),
  rateLimit({ max: 100 }),
  audit('invoice.post'),
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
 * @route POST /invoices/bulk
 * @description Bulk create Invoice
 * @access Private
 */
router.post('/invoices/bulk',
  authenticate,
  authorize('invoice:post'),
  validate('invoice.post'),
  rateLimit({ max: 100 }),
  audit('invoice.post'),
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
 * @route DELETE /invoices/bulk
 * @description Bulk delete Invoice
 * @access Private
 */
router.delete('/invoices/bulk',
  authenticate,
  authorize('invoice:delete'),
  rateLimit({ max: 100 }),
  audit('invoice.delete'),
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
 * @route GET /invoices/search
 * @description Search Invoice
 * @access Private
 */
router.get('/invoices/search',
  authenticate,
  authorize('invoice:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('invoice.get'),
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
 * @route GET /invoices/export
 * @description Export Invoice
 * @access Private
 */
router.get('/invoices/export',
  authenticate,
  authorize('invoice:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('invoice.get'),
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
 * @route POST /invoices/import
 * @description Import Invoice
 * @access Private
 */
router.post('/invoices/import',
  authenticate,
  authorize('invoice:post'),
  validate('invoice.post'),
  rateLimit({ max: 100 }),
  audit('invoice.post'),
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