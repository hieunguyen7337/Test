'use strict';

/**
 * Migration: 20240825063149_rsbbhbgbblksbje
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('poxgfnhvce', function(table) {
    table.integer('drxysngymh');
    table.bigInteger('avhnmrjbtv');
    table.integer('xtyxzfrrgv');
    table.bigInteger('javdeqyllw');
    table.boolean('rcpbfohdmz');
    table.text('orckhaachz');
    table.string('oshskvtdnc');
  });
  await knex.schema.alterTable('inemoqwyxp', function(table) {
    table.boolean('vfqcgtqbjr');
    table.boolean('umctyiabjm');
    table.string('zodcdgncfm');
    table.text('brvrpiichr');
    table.integer('axedzpaeut');
    table.bigInteger('bsmudgjfjd');
    table.bigInteger('yplefffgan');
    table.bigInteger('jdlrcxcayx');
    table.float('gnydhuxebn');
    table.bigInteger('lzggaljipl');
  });
  await knex.schema.alterTable('oujsfcqhbc', function(table) {
    table.string('hxeaslgopz');
    table.boolean('albsajiahq');
    table.integer('ajdeigtuvd');
    table.timestamp('wrefuypwys');
    table.timestamp('fltjmqinia');
    table.string('lcllvvdukz');
    table.float('ouxbfypwia');
    table.boolean('zwkprysouq');
    table.timestamp('gyuxziuctu');
  });
  await knex.schema.alterTable('xkncwrrnga', function(table) {
    table.json('juhxmdibrt');
    table.boolean('hgboejuiwt');
    table.string('ojedegnzff');
  });
  await knex.schema.alterTable('lsojntdzlu', function(table) {
    table.integer('mfxhdujinm');
    table.text('igbijkhuqo');
    table.json('qhcggazpvx');
    table.integer('rwepopvlvt');
    table.json('jszxzyzzam');
    table.string('kjumyjuboi');
    table.string('mlodqixmvg');
    table.boolean('mypmrbwvyf');
    table.timestamp('atqauzoyww');
  });
  await knex.schema.alterTable('ichjcsapin', function(table) {
    table.string('fbmxlnnurj');
    table.timestamp('aooifquryx');
    table.json('waiwpjiagc');
    table.timestamp('vzrrujpdll');
    table.timestamp('poabqnwugw');
    table.bigInteger('eeguyjsjgi');
    table.timestamp('dtxgfygbsp');
  });
  await knex.schema.alterTable('lwnzgwthtt', function(table) {
    table.integer('tafeqrdkjm');
    table.float('strigrjzql');
    table.string('zmkmqtqxhj');
    table.string('scpwehlzzx');
    table.text('vlazybmknx');
    table.string('tdbtuheecb');
  });
  await knex.schema.alterTable('hkgcbdhxci', function(table) {
    table.string('adjvufmhgf');
    table.boolean('kvrrbbpkdm');
    table.string('xqpopfaegs');
    table.float('pxrxjacamy');
    table.timestamp('hdqxuwsvma');
    table.timestamp('cmlwjrlpuf');
    table.string('vkfzhgytdu');
  });
  await knex.schema.alterTable('hxowzqktjq', function(table) {
    table.integer('chzmptvtdz');
    table.integer('tilsagbtpt');
    table.boolean('sblmffvkei');
    table.json('coqsxiaztv');
    table.json('daymxatrak');
    table.timestamp('wqnruiwbnt');
    table.timestamp('qyupskluuf');
  });
  await knex.schema.alterTable('hsgerpljse', function(table) {
    table.text('clewaqffif');
    table.float('ululswktpp');
    table.integer('ofrtxtdutd');
    table.bigInteger('tvaxyykbcm');
  });
  await knex.schema.alterTable('wgqopmwlmx', function(table) {
    table.text('vcwcyxmhax');
    table.bigInteger('cmbkloqize');
    table.timestamp('docyousips');
    table.bigInteger('bpeifqwhlc');
    table.string('gocobjzjwa');
    table.text('lweqnksqze');
    table.boolean('lwnmraredp');
    table.text('hwyggknwns');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};