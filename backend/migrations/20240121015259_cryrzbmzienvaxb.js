'use strict';

/**
 * Migration: 20240121015259_cryrzbmzienvaxb
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jxwzvuorld', function(table) {
    table.float('cnprzynzoi');
    table.float('tqeqotzhqd');
    table.integer('fckvbzvnge');
    table.float('rtlmgpujre');
    table.boolean('diebnxmjnv');
    table.float('hxcfjkcyag');
    table.text('yneiqsnfes');
    table.string('oxzucffvib');
  });
  await knex.schema.alterTable('ioldizqyes', function(table) {
    table.text('ktcallhdeg');
    table.boolean('ppkrheefsm');
    table.json('eeelrhfhfn');
    table.string('edkjrwvoqy');
    table.bigInteger('qltsksqsgt');
    table.float('dpmdyvzvlq');
    table.timestamp('glpcutoequ');
  });
  await knex.schema.alterTable('bpqerdyknj', function(table) {
    table.integer('kbycfozyxk');
    table.text('qblskyyvhk');
    table.timestamp('wicxkuumbm');
    table.integer('wxeodntbsc');
    table.bigInteger('hiyfqyuuld');
    table.string('xnuflprjen');
  });
  await knex.schema.alterTable('qkfkvfktxx', function(table) {
    table.string('ejnmbhmsti');
    table.bigInteger('uyfwnhrgcr');
    table.bigInteger('hpscxzlbzv');
    table.float('oohyommrba');
    table.float('opntjzymle');
    table.string('uwecyumggp');
    table.json('oqxpribuco');
    table.boolean('siodarbehi');
    table.integer('qonnnvpxoa');
  });
  await knex.schema.alterTable('wdcqvwyvld', function(table) {
    table.float('lzkyibtydw');
    table.text('vgylkahwuu');
    table.boolean('ouucwtylmr');
  });
  await knex.schema.alterTable('gynptjnkfq', function(table) {
    table.bigInteger('izumlsmjsd');
    table.string('erwniieflk');
    table.integer('nobhogxvrm');
    table.float('qwdkwndoep');
    table.boolean('ybssvrvwut');
  });
  await knex.schema.alterTable('mabptcrfkr', function(table) {
    table.text('djomrmmhdh');
    table.boolean('hfofzzrvks');
    table.bigInteger('uqpiifhjgm');
    table.integer('codocscypu');
    table.text('vcfwkfwssm');
    table.integer('nnihphjoaz');
    table.string('pjiaiykpln');
    table.boolean('uxadqlayoy');
    table.json('drnlciknbt');
  });
  await knex.schema.alterTable('oobbvvhsga', function(table) {
    table.text('gevdqyywce');
    table.boolean('liewtbduff');
    table.integer('ewtipxeoco');
    table.json('jtazihscyr');
    table.text('tltidsoiwm');
  });
  await knex.schema.alterTable('qqzkueeiqr', function(table) {
    table.boolean('iscndeowoq');
    table.bigInteger('tsyhzuwlyk');
    table.boolean('lqrcecmomo');
    table.integer('zxwsepwlgx');
    table.integer('dgbftfqktc');
    table.json('nxgsvbsmnz');
    table.json('vziozywqll');
    table.integer('uetgkwrzxb');
    table.json('uwadnzrpyp');
    table.boolean('ajkwpvgyzu');
  });
  await knex.schema.alterTable('azvkkemtrq', function(table) {
    table.string('qmnfiqdrke');
    table.json('qvumcxusry');
    table.integer('zommwhqwap');
    table.string('unvbuwpxvr');
    table.json('qxlxmdmene');
  });
  await knex.schema.alterTable('xenxvwpoad', function(table) {
    table.integer('vjcxirrxsv');
    table.bigInteger('fsgptiipex');
    table.text('eixurmlyjr');
    table.boolean('yyvluaixtm');
    table.float('pbeftgapgx');
    table.string('shfymtaqcx');
    table.float('veumotppfy');
    table.integer('fmyvjbqpab');
  });
  await knex.schema.alterTable('oplpcehjke', function(table) {
    table.json('xwnrsywnfu');
    table.boolean('aozmdcndsl');
    table.string('uzptvgfpfg');
    table.json('iuhwxtqnjz');
    table.bigInteger('vjvzjditvz');
    table.integer('tehonjlfps');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};