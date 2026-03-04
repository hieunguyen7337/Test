'use strict';

/**
 * Migration: 20241017121900_ulawhrwlsmxnxyj
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qcdsofphwo', function(table) {
    table.string('grrrfiohhz');
    table.json('zgbljhhimr');
    table.integer('alhjuccbso');
  });
  await knex.schema.alterTable('vezkrbcump', function(table) {
    table.bigInteger('wkyvhibwwx');
    table.boolean('sujlqvyhco');
    table.boolean('lgznljknoz');
    table.timestamp('rxuutpavpc');
    table.boolean('alpteyixax');
    table.boolean('rahrvowqnt');
    table.text('vlatafahsq');
  });
  await knex.schema.alterTable('xkdyesrrzc', function(table) {
    table.boolean('gjqpksfybg');
    table.float('covmonysaw');
    table.integer('gmrtlsymmo');
    table.string('bjvwzrthvc');
    table.text('fxxbwuvnto');
    table.text('montflirmm');
    table.integer('ezrkbuqqut');
    table.integer('wuscukprjw');
    table.text('hzxwngcchi');
    table.timestamp('lvegkiholq');
  });
  await knex.schema.alterTable('ssmwlchyuj', function(table) {
    table.float('cszmquobbo');
    table.boolean('mldokbcsji');
    table.json('lwmqxxxebh');
    table.json('yhruqhtglt');
    table.boolean('ezfawviuoz');
    table.string('swknlbsmko');
    table.json('oacstdmdku');
  });
  await knex.schema.alterTable('tmdulznwsh', function(table) {
    table.text('mkdhiznqom');
    table.integer('chqedrpcbu');
    table.json('guvzbktmkf');
    table.timestamp('aukaktcvpi');
    table.timestamp('tsdvtfosbl');
    table.boolean('xlfwmhcorm');
  });
  await knex.schema.alterTable('hkucmuyair', function(table) {
    table.boolean('txhhzytbrd');
    table.text('ofvpykpmag');
    table.float('kehahbdflv');
    table.float('qxgtsscyyy');
    table.float('ecbvffvcob');
    table.json('vjusoykhmh');
    table.float('oesxknbdzi');
  });
  await knex.schema.alterTable('qpxehitvcj', function(table) {
    table.float('pobyrukdty');
    table.integer('fwndrzmemt');
    table.text('nywvbvxhml');
    table.bigInteger('dmforixhgb');
    table.string('hvnhbolijm');
    table.float('coyyqcamur');
    table.bigInteger('mrpjrwdlrj');
    table.bigInteger('eoegqvqixk');
  });
  await knex.schema.alterTable('zuypgljcox', function(table) {
    table.integer('sxhrktbcgy');
    table.string('yzjhdfsylu');
    table.bigInteger('unzsfkwqjn');
    table.string('oaorjkaswy');
    table.text('rgbyfcrfhl');
    table.string('dbukwwvgiv');
  });
  await knex.schema.alterTable('ontyvzfbyc', function(table) {
    table.float('wvadlhivru');
    table.integer('gdizhaabrd');
    table.text('pyjjxvntrc');
    table.string('zcqhtniypg');
    table.integer('ozlshydaue');
    table.json('vdxntbchxn');
    table.text('qhudbguzoj');
    table.integer('ivowjimrow');
  });
  await knex.schema.alterTable('tqrvtfnzbz', function(table) {
    table.string('ufdrbouqwt');
    table.string('wrdocoptcl');
    table.text('eqgjdqkikk');
    table.json('oslyntilgc');
    table.boolean('vsiwefbbbu');
    table.float('qouclreefd');
    table.float('ftszmmtynr');
    table.integer('liufpawyab');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};