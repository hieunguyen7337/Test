'use strict';

/**
 * Migration: 20240727230112_aebedtemprcfaiu
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('riapemqgft', function(table) {
    table.string('ukskamvppq');
    table.timestamp('wffbhomrsd');
    table.boolean('fbgmytuswu');
    table.integer('nrttesupgz');
    table.text('fbkzwsoqnr');
  });
  await knex.schema.alterTable('pymeujplpj', function(table) {
    table.text('usnicozmbk');
    table.bigInteger('pzqddkedkl');
    table.integer('bypyhrvawy');
    table.text('sztieqjwrn');
    table.string('ckzsfmeiba');
    table.boolean('ypwtruuvvx');
    table.integer('nmyrrenwps');
    table.bigInteger('dewfwcqqob');
    table.boolean('iaimysytgq');
    table.text('wmgyzfmhgg');
  });
  await knex.schema.alterTable('vbrxlrdxgk', function(table) {
    table.float('phrzzecsim');
    table.string('awtijopllb');
    table.text('aknmssofsx');
  });
  await knex.schema.alterTable('tggigmzims', function(table) {
    table.timestamp('whypeqimfp');
    table.text('svmuhllcfx');
    table.integer('yvqjthqxhh');
    table.text('neatqitfbc');
    table.bigInteger('ewskoslvsc');
    table.boolean('ndthoovgqj');
    table.integer('pzetywvnlm');
    table.bigInteger('gfrlnqfvwo');
  });
  await knex.schema.alterTable('igqczyaizg', function(table) {
    table.text('eyotjczucz');
    table.json('pnanxwvcek');
    table.json('eyymeiamzt');
    table.boolean('dyutzxkojb');
  });
  await knex.schema.alterTable('zwdiedzhow', function(table) {
    table.integer('yzsbmwajgd');
    table.json('wfgiufdevi');
    table.text('huamyrzsit');
    table.integer('xylfnynruh');
    table.integer('ockgmwvtdl');
    table.json('achtlittdn');
    table.string('vrzjncsyrl');
    table.text('bfmmrkmdyk');
    table.json('xnkusbsaar');
    table.timestamp('iapfrismau');
  });
  await knex.schema.alterTable('lawqcmpsdv', function(table) {
    table.integer('aqlnslpbet');
    table.timestamp('zvyoemhefy');
    table.text('bxamxxbacf');
    table.text('qdpyhlnvyl');
    table.string('imhgauriqr');
    table.json('ecpnuzkdsj');
  });
  await knex.schema.alterTable('rnwcalmxxo', function(table) {
    table.text('hyujxdajuf');
    table.timestamp('mckzinsxnt');
    table.timestamp('lewjypahwk');
    table.boolean('wlndvimifl');
    table.float('hpxnajvfvb');
  });
  await knex.schema.alterTable('lzclbbgfdv', function(table) {
    table.timestamp('kxxhahkeai');
    table.text('rygsjradxl');
    table.text('muhgyhjiuq');
    table.json('aqdmlkqcco');
    table.timestamp('ysogfxsmqd');
    table.string('bppvrpifqf');
  });
  await knex.schema.alterTable('ytbjahyeeu', function(table) {
    table.boolean('jscgyclvpn');
    table.boolean('tfvddtuekz');
    table.text('chffczvxog');
    table.string('mxtlvpwjbp');
    table.text('tlcdfsdacl');
  });
  await knex.schema.alterTable('mvpodqhujh', function(table) {
    table.string('lggpeqzoqr');
    table.string('lfvcwqwpsd');
    table.json('txaiamtssc');
    table.text('vojicdbves');
    table.bigInteger('epacmoxahi');
    table.boolean('foxoilfecs');
    table.integer('giirjvgtnk');
    table.integer('hctsamffcu');
    table.boolean('yiosbhikwl');
    table.string('swvpkygekr');
  });
  await knex.schema.alterTable('xiksvdmidb', function(table) {
    table.boolean('quoxqtawlg');
    table.boolean('rgjahqkxin');
    table.text('xundsmjhcp');
    table.integer('dnxkqszqnf');
    table.text('wspbnjjina');
    table.float('rdblwvltas');
    table.integer('cpubjcsxqr');
    table.timestamp('hearlwrczv');
  });
  await knex.schema.alterTable('wylafvxhee', function(table) {
    table.string('litywviqpf');
    table.boolean('efdtmbgkcj');
    table.integer('lfvckswdxc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};