const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { cache } = require('../middleware/cache');
const { rateLimit } = require('../middleware/rateLimit');
const { audit } = require('../middleware/audit');

/**
 * @route GET /comments
 * @description List all Comment
 * @access Private
 */
router.get('/comments',
  authenticate,
  authorize('comment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('comment.get'),
  async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const sort = req.query.sort || '-createdAt';
      const filter = {};

      if (req.query.vjudphvy) {
        filter.vjudphvy = req.query.vjudphvy;
      }
      if (req.query.uvtusaub) {
        filter.uvtusaub = req.query.uvtusaub;
      }
      if (req.query.jjajhqzh) {
        filter.jjajhqzh = req.query.jjajhqzh;
      }
      if (req.query.xmxtqvqe) {
        filter.xmxtqvqe = req.query.xmxtqvqe;
      }
      if (req.query.sixnpazf) {
        filter.sixnpazf = req.query.sixnpazf;
      }
      if (req.query.tairysfw) {
        filter.tairysfw = req.query.tairysfw;
      }

      const items = await Comment.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      const total = await Comment.countDocuments(filter);
      res.json({ data: items, total, page, limit });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /comments/:id
 * @description Get by ID Comment
 * @access Private
 */
router.get('/comments/:id',
  authenticate,
  authorize('comment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('comment.get'),
  async (req, res, next) => {
    try {
      const item = await Comment.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Comment not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /comments
 * @description Create Comment
 * @access Private
 */
router.post('/comments',
  authenticate,
  authorize('comment:post'),
  validate('comment.post'),
  rateLimit({ max: 100 }),
  audit('comment.post'),
  async (req, res, next) => {
    try {
      const item = new Comment(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PUT /comments/:id
 * @description Update Comment
 * @access Private
 */
router.put('/comments/:id',
  authenticate,
  authorize('comment:put'),
  validate('comment.put'),
  rateLimit({ max: 100 }),
  audit('comment.put'),
  async (req, res, next) => {
    try {
      const item = await Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!item) return res.status(404).json({ error: 'Comment not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PATCH /comments/:id
 * @description Partial update Comment
 * @access Private
 */
router.patch('/comments/:id',
  authenticate,
  authorize('comment:patch'),
  validate('comment.patch'),
  rateLimit({ max: 100 }),
  audit('comment.patch'),
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
 * @route DELETE /comments/:id
 * @description Delete Comment
 * @access Private
 */
router.delete('/comments/:id',
  authenticate,
  authorize('comment:delete'),
  rateLimit({ max: 100 }),
  audit('comment.delete'),
  async (req, res, next) => {
    try {
      const item = await Comment.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Comment not found' });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /comments/:id/stats
 * @description Get stats Comment
 * @access Private
 */
router.get('/comments/:id/stats',
  authenticate,
  authorize('comment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('comment.get'),
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
 * @route POST /comments/:id/duplicate
 * @description Duplicate Comment
 * @access Private
 */
router.post('/comments/:id/duplicate',
  authenticate,
  authorize('comment:post'),
  validate('comment.post'),
  rateLimit({ max: 100 }),
  audit('comment.post'),
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
 * @route POST /comments/bulk
 * @description Bulk create Comment
 * @access Private
 */
router.post('/comments/bulk',
  authenticate,
  authorize('comment:post'),
  validate('comment.post'),
  rateLimit({ max: 100 }),
  audit('comment.post'),
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
 * @route DELETE /comments/bulk
 * @description Bulk delete Comment
 * @access Private
 */
router.delete('/comments/bulk',
  authenticate,
  authorize('comment:delete'),
  rateLimit({ max: 100 }),
  audit('comment.delete'),
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
 * @route GET /comments/search
 * @description Search Comment
 * @access Private
 */
router.get('/comments/search',
  authenticate,
  authorize('comment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('comment.get'),
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
 * @route GET /comments/export
 * @description Export Comment
 * @access Private
 */
router.get('/comments/export',
  authenticate,
  authorize('comment:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('comment.get'),
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
 * @route POST /comments/import
 * @description Import Comment
 * @access Private
 */
router.post('/comments/import',
  authenticate,
  authorize('comment:post'),
  validate('comment.post'),
  rateLimit({ max: 100 }),
  audit('comment.post'),
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