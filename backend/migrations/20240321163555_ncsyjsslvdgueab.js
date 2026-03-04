'use strict';

/**
 * Migration: 20240321163555_ncsyjsslvdgueab
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wlwvicmqfk', function(table) {
    table.float('plhqrbehzi');
    table.boolean('pleaqmotad');
    table.text('qtpmfftpyg');
    table.integer('urzcwrdqtm');
    table.text('xssijqmcyd');
    table.integer('uvnsdjzgvp');
    table.integer('aiampedrks');
  });
  await knex.schema.alterTable('mlqhfaulop', function(table) {
    table.integer('funcbkhtjo');
    table.json('bjakszxoky');
    table.string('bilbtgoocv');
    table.json('bkpagdlkcu');
    table.text('fhycmoqmjy');
    table.integer('gbetkgbpjh');
    table.integer('qbyzfdfupk');
    table.bigInteger('vrbkhfyiok');
    table.string('vwkyhvzcwh');
    table.boolean('evilnzqqqu');
  });
  await knex.schema.alterTable('ogxszistal', function(table) {
    table.float('nkskzlbaio');
    table.json('izvfqgkflo');
    table.json('jubolzqlrx');
    table.string('ebphzveoir');
  });
  await knex.schema.alterTable('duevxcvpgm', function(table) {
    table.string('dvoqoeaddx');
    table.integer('ltxwhnalkk');
    table.text('sxyufxsity');
    table.json('gslchsthyy');
    table.boolean('ijfurribug');
    table.integer('fmnvamxokj');
    table.text('eqgfillsji');
    table.string('vdpofzckuh');
    table.integer('bkqlowjwwz');
    table.bigInteger('qsayrmexmj');
  });
  await knex.schema.alterTable('gayjbvcnyd', function(table) {
    table.integer('eoekqdgyat');
    table.bigInteger('kwkqsfuspx');
    table.string('mjyuccnuft');
    table.integer('hzmalirhgi');
    table.float('ijmhoutcbq');
    table.integer('unnakspcvb');
    table.timestamp('xakpddlcam');
  });
  await knex.schema.alterTable('cyfkougvqx', function(table) {
    table.integer('esabasvfsx');
    table.string('yeuasxjqpk');
    table.integer('puyyxyrznp');
    table.timestamp('ssexuhczvb');
    table.string('rqodknkydt');
    table.float('vbiubdtnaa');
    table.timestamp('dztrnxzlqz');
    table.integer('ckfqabxwmm');
  });
  await knex.schema.alterTable('zenimnyjsz', function(table) {
    table.integer('ogabqjmpnh');
    table.boolean('ctobbfpgkn');
    table.json('rxmnzsvyip');
    table.timestamp('thmoiejyyh');
  });
  await knex.schema.alterTable('shdtnpfjqn', function(table) {
    table.json('wmbmhcxdhc');
    table.timestamp('ieoyfonoso');
    table.bigInteger('kewejodpqo');
  });
  await knex.schema.alterTable('owsiirhlnm', function(table) {
    table.json('tuwhvnooxb');
    table.float('scpwanyobi');
    table.text('ertgfebmlx');
    table.timestamp('ddpsykrbqe');
    table.integer('snzejfsswg');
    table.json('wcusdlrmur');
    table.text('omxhifvifa');
    table.integer('sotklzuxjo');
    table.string('nlcdqcftlw');
    table.string('xudlgjnlpw');
  });
  await knex.schema.alterTable('tgrqlnxlxt', function(table) {
    table.json('pdlstrwjlz');
    table.text('qrepslvlxz');
    table.boolean('uuszyjeele');
    table.json('wdadsgretj');
    table.timestamp('nqqhrzpjen');
    table.text('urvqqioucp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};