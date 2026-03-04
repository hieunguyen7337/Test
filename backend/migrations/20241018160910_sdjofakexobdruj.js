'use strict';

/**
 * Migration: 20241018160910_sdjofakexobdruj
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ioccetzggb', function(table) {
    table.integer('rschnsskgb');
    table.string('utvxwspcnu');
    table.string('bmzzgybsxw');
    table.integer('embhovkysb');
    table.timestamp('ortcrpsivd');
    table.timestamp('pppcmakpox');
    table.text('kwbgytumfb');
    table.integer('hbrqmqqvio');
    table.timestamp('oikbtirqjo');
    table.string('pklwfvdaai');
  });
  await knex.schema.alterTable('agweeimrhw', function(table) {
    table.string('thkdtdqqfq');
    table.timestamp('crlcnucfud');
    table.float('zwqrtkexyg');
    table.text('iryajtuiim');
  });
  await knex.schema.alterTable('lyqldkiqkz', function(table) {
    table.text('jiinxnbrzn');
    table.bigInteger('xjdsxdckkr');
    table.integer('rtmguvzuqn');
  });
  await knex.schema.alterTable('ritchbluux', function(table) {
    table.float('exrznwgnnx');
    table.json('gxnnwnmfik');
    table.json('tborpgnvpe');
    table.bigInteger('wqyrvzwils');
    table.bigInteger('yjtdaqrqvn');
  });
  await knex.schema.alterTable('trkkrmyrjk', function(table) {
    table.timestamp('ljntjdxlqc');
    table.float('txdpkrhtde');
    table.bigInteger('hsomiyiube');
    table.bigInteger('ncrsfymgjo');
  });
  await knex.schema.alterTable('kpnuqpvikq', function(table) {
    table.integer('sylzwdvwfj');
    table.float('ljxlzaajes');
    table.string('afsvmtxohw');
    table.boolean('mgofmjllpv');
    table.integer('pgnlqoxtjv');
    table.string('qbbmfkgacn');
  });
  await knex.schema.alterTable('lbfoxdwbbm', function(table) {
    table.text('mrzhzebeeh');
    table.string('pergzhzvyl');
    table.string('uguncryxgj');
  });
  await knex.schema.alterTable('qekwhadpkh', function(table) {
    table.timestamp('nivrilyexq');
    table.text('aqeyqeyzif');
    table.integer('ehrqcvsben');
    table.string('rqaimxzlhj');
  });
  await knex.schema.alterTable('kstekyijne', function(table) {
    table.float('cprgbhsyrq');
    table.timestamp('szrukqporc');
    table.integer('ybqxuyzcpz');
  });
  await knex.schema.alterTable('knbfeeqimn', function(table) {
    table.bigInteger('qbfvxeajsz');
    table.bigInteger('xgvhpweiyf');
    table.timestamp('phluesdvhr');
    table.text('wqpbqcedzb');
  });
  await knex.schema.alterTable('gargmtaoak', function(table) {
    table.float('ymowkswqpr');
    table.integer('pyievunkin');
    table.integer('ndngwxavnb');
    table.float('ockpahokuh');
    table.string('aodhctjmhn');
    table.integer('gvqdtwzfvm');
    table.text('aleuhfvysb');
  });
  await knex.schema.alterTable('rvlvqyouhg', function(table) {
    table.json('mgoznkaqxd');
    table.timestamp('jacpvrfdvv');
    table.bigInteger('tptoeenghb');
    table.boolean('copemuxocl');
    table.boolean('ukkxwxbyla');
    table.integer('ycafqkzjfs');
    table.bigInteger('cdofarurnc');
    table.boolean('oxufkjbxow');
  });
  await knex.schema.alterTable('zovkumrunl', function(table) {
    table.timestamp('blfvheufkr');
    table.string('scnzcxeoib');
    table.json('jzfxmscemh');
    table.json('yejavgbowz');
    table.boolean('chzqamnrue');
    table.integer('jydmbesrid');
    table.string('ykuyczltzv');
    table.string('goielmukxs');
  });
  await knex.schema.alterTable('xvamedcjik', function(table) {
    table.text('edmsevclml');
    table.timestamp('zcaxsljptr');
    table.bigInteger('rwbrvqspzr');
    table.string('hmujtcdkju');
    table.text('ceadcwycrf');
    table.boolean('hoveodkpvp');
    table.boolean('nsctyrelig');
    table.integer('iiquocnhok');
    table.timestamp('opjqxytrry');
    table.timestamp('dslerezmrl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};