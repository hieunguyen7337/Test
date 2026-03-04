'use strict';

/**
 * Migration: 20240123011219_xzfudgwshhkywzf
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iznubityvi', function(table) {
    table.boolean('xipmyzdjvt');
    table.integer('ekokbjyqpp');
    table.boolean('edoenswsji');
  });
  await knex.schema.alterTable('gchmxviavu', function(table) {
    table.float('ffzodkcnij');
    table.timestamp('bkwtaaqlhk');
    table.integer('uimmeqdzbx');
    table.boolean('awybfhqukw');
    table.integer('kawhaikjmr');
    table.json('ucryejywsk');
    table.float('dcrsjvxnxe');
    table.json('axtfuyvsug');
    table.string('ywsewxbsbb');
    table.string('ttjroxhlmj');
  });
  await knex.schema.alterTable('ulmnyywrkr', function(table) {
    table.text('lrqgtfudln');
    table.json('kyulynhczt');
    table.float('cteqdxanwz');
  });
  await knex.schema.alterTable('rbygdarpba', function(table) {
    table.timestamp('nicpnaptli');
    table.text('umecldflft');
    table.bigInteger('ecbgimqmkm');
    table.timestamp('hichqsnmnc');
    table.text('zdktejerpe');
    table.integer('ifbmqgzmjf');
    table.integer('uiilwbkirg');
    table.timestamp('mhoniehevi');
    table.timestamp('ztwoygtqus');
  });
  await knex.schema.alterTable('kthqgjmpry', function(table) {
    table.string('taqrjuzmyq');
    table.float('xyzscnokoi');
    table.boolean('aldvidtfbu');
    table.float('smwrwzxpcz');
    table.bigInteger('menhxskpme');
    table.integer('hxavrciafa');
    table.boolean('xgmcevsshx');
    table.text('zfyofzevxd');
  });
  await knex.schema.alterTable('mugvlpgwuq', function(table) {
    table.bigInteger('xprjpfvaih');
    table.float('auopxfyqpr');
    table.integer('vyfvmwmeao');
    table.bigInteger('sjnqswocao');
    table.float('tqsgjndjxl');
    table.string('xnxlbryrpe');
    table.text('eqqtqvuieo');
    table.integer('hchtkhpnoq');
    table.string('payjuvwalv');
    table.boolean('qzbilumzfk');
  });
  await knex.schema.alterTable('zpomzkbzqg', function(table) {
    table.json('pgxcecelsb');
    table.float('cnharmrkwy');
    table.string('sbxcmhhaka');
    table.json('bsxewjgovq');
    table.json('nowuixrssb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};