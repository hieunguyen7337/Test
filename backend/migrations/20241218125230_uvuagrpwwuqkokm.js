'use strict';

/**
 * Migration: 20241218125230_uvuagrpwwuqkokm
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jgerkpnnff', function(table) {
    table.json('tlmcmznwar');
    table.integer('tkvdeowwlg');
    table.bigInteger('wzyurzxgyc');
    table.float('vuldrgbxjf');
    table.bigInteger('dlmkskibwm');
    table.bigInteger('solodkzldf');
    table.bigInteger('enfoiuejhl');
    table.boolean('ngxejbomxo');
    table.json('vvynjcoyea');
  });
  await knex.schema.alterTable('fsfqkderkc', function(table) {
    table.json('paceafenkl');
    table.string('blrruifxdl');
    table.integer('bylfxjezxx');
    table.boolean('unupxjhsif');
    table.json('qeidkvsrcj');
    table.bigInteger('ammnblpodg');
    table.boolean('mzskqbbplt');
    table.text('rfylvthoqv');
  });
  await knex.schema.alterTable('xayrtisksd', function(table) {
    table.string('nzkgwyhcal');
    table.text('wktpnkxgsh');
    table.boolean('szdizjlrre');
    table.bigInteger('vwixgktfsb');
    table.string('uwdmgdhxuu');
    table.json('arwgfgpnua');
    table.timestamp('amicbjwtmc');
    table.text('ycvryokixt');
    table.json('puortevwbu');
  });
  await knex.schema.alterTable('zukznhamhb', function(table) {
    table.bigInteger('uelkgcgqpo');
    table.integer('nvyrwkyaot');
    table.bigInteger('bbsolggfqd');
    table.timestamp('fasxwxfbwy');
    table.float('igohheufjp');
    table.float('bswlnxgzlg');
    table.boolean('tydqynsdsi');
    table.float('yfurnvllin');
    table.float('wrtjturlst');
    table.float('vjqekbrltr');
  });
  await knex.schema.alterTable('uzwzvtfmel', function(table) {
    table.json('rahrsmspgq');
    table.text('ksaolgsdnd');
    table.boolean('xpingazagz');
  });
  await knex.schema.alterTable('zgdehyvtsr', function(table) {
    table.string('gwtogqzszx');
    table.json('ugzujmqdvh');
    table.text('xuzlxtjqni');
    table.boolean('dhkxlipqvt');
    table.timestamp('tnnclhksyu');
  });
  await knex.schema.alterTable('tdhxqhfyfd', function(table) {
    table.string('xmyccrtkqd');
    table.json('jqbnzmossq');
    table.text('cmpkmwbxdo');
    table.text('xmedzoinkr');
    table.json('ejkbiehkwv');
  });
  await knex.schema.alterTable('zglpcxakcn', function(table) {
    table.bigInteger('oeprvvwsxq');
    table.bigInteger('bjjcsapcdw');
    table.timestamp('cguxuouwhj');
  });
  await knex.schema.alterTable('msaaslhpyx', function(table) {
    table.json('wgcakkkdbr');
    table.json('eginndnrwc');
    table.text('wzrkrmebef');
    table.boolean('avmhwvzfew');
    table.timestamp('ucsqjsguax');
    table.text('sjlyynxmpp');
    table.text('jyrprqvosv');
  });
  await knex.schema.alterTable('rdcvxuihfn', function(table) {
    table.integer('iynvysfebx');
    table.string('qxgddgyxif');
    table.float('ydqilaxjkr');
  });
  await knex.schema.alterTable('bmzyvkcjpo', function(table) {
    table.bigInteger('vxelzevnza');
    table.timestamp('uefzmbkhhh');
    table.text('xccifxdsbt');
  });
  await knex.schema.alterTable('ybnwulelhc', function(table) {
    table.integer('vjzykbsagi');
    table.json('axzdvbquex');
    table.bigInteger('zcrjcpfllm');
    table.string('ytoineueot');
    table.integer('cdrrxpdmyv');
    table.bigInteger('owepswlxhp');
    table.boolean('zywawgacwu');
    table.integer('skqlmdkyen');
    table.text('htpdumxfbu');
    table.string('vqovosujrs');
  });
  await knex.schema.alterTable('mgcnhcgali', function(table) {
    table.integer('soizxygxns');
    table.integer('obldbkuvpq');
    table.json('mnqsblygid');
    table.json('tatmjbeopk');
    table.json('viqysyvmdi');
    table.text('hxgemacphp');
    table.string('gafzextazp');
    table.boolean('twbajtiikl');
    table.float('zuoecvoemy');
  });
  await knex.schema.alterTable('wyswcgcayd', function(table) {
    table.timestamp('ekgpfzzttr');
    table.boolean('anlkiqfybh');
    table.integer('jhfpvdxble');
    table.boolean('kyytsgotfs');
    table.json('lbkljrpzwi');
    table.text('ufdeboxflh');
    table.string('cgyjlajpdo');
    table.float('dytujawyyf');
    table.timestamp('yxfrszoyiu');
    table.bigInteger('lkmfmgnuzt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};