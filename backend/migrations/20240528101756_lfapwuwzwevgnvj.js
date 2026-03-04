'use strict';

/**
 * Migration: 20240528101756_lfapwuwzwevgnvj
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mbbdrkyqwz', function(table) {
    table.string('ypglfyifcc');
    table.integer('ehfhavcwon');
    table.bigInteger('fkmlcgckfg');
    table.float('eiovzqynlw');
    table.boolean('pbfjhqswjj');
    table.bigInteger('rjymicllvy');
    table.timestamp('iaieboqarc');
    table.bigInteger('gtrfztnqml');
  });
  await knex.schema.alterTable('lylmoimamg', function(table) {
    table.boolean('ecewhxgdpa');
    table.bigInteger('pfmybhzkzu');
    table.float('eztahthiou');
    table.text('agfcgxhptl');
  });
  await knex.schema.alterTable('prwwalcdwq', function(table) {
    table.json('nzvcnlqvqa');
    table.json('bddhxtwgyl');
    table.timestamp('mfuqkqekme');
    table.boolean('omxpfavnte');
    table.float('iglklugdvr');
    table.bigInteger('wzseqnkxlj');
    table.bigInteger('xndzbglmzn');
    table.boolean('lxwfnaslfg');
    table.boolean('grpevgunnh');
  });
  await knex.schema.alterTable('nsdykdseec', function(table) {
    table.timestamp('nnycfivbiw');
    table.bigInteger('fzxnzxqjnt');
    table.string('xieaqbtlcv');
    table.integer('gtylcjzzzg');
    table.bigInteger('kpyablrexb');
    table.boolean('blydvfevou');
    table.boolean('stolbkgetl');
    table.string('madwxtpjwd');
    table.text('xzxytttmst');
    table.boolean('nslgdlmtyu');
  });
  await knex.schema.alterTable('zfnnxcdwuw', function(table) {
    table.text('vozeqfpgwc');
    table.integer('hafpzonfdy');
    table.json('gegwutkhqt');
    table.bigInteger('yqpztqwpoe');
    table.json('bqxlkzyfxh');
    table.boolean('mqckdvargy');
    table.float('pnxtawpacb');
  });
  await knex.schema.alterTable('pdpquwapxj', function(table) {
    table.string('ousfcnpowh');
    table.boolean('ffhzgvgbza');
    table.float('aekrxrbzhl');
    table.string('zanrwjokvr');
    table.float('slgkpngyik');
    table.text('erwhdnnlaz');
    table.string('naddqhmswp');
    table.bigInteger('ejhkljcjwo');
    table.bigInteger('tquuqhflic');
    table.text('hmtmowdtxd');
  });
  await knex.schema.alterTable('ijsfkhysjz', function(table) {
    table.float('tdeglllbyj');
    table.json('xwrsfucloq');
    table.integer('xuulbnroyj');
    table.float('norqcmstxs');
    table.timestamp('ecsbzbwakd');
    table.integer('dhmpfnzgct');
    table.string('vpdovgmjgj');
    table.timestamp('jcmvrjkuhd');
    table.float('egsbjsttzi');
    table.text('mwqrjdvtoa');
  });
  await knex.schema.alterTable('bfhksbrsvq', function(table) {
    table.float('xigumrwdlo');
    table.json('kutrlijuax');
    table.timestamp('ldvnpkgqef');
    table.bigInteger('jgogktqaqb');
    table.float('ayujsvztzx');
    table.string('vchsxracux');
    table.integer('onqymnahvx');
    table.text('flwderlmtb');
    table.string('lktogazxpz');
    table.text('sdrrlvqncf');
  });
  await knex.schema.alterTable('epgacyftlx', function(table) {
    table.string('hqywbpapze');
    table.text('lxykgbcjon');
    table.json('nrnelwidbw');
    table.json('boeymaepvg');
    table.json('atxdudtlzw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};