'use strict';

/**
 * Migration: 20240823020814_xfoliatjhfyhfkk
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ruvqafhtdt', function(table) {
    table.text('jblwzeojrh');
    table.bigInteger('nyyjoeayuv');
    table.float('dlsvhrwbar');
    table.bigInteger('dntpiyrfay');
    table.integer('tdmqfosmmh');
    table.json('ogomzkilca');
    table.integer('cpwkrzrjud');
    table.text('cajnmlksby');
    table.bigInteger('lumoolzmff');
    table.integer('iyahwdeudq');
  });
  await knex.schema.alterTable('lzpsasbxuu', function(table) {
    table.bigInteger('csnsnmcfra');
    table.boolean('hkzgdjckbt');
    table.bigInteger('zkysqplcfz');
    table.integer('hyzeqvkmhb');
    table.bigInteger('chpqsdloiz');
    table.string('mrrlsjyzne');
    table.bigInteger('floczmwkyp');
    table.integer('xpbmgvsgxu');
  });
  await knex.schema.alterTable('fwrcrglubd', function(table) {
    table.string('rgndwznnqt');
    table.boolean('llmhvdjmpb');
    table.bigInteger('cmrvjzkuun');
    table.integer('hqcieozotl');
    table.json('jiyfsbezmz');
    table.float('hzdyywczbz');
  });
  await knex.schema.alterTable('hgmjeqzseo', function(table) {
    table.integer('viyteewtfx');
    table.text('smrigrnvfh');
    table.float('ptooxkflpv');
  });
  await knex.schema.alterTable('gfjndznyyu', function(table) {
    table.integer('obegqxjvrn');
    table.float('itnzmbdspt');
    table.bigInteger('zimutysccq');
    table.string('fnlfxwxcuu');
    table.integer('ggybbfuodx');
    table.float('ukoofilfmd');
    table.integer('enbsaymlet');
    table.boolean('mabbmranyv');
    table.string('stiwzridpi');
    table.json('wbbrgmllzm');
  });
  await knex.schema.alterTable('xdkjcpsofc', function(table) {
    table.boolean('cxklsoxyzp');
    table.integer('bjppxlmfxj');
    table.json('oulubivket');
    table.boolean('izxyhanvcm');
  });
  await knex.schema.alterTable('rjqkcjuuzh', function(table) {
    table.boolean('vcvzcumxxd');
    table.boolean('oktpcdeiza');
    table.timestamp('jjjinbfgvc');
    table.text('qehraobqzr');
    table.text('sfpgrdnogv');
    table.boolean('ebbdvtuxhc');
    table.bigInteger('kmahaagpts');
    table.integer('stjwkbkfbh');
  });
  await knex.schema.alterTable('ukcsqsamio', function(table) {
    table.float('usldhdefij');
    table.float('igvmqvwvxp');
    table.string('eisfiqelzd');
    table.text('djrrlsvipk');
    table.text('izbyiynkch');
    table.integer('lcghqxzcli');
    table.timestamp('iyjmfdnzyx');
    table.boolean('bouprpjxhd');
  });
  await knex.schema.alterTable('ldldctjnhy', function(table) {
    table.string('rzyoznfnnp');
    table.string('hrtuskvxan');
    table.bigInteger('pdzdhihejw');
  });
  await knex.schema.alterTable('jfauofucmf', function(table) {
    table.integer('zygjjgbyav');
    table.timestamp('hcuvckmtfl');
    table.string('yrvqkcnzlm');
    table.json('dcrqjfheij');
  });
  await knex.schema.alterTable('gimysjxmgb', function(table) {
    table.integer('jjrzjlrlyh');
    table.boolean('tlzrzrqqsv');
    table.json('varkxeegls');
    table.boolean('qumxyexyig');
    table.timestamp('nudycdmzle');
    table.timestamp('hlsybyagwi');
    table.json('qoqsuuzncg');
    table.json('lhvvqjndvi');
    table.bigInteger('skctxwbbyl');
    table.integer('oxgktazkuk');
  });
  await knex.schema.alterTable('uyoeixlbfp', function(table) {
    table.string('ersykfgrll');
    table.integer('eosanvlwuu');
    table.boolean('viimhzvcls');
    table.float('jikiuzoeyw');
    table.boolean('rddodejpqa');
    table.timestamp('ynocoddgxu');
  });
  await knex.schema.alterTable('weeaflwkzf', function(table) {
    table.boolean('msmelparor');
    table.timestamp('acluyeadqf');
    table.json('gtesftrfuc');
  });
  await knex.schema.alterTable('flaujbhdzc', function(table) {
    table.float('hdazgqwjcg');
    table.timestamp('cgdvpbmqvh');
    table.string('sbyeuwdsli');
    table.boolean('kjwzepyjmy');
    table.timestamp('ewhxgdfkmi');
    table.float('zjymcciinp');
    table.string('oihsotzsqg');
    table.string('diuxfswuwx');
    table.string('autlruyxft');
  });
  await knex.schema.alterTable('pvnlpikbkq', function(table) {
    table.integer('yqdftciujl');
    table.boolean('trfqevgwem');
    table.json('vidwzauaoe');
    table.integer('izqwheytqb');
    table.bigInteger('xavwlsoaxr');
    table.text('ugmfktyhsn');
    table.boolean('pupcdwhgeg');
  });
  await knex.schema.alterTable('ciksmjjjck', function(table) {
    table.text('ieepfirvgb');
    table.bigInteger('imnibrgbva');
    table.timestamp('udybfszhbl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};