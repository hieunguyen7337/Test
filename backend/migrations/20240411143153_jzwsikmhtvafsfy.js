'use strict';

/**
 * Migration: 20240411143153_jzwsikmhtvafsfy
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rscvdfewfy', function(table) {
    table.timestamp('jczgzvdszn');
    table.integer('trmlzooogn');
    table.string('qbkklchqhx');
    table.timestamp('nlcskuoswg');
  });
  await knex.schema.alterTable('cgasoemdfy', function(table) {
    table.bigInteger('trdxgfljke');
    table.float('xtewsbltjp');
    table.string('qtgwvpdbjq');
  });
  await knex.schema.alterTable('levrpmhtft', function(table) {
    table.string('ufyntvwzml');
    table.bigInteger('lmizudpcbf');
    table.bigInteger('pkyhjbqrxa');
    table.float('bbmwvrmrag');
  });
  await knex.schema.alterTable('rbgtedaskk', function(table) {
    table.string('hcctoxrecq');
    table.integer('toutyqrdqd');
    table.integer('wydilgfgyh');
    table.boolean('xdaoioxron');
    table.bigInteger('mveehxuppl');
    table.timestamp('hoauzljwlh');
    table.float('mrxkqhvtmv');
    table.string('ohgagchzck');
  });
  await knex.schema.alterTable('qgrwtfgmbr', function(table) {
    table.text('zbjctuepth');
    table.text('ylaylpmsau');
    table.float('wesjtmulwl');
    table.boolean('zgmykhqfcd');
    table.bigInteger('ptuvkroxtt');
    table.float('awovixubcr');
    table.integer('jrenuxwsaj');
    table.boolean('psrozbkyiv');
  });
  await knex.schema.alterTable('aqooygcpro', function(table) {
    table.boolean('wsjbsubixv');
    table.json('obbyvlpzuv');
    table.integer('gmkpqrxsmo');
  });
  await knex.schema.alterTable('tsejblkjle', function(table) {
    table.integer('lwrfemvspx');
    table.text('covojcqltk');
    table.json('qijhdkfgge');
    table.float('axikknhmtn');
    table.integer('zmoobcwdxu');
  });
  await knex.schema.alterTable('jjblrjzher', function(table) {
    table.timestamp('ohyckdsbev');
    table.text('tigbzewmlk');
    table.string('uijrqvoisc');
    table.text('mouyhukszd');
  });
  await knex.schema.alterTable('pbhmiysvuo', function(table) {
    table.boolean('utukeyqyiv');
    table.float('okyyfkpava');
    table.boolean('derbatkixn');
    table.json('aajvbdmdpl');
  });
  await knex.schema.alterTable('ccliuwuven', function(table) {
    table.bigInteger('zzvrhpskhh');
    table.timestamp('tztywedjuq');
    table.float('tlqafiwayx');
  });
  await knex.schema.alterTable('ajyetmlnji', function(table) {
    table.float('vfskfynpsy');
    table.bigInteger('txgdyarxwf');
    table.text('erxnbavtuj');
    table.integer('yeqqoizamr');
    table.text('rukxzjgrvs');
    table.string('hchtgauczc');
    table.json('aiqpapvvif');
    table.text('eseuhxabim');
  });
  await knex.schema.alterTable('buydalefef', function(table) {
    table.string('vrxlcvcloa');
    table.float('dcexwgbgum');
    table.json('xfnfgtullo');
  });
  await knex.schema.alterTable('lfdfbcgxkr', function(table) {
    table.text('jmcbbmeehu');
    table.text('eswxolglat');
    table.string('xkspzkyrnh');
    table.text('bjhhlowprv');
  });
  await knex.schema.alterTable('ztpurbpipk', function(table) {
    table.float('zyzolqgomj');
    table.float('ikabcrkyqk');
    table.json('dcxylwqnek');
    table.bigInteger('ktuowwzbkw');
    table.timestamp('haxmztkoap');
    table.boolean('nrqtvkvixt');
    table.json('qpsryuvihj');
    table.text('ocunxcuadw');
  });
  await knex.schema.alterTable('jeetdmfloz', function(table) {
    table.string('ffwtitsbde');
    table.bigInteger('ogpjhnlhri');
    table.integer('fsnaaxhodh');
    table.string('ntwcbnupox');
    table.bigInteger('balrfgnoni');
  });
  await knex.schema.alterTable('xgvlmwgtva', function(table) {
    table.float('gxilbhxvix');
    table.bigInteger('fwlnckflkf');
    table.text('mnupijtibs');
    table.boolean('rvmslxbvpd');
    table.float('hjlyldibyc');
    table.string('efeiibqyhb');
    table.text('yfkapqeavj');
    table.boolean('pblaaqaaii');
    table.json('gmbepvcoeg');
    table.integer('yjcigjkckz');
  });
  await knex.schema.alterTable('scobdlpjvf', function(table) {
    table.text('mnueoxloil');
    table.string('yhjjnzogzu');
    table.integer('xqkqgrmgok');
    table.timestamp('qbzmvmxuaq');
    table.float('ttdxudoqca');
    table.float('jbzuwtvdoc');
  });
  await knex.schema.alterTable('hohizasvib', function(table) {
    table.timestamp('nencbhawbm');
    table.integer('unycchnktn');
    table.string('mcllrtabas');
    table.float('uafbndzqsa');
  });
  await knex.schema.alterTable('isrnkdryut', function(table) {
    table.bigInteger('sfoiztptto');
    table.float('tzekbeokgj');
    table.json('zyvkcgvtxy');
    table.timestamp('xmzvowknly');
    table.integer('tftxgapajg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};