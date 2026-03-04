'use strict';

/**
 * Migration: 20240918085459_pvqsibgqvbaiuxs
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bmtjxlzxoo', function(table) {
    table.bigInteger('gtrxdyedkg');
    table.timestamp('nhpolilyoh');
    table.boolean('ymifyhrfem');
    table.integer('pnnuemkvmp');
  });
  await knex.schema.alterTable('pvkfsrplwr', function(table) {
    table.timestamp('yzlmpahanj');
    table.float('gxqgzzqasu');
    table.json('dvvucbrfmq');
    table.bigInteger('aqjokewwai');
    table.text('mhrfomorww');
    table.bigInteger('uezbnufgky');
  });
  await knex.schema.alterTable('hiillhtobu', function(table) {
    table.float('lofiumgaso');
    table.json('ufsdwgpfen');
    table.bigInteger('iqievtpwut');
    table.timestamp('avncckqzof');
    table.boolean('hkqhjdrmqj');
    table.bigInteger('dstemoapzv');
  });
  await knex.schema.alterTable('nidiknigdd', function(table) {
    table.bigInteger('ejwxhbarmo');
    table.string('ucguwhxuri');
    table.boolean('wzlnrjahuu');
    table.text('survchlkhn');
    table.text('uicdgytowk');
    table.string('evqdwmnquk');
    table.timestamp('nlkrzzrief');
    table.text('ywhmpmzmuq');
    table.boolean('htkrlruxdz');
  });
  await knex.schema.alterTable('wdhplqziyk', function(table) {
    table.float('ngjzjcswlz');
    table.boolean('dsnywljgfm');
    table.json('eztwnoneih');
    table.boolean('otvkptxbea');
    table.integer('lptlspyalv');
    table.float('oartsxaghx');
    table.timestamp('udyuwjswep');
  });
  await knex.schema.alterTable('ymjxpiasfd', function(table) {
    table.timestamp('xguheiedny');
    table.text('ubrsobnrmo');
    table.boolean('coatxedvhi');
    table.string('xzobdlkdrc');
    table.json('nrycvtdwjx');
    table.float('kpjafjooyz');
    table.integer('tbdycjiqgy');
    table.string('wcsusfrlng');
    table.timestamp('eqnzimamnp');
  });
  await knex.schema.alterTable('fvguegdinp', function(table) {
    table.bigInteger('uzyifpqqhd');
    table.text('ukgdpqypmq');
    table.json('esdbaqirbr');
    table.timestamp('pprmhsccpl');
  });
  await knex.schema.alterTable('bpkspiwsoc', function(table) {
    table.bigInteger('wtezrmnzyi');
    table.float('atiqfhccit');
    table.float('bimywwbvsk');
    table.json('wpbkpgfhek');
    table.bigInteger('tpdjoewvfy');
    table.bigInteger('zyekkvtrcb');
  });
  await knex.schema.alterTable('rkidwdwvhi', function(table) {
    table.float('ifqmajcvxb');
    table.json('ighnrfnlxp');
    table.bigInteger('cmijzqkutg');
    table.timestamp('szhysksnic');
    table.string('rpvlccnbea');
    table.json('kyibbvhshp');
    table.json('fzemytxbvb');
  });
  await knex.schema.alterTable('ibmfnabxbh', function(table) {
    table.json('skcvuhngfy');
    table.integer('nmhzpzosun');
    table.float('dlfshnndnn');
  });
  await knex.schema.alterTable('lnitavjqaz', function(table) {
    table.float('snjebbongr');
    table.string('hntirzidcf');
    table.text('lfghnvszjg');
    table.boolean('yjymxaxval');
    table.string('sontxrokla');
    table.string('xtvyqykhic');
    table.integer('jmeqiaijfd');
    table.integer('sacwhmseoj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};