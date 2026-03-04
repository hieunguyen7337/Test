'use strict';

/**
 * Migration: 20241107183524_bjvqswnqqyapsfv
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('njubbpdpcn', function(table) {
    table.float('bxfkinxzdh');
    table.boolean('hhirhpmrzq');
    table.bigInteger('plqbvaotkf');
    table.timestamp('bndfsrurrq');
    table.text('chrwzpetvf');
    table.boolean('xqvbifiqon');
    table.integer('iuvyzvkqre');
  });
  await knex.schema.alterTable('korrpnyisa', function(table) {
    table.float('rnrwbrkoai');
    table.integer('aeturtybrt');
    table.integer('yrkftvowil');
    table.text('rxfxzqvisl');
    table.text('kojhamimla');
    table.bigInteger('txtoiwpwdv');
  });
  await knex.schema.alterTable('sgmihplaxf', function(table) {
    table.integer('khqrsliifr');
    table.json('ycznxcgjje');
    table.bigInteger('knktwjgrxo');
    table.integer('enzzrabpov');
    table.text('lhnltochgt');
    table.json('pdqxzeyjgx');
    table.timestamp('znigtrwmej');
    table.bigInteger('fhwvtmfzil');
    table.timestamp('eaqgjzfxhn');
  });
  await knex.schema.alterTable('ipdvrexszn', function(table) {
    table.float('arnnryjttb');
    table.float('fwyilnsnbu');
    table.bigInteger('pqaizaazan');
    table.json('xhybbwznyx');
    table.bigInteger('bbprgstfry');
    table.boolean('zddftsjuee');
    table.integer('simvkplprr');
    table.float('kqcwykuror');
    table.text('hogegqvhwi');
  });
  await knex.schema.alterTable('dbdwwevdwi', function(table) {
    table.float('imdwlverhi');
    table.timestamp('umpjsmksbe');
    table.float('cpzgchqxdr');
    table.boolean('yivojhwyxb');
    table.text('kvvkyajheg');
    table.timestamp('lzzurihjra');
    table.string('yyuffdmfjg');
    table.float('cnembnqwsd');
  });
  await knex.schema.alterTable('outtccxgnn', function(table) {
    table.timestamp('kstoubsfrx');
    table.bigInteger('oqvoorhzmr');
    table.float('pvycmtqsnc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};