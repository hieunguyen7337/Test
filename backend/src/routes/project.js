const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { cache } = require('../middleware/cache');
const { rateLimit } = require('../middleware/rateLimit');
const { audit } = require('../middleware/audit');

/**
 * @route GET /projects
 * @description List all Project
 * @access Private
 */
router.get('/projects',
  authenticate,
  authorize('project:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('project.get'),
  async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const sort = req.query.sort || '-createdAt';
      const filter = {};

      if (req.query.kmkoducy) {
        filter.kmkoducy = req.query.kmkoducy;
      }
      if (req.query.zardbttu) {
        filter.zardbttu = req.query.zardbttu;
      }
      if (req.query.owncqmoe) {
        filter.owncqmoe = req.query.owncqmoe;
      }
      if (req.query.wmqbslty) {
        filter.wmqbslty = req.query.wmqbslty;
      }

      const items = await Project.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      const total = await Project.countDocuments(filter);
      res.json({ data: items, total, page, limit });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /projects/:id
 * @description Get by ID Project
 * @access Private
 */
router.get('/projects/:id',
  authenticate,
  authorize('project:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('project.get'),
  async (req, res, next) => {
    try {
      const item = await Project.findById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Project not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route POST /projects
 * @description Create Project
 * @access Private
 */
router.post('/projects',
  authenticate,
  authorize('project:post'),
  validate('project.post'),
  rateLimit({ max: 100 }),
  audit('project.post'),
  async (req, res, next) => {
    try {
      const item = new Project(req.body);
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PUT /projects/:id
 * @description Update Project
 * @access Private
 */
router.put('/projects/:id',
  authenticate,
  authorize('project:put'),
  validate('project.put'),
  rateLimit({ max: 100 }),
  audit('project.put'),
  async (req, res, next) => {
    try {
      const item = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!item) return res.status(404).json({ error: 'Project not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route PATCH /projects/:id
 * @description Partial update Project
 * @access Private
 */
router.patch('/projects/:id',
  authenticate,
  authorize('project:patch'),
  validate('project.patch'),
  rateLimit({ max: 100 }),
  audit('project.patch'),
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
 * @route DELETE /projects/:id
 * @description Delete Project
 * @access Private
 */
router.delete('/projects/:id',
  authenticate,
  authorize('project:delete'),
  rateLimit({ max: 100 }),
  audit('project.delete'),
  async (req, res, next) => {
    try {
      const item = await Project.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Project not found' });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @route GET /projects/:id/stats
 * @description Get stats Project
 * @access Private
 */
router.get('/projects/:id/stats',
  authenticate,
  authorize('project:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('project.get'),
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
 * @route POST /projects/:id/duplicate
 * @description Duplicate Project
 * @access Private
 */
router.post('/projects/:id/duplicate',
  authenticate,
  authorize('project:post'),
  validate('project.post'),
  rateLimit({ max: 100 }),
  audit('project.post'),
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
 * @route POST /projects/bulk
 * @description Bulk create Project
 * @access Private
 */
router.post('/projects/bulk',
  authenticate,
  authorize('project:post'),
  validate('project.post'),
  rateLimit({ max: 100 }),
  audit('project.post'),
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
 * @route DELETE /projects/bulk
 * @description Bulk delete Project
 * @access Private
 */
router.delete('/projects/bulk',
  authenticate,
  authorize('project:delete'),
  rateLimit({ max: 100 }),
  audit('project.delete'),
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
 * @route GET /projects/search
 * @description Search Project
 * @access Private
 */
router.get('/projects/search',
  authenticate,
  authorize('project:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('project.get'),
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
 * @route GET /projects/export
 * @description Export Project
 * @access Private
 */
router.get('/projects/export',
  authenticate,
  authorize('project:get'),
  cache({ ttl: 300 }),
  rateLimit({ max: 100 }),
  audit('project.get'),
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
 * @route POST /projects/import
 * @description Import Project
 * @access Private
 */
router.post('/projects/import',
  authenticate,
  authorize('project:post'),
  validate('project.post'),
  rateLimit({ max: 100 }),
  audit('project.post'),
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