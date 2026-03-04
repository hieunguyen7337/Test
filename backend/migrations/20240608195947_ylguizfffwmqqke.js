'use strict';

/**
 * Migration: 20240608195947_ylguizfffwmqqke
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('byeogcnnbv', function(table) {
    table.boolean('yvlmobiqnu');
    table.timestamp('ogkmmcbvnp');
    table.float('rrnwlbwdvn');
    table.integer('zakntmmuqd');
    table.json('yrdgnzyxfk');
    table.string('jgwnnwxsoh');
    table.integer('mmemkvlpbu');
  });
  await knex.schema.alterTable('zdkiyxcdtb', function(table) {
    table.string('lmsnewoqjy');
    table.json('jhudeiigxv');
    table.string('cgojxcyflo');
    table.json('gdmdvyfyug');
  });
  await knex.schema.alterTable('agmxbrqlij', function(table) {
    table.json('snldqlhmhx');
    table.timestamp('oidcnnrbxn');
    table.boolean('xowqjayngz');
    table.boolean('ckmcmavuyv');
  });
  await knex.schema.alterTable('cfvpboofnp', function(table) {
    table.boolean('iiddbyayiy');
    table.text('pkvhnorjaz');
    table.text('ulnzrvczlz');
    table.boolean('wtuxrrvebj');
    table.json('qdhlmujomk');
    table.json('ilwcomwoul');
    table.timestamp('irkjnpxyeq');
  });
  await knex.schema.alterTable('uyvcewfdey', function(table) {
    table.text('bfjewurnaw');
    table.string('yzsrinqroh');
    table.timestamp('uitdnaqwls');
    table.boolean('izkaiouelm');
  });
  await knex.schema.alterTable('unujskxhwm', function(table) {
    table.string('qedxfuhviv');
    table.float('dejhhvscmb');
    table.bigInteger('gfgkpgunnk');
    table.timestamp('cxgxokkcui');
    table.float('aaozlicuef');
    table.timestamp('ljerjsbdvu');
    table.boolean('mroayvdqst');
  });
  await knex.schema.alterTable('rpxfvragzr', function(table) {
    table.json('kaluddwgpw');
    table.timestamp('lmctpltbvr');
    table.string('bvwqeyhpzc');
    table.string('vcgrvbjzox');
    table.float('oufyvmxvsb');
    table.boolean('exdhobclmb');
    table.text('azcfapwtjs');
  });
  await knex.schema.alterTable('vsavhkvthj', function(table) {
    table.string('cucykrvxdl');
    table.float('qdwuxyeoml');
    table.timestamp('ckztcaqcul');
    table.bigInteger('fnulwchuxt');
    table.integer('ckibbvqlfi');
    table.float('qgkzecoyrf');
    table.text('eqoydwgkco');
    table.boolean('unbyfxyuwv');
  });
  await knex.schema.alterTable('ioclpadipv', function(table) {
    table.float('ejxczivogl');
    table.text('kyqpvrarmj');
    table.bigInteger('icxbjxioua');
    table.text('aaaullmpqk');
    table.string('beblzhwirm');
    table.timestamp('kxolugjmox');
    table.integer('zgaskdvror');
    table.timestamp('ijjjipskhh');
    table.bigInteger('pejkmeflik');
  });
  await knex.schema.alterTable('szdgwrurck', function(table) {
    table.string('tpwbskhkiy');
    table.integer('iakdtspxzu');
    table.timestamp('syzoqrwrmx');
    table.integer('zbcaeukovr');
    table.float('oevqvhxjen');
  });
  await knex.schema.alterTable('fmpsbdzudi', function(table) {
    table.integer('esgbmpppvp');
    table.json('eskxnvwdue');
    table.bigInteger('mtcpiajvzj');
    table.text('esqxswpzwj');
    table.bigInteger('wuazwybvtq');
    table.bigInteger('qdcnvyycib');
    table.boolean('higpxpbqoc');
    table.timestamp('urohvsrkew');
  });
  await knex.schema.alterTable('ximgcxqpgw', function(table) {
    table.json('ufmlxablae');
    table.text('hxapvinfqy');
    table.float('fuklephsct');
    table.bigInteger('oqcivrjwgb');
    table.text('mbzbginrrc');
    table.bigInteger('iqcqndpygf');
    table.float('empizkvqil');
    table.string('cxdkojuysp');
  });
  await knex.schema.alterTable('fnkynieren', function(table) {
    table.string('agdemucfmd');
    table.string('kpcnzvdmzw');
    table.boolean('adjilzqvlx');
    table.bigInteger('sjicovcvke');
    table.integer('soyrcimrqe');
  });
  await knex.schema.alterTable('bpwchiqhvf', function(table) {
    table.integer('snctmdsghg');
    table.text('ubppjcnyiv');
    table.float('husqehpuqn');
    table.bigInteger('jsersiqrks');
    table.string('puctqdlvun');
  });
  await knex.schema.alterTable('itstivryth', function(table) {
    table.boolean('qvifdfbyog');
    table.boolean('zfwjxvhhnw');
    table.text('xvewwoskkf');
    table.timestamp('xxwxfuvpdo');
    table.float('qfaxuvqlky');
    table.float('zwijelbxag');
    table.text('qihulmhykf');
    table.timestamp('nmchkarcjy');
    table.timestamp('iggrcutlzx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};