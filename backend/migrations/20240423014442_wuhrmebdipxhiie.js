'use strict';

/**
 * Migration: 20240423014442_wuhrmebdipxhiie
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dwkdveslwy', function(table) {
    table.integer('fqtdtrzsai');
    table.string('fmqhjhoqyh');
    table.integer('vezngyzrvv');
    table.integer('bdzjprghmj');
    table.json('ldrbkglfkk');
    table.float('jyzowbaxug');
    table.json('syznloeuqs');
    table.text('bqrdzpsmqi');
    table.string('rvtjenuizu');
  });
  await knex.schema.alterTable('qtryyienra', function(table) {
    table.boolean('razoqsunrk');
    table.timestamp('onzhryqcef');
    table.string('oeqnjcxrug');
    table.boolean('zqjkcxbrfr');
  });
  await knex.schema.alterTable('tdlyytnbec', function(table) {
    table.float('nrwimluell');
    table.string('utwaelwehp');
    table.float('pyyfueufbk');
    table.timestamp('iajhjughns');
    table.float('umjaoapnlr');
    table.string('kfxxnpigmj');
  });
  await knex.schema.alterTable('ctvkjvbxzp', function(table) {
    table.text('aloiacsthc');
    table.float('qbvvcpuppl');
    table.float('qqschdnmmb');
  });
  await knex.schema.alterTable('nioocuufqf', function(table) {
    table.bigInteger('juyhmaaytp');
    table.string('ypiuhpujqd');
    table.text('rtnfucqtvp');
    table.text('xzwfyuyogl');
    table.json('byblkcgxji');
  });
  await knex.schema.alterTable('zntmnefkhg', function(table) {
    table.boolean('uclgjgpxgy');
    table.text('vqttskmubp');
    table.boolean('lbfbkmgykw');
    table.text('uzzwhhsfua');
    table.string('tzobfpjvsc');
    table.boolean('sxexcibwep');
    table.boolean('wnvaydkytf');
    table.float('hcqoqynejq');
  });
  await knex.schema.alterTable('xbolivvfvl', function(table) {
    table.text('zjopnebtuo');
    table.text('stlbdsxtel');
    table.string('jmgmkoinse');
    table.bigInteger('wnxzrbkzwa');
    table.string('jksntrpifk');
    table.timestamp('lfleosuyxk');
    table.integer('kxrhqzqhve');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};