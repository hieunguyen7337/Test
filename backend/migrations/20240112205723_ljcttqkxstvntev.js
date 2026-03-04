'use strict';

/**
 * Migration: 20240112205723_ljcttqkxstvntev
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qrxegpdkjz', function(table) {
    table.timestamp('ftwxtzpzpe');
    table.boolean('wgbpckruoe');
    table.boolean('ffdthosojd');
    table.text('skepsqdylr');
    table.bigInteger('pobetoyjer');
  });
  await knex.schema.alterTable('geiybcwofb', function(table) {
    table.integer('adabzzcjjb');
    table.bigInteger('wwhwdnazir');
    table.string('lsinoxfavb');
    table.json('zfqorcdiem');
    table.timestamp('snjxvctczt');
    table.bigInteger('filyneswxk');
    table.bigInteger('ujyopkotxh');
  });
  await knex.schema.alterTable('jowmgeslkh', function(table) {
    table.text('zxqujnpijc');
    table.float('myeqsggxay');
    table.timestamp('uejgcrcfos');
    table.string('dmigxupyqj');
    table.text('bujzkbdbbo');
    table.timestamp('tilllqpbbc');
    table.json('yeaeuizqpj');
    table.bigInteger('hlycsqknhy');
    table.integer('bbxuecieyt');
  });
  await knex.schema.alterTable('gmnwlvyrku', function(table) {
    table.bigInteger('amjywevspn');
    table.string('tztqplhgud');
    table.boolean('ripdmsfzqs');
  });
  await knex.schema.alterTable('idgmsvzkcp', function(table) {
    table.json('wvxvxpecty');
    table.json('jplkjqqakf');
    table.integer('efwmuymmlm');
    table.text('pjyawpgffd');
    table.boolean('nphounmroi');
    table.float('ncogaaxxzr');
    table.bigInteger('phjmsejdtp');
    table.text('dsevctzsvf');
    table.text('njqmfkvjbt');
    table.json('ucwdrmaaqy');
  });
  await knex.schema.alterTable('yoihvixwyh', function(table) {
    table.bigInteger('lzzdrvdhgt');
    table.json('btsmsrzqua');
    table.timestamp('asckaeimpy');
    table.integer('nltnhfujsx');
  });
  await knex.schema.alterTable('bcsjhwsvxd', function(table) {
    table.json('mbsqjmtizg');
    table.json('vcirvvvgqh');
    table.bigInteger('vondvfiuqz');
  });
  await knex.schema.alterTable('efwmtpijfn', function(table) {
    table.text('puuwczmcgd');
    table.string('fblupcglft');
    table.float('hczstzvpxe');
    table.string('crvicoolnc');
    table.bigInteger('xnszbnondy');
    table.bigInteger('pvjownzhiv');
    table.bigInteger('hksjvzflbq');
    table.boolean('qksmbkzste');
    table.text('kjanyeskqc');
    table.float('whtzgdnkoh');
  });
  await knex.schema.alterTable('rnzrkjuevt', function(table) {
    table.timestamp('cblqlcsxsa');
    table.timestamp('fwojuvozvn');
    table.bigInteger('bxwaqwoghx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};