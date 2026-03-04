'use strict';

/**
 * Migration: 20240622153505_oyeaoftqsrvclno
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('acdcvytoyb', function(table) {
    table.json('cpbimogvsj');
    table.float('hlrdsjuxfp');
    table.json('ysszpnzvea');
  });
  await knex.schema.alterTable('dvdwsrwclj', function(table) {
    table.string('dkixlckedp');
    table.json('cnpvosyaij');
    table.string('qfkxznbxtr');
    table.json('rqosmklbxr');
    table.timestamp('sygxlozwfp');
    table.float('vtohohuftk');
    table.string('mepsvgsxmq');
    table.float('glxgycpkxx');
  });
  await knex.schema.alterTable('zkksnqqaop', function(table) {
    table.string('dmyknhfsgt');
    table.text('elttejpizq');
    table.text('xwngqagviu');
    table.text('txnsomhurw');
    table.float('dqhbjsuogb');
    table.json('mndulzkqty');
    table.text('nkognhxdmt');
    table.timestamp('frqakxorms');
    table.text('uszbnfwtxw');
    table.integer('nxnlfakguf');
  });
  await knex.schema.alterTable('ezepfsbgok', function(table) {
    table.bigInteger('tbbhzwnoyq');
    table.timestamp('ggyqfnhlzn');
    table.bigInteger('ubvoydbwxt');
    table.integer('pbcaovhiwf');
    table.text('burxjxfpfr');
    table.boolean('hkiadpylzi');
  });
  await knex.schema.alterTable('kpubtsuxmo', function(table) {
    table.text('tdjikmjtrq');
    table.timestamp('neywznywsh');
    table.float('ffqxupmezv');
    table.float('wymaczetnx');
    table.string('qtrmrrgetq');
    table.timestamp('uocitxnron');
    table.timestamp('fjcuazmoke');
    table.integer('wlekjdemtt');
  });
  await knex.schema.alterTable('jygtfmrkca', function(table) {
    table.text('gezoviloxb');
    table.boolean('amikjokphc');
    table.text('ifnynsarcv');
    table.text('favpqexcro');
    table.timestamp('doaoxopfdt');
    table.bigInteger('tkipqeavof');
    table.float('xfrrnxewet');
    table.bigInteger('gbefnlmjaf');
    table.json('kslypnopre');
  });
  await knex.schema.alterTable('ftyedagdmb', function(table) {
    table.text('hvntobrxmg');
    table.string('hhbfxxxoec');
    table.text('wcdkcizcwx');
    table.text('rqbcimnipl');
    table.string('tgkkjcrlrj');
    table.string('upfhwvqrtc');
    table.float('tucdgwdxdk');
    table.string('kkaflndnqz');
  });
  await knex.schema.alterTable('kyivapvjgo', function(table) {
    table.boolean('rudueupngr');
    table.text('ghjsbtrldh');
    table.json('hejjufbfyn');
    table.text('sutkfjwhmf');
    table.text('zghewyewgk');
    table.timestamp('zploynyado');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};