'use strict';

/**
 * Migration: 20240228185503_hzeaepicqnwtpal
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iyfyzrmnsq', function(table) {
    table.float('hghdoupzpi');
    table.timestamp('nfwmolooii');
    table.integer('cdjcbydhcl');
    table.string('farwfeynop');
  });
  await knex.schema.alterTable('mgoygyihry', function(table) {
    table.text('gxvspbslai');
    table.text('rnnwqyefwa');
    table.integer('pizxiofaps');
    table.float('dzddjlgott');
    table.timestamp('juoatfmxfi');
    table.boolean('hqhxakyioz');
  });
  await knex.schema.alterTable('osnabbunjs', function(table) {
    table.bigInteger('kmckhnxhpl');
    table.integer('zpeonwvwky');
    table.string('cgkrefkbzz');
    table.json('nhboqzanin');
    table.integer('ywlgloeqpr');
    table.text('ydrecgwewt');
    table.integer('hbasdqqsde');
    table.text('nlixeharxm');
    table.string('vaepxkudlp');
    table.boolean('tshupinhbc');
  });
  await knex.schema.alterTable('dygnmfcyrt', function(table) {
    table.float('vhrzdccsgo');
    table.text('bnybfgvzhn');
    table.timestamp('agqauxenag');
  });
  await knex.schema.alterTable('oouephrphd', function(table) {
    table.bigInteger('pcorbcktfb');
    table.float('cvngyefzfp');
    table.boolean('fkqbgodwyz');
    table.text('fekycamzxx');
    table.text('wjylyaembt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};