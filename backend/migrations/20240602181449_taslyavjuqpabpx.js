'use strict';

/**
 * Migration: 20240602181449_taslyavjuqpabpx
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aqpzollbfy', function(table) {
    table.integer('gbyencxbyo');
    table.json('fzbbdpzmoz');
    table.json('elkvamuzpv');
    table.timestamp('fgpgzmwvxe');
  });
  await knex.schema.alterTable('upkdueicaf', function(table) {
    table.integer('hhtmqsxlog');
    table.text('lqottxrofy');
    table.timestamp('wiqabeljjb');
    table.text('iiekvrtlra');
    table.timestamp('dhekhhefpa');
    table.json('szvxpaxmwt');
    table.float('preruagfar');
    table.timestamp('tcpbjwihlq');
    table.bigInteger('dtzcjvfbva');
    table.integer('lzsjtkuzxv');
  });
  await knex.schema.alterTable('umontnkyqx', function(table) {
    table.text('ckjpetywkw');
    table.bigInteger('hycuaamdiz');
    table.integer('vdmhewxtoa');
    table.bigInteger('ovnlwdrqjd');
    table.timestamp('dqyggwaint');
    table.bigInteger('ezjxmpzhvg');
    table.json('oynlmenvdq');
    table.string('txwwqgsdco');
    table.timestamp('nqqozdbuax');
  });
  await knex.schema.alterTable('ahcvgmvxpr', function(table) {
    table.float('chbgeszuog');
    table.timestamp('jawbbscpmk');
    table.json('lyjmykuocj');
    table.string('aoqydyqwwm');
    table.float('wgbpomnegl');
    table.timestamp('psiujcnvxd');
    table.string('ltdnpqqcez');
    table.json('mzhskelosx');
    table.boolean('vtxthicanu');
    table.boolean('hayncxckiw');
  });
  await knex.schema.alterTable('meseizpbfy', function(table) {
    table.boolean('krjhnmqnjk');
    table.float('svxqtgufwr');
    table.integer('chgvlyacxr');
    table.integer('srzfmbubtr');
    table.timestamp('dtmhmndabh');
    table.bigInteger('nwhdwalecq');
    table.text('yhdwqvyzrx');
  });
  await knex.schema.alterTable('gngvbzjojg', function(table) {
    table.text('vmkigjrnpz');
    table.bigInteger('kyukxxdnze');
    table.integer('ifmwbgpzyl');
    table.bigInteger('tzyfblgirr');
    table.bigInteger('njnnpksyrx');
    table.bigInteger('pjiprsjqxm');
    table.integer('uwxkkgamef');
    table.boolean('gynygiuuwl');
    table.bigInteger('kfhghzbitk');
  });
  await knex.schema.alterTable('dbappfoqes', function(table) {
    table.float('wvllqxzqhj');
    table.integer('vttoqbhmkr');
    table.timestamp('oylbqwzwte');
    table.string('lonyfoawye');
    table.float('ofafzjlpfj');
    table.timestamp('seiugwbwaf');
    table.float('ywzdvbwypb');
    table.text('qpmlsjlehq');
    table.bigInteger('hbkcylbfsc');
    table.string('afvdfghchf');
  });
  await knex.schema.alterTable('jftvkvicvh', function(table) {
    table.float('pnqxqclhqu');
    table.timestamp('wyeybomuqq');
    table.integer('omkxkumwto');
    table.integer('ljuycmlomy');
    table.timestamp('lavweujfjq');
    table.bigInteger('pshupfslji');
    table.string('ilsrspeiuc');
    table.text('oqivkjrkoe');
    table.string('yytquxzjbs');
  });
  await knex.schema.alterTable('laembkbucb', function(table) {
    table.string('lzzxtstqzp');
    table.float('mblliygwrb');
    table.text('govnoyqspo');
    table.integer('mepotculob');
    table.boolean('zftopkwlye');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};