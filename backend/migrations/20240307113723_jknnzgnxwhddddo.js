'use strict';

/**
 * Migration: 20240307113723_jknnzgnxwhddddo
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kmljfhvkip', function(table) {
    table.text('pnkvxcoeey');
    table.integer('hdgzcelcgo');
    table.bigInteger('oqlynrjtej');
    table.string('kchcbvyveb');
  });
  await knex.schema.alterTable('zoyhbnkfvh', function(table) {
    table.text('pfpuosmtyy');
    table.float('dftyqkvvhv');
    table.string('vutacqobmc');
    table.boolean('gvshfnktpe');
    table.bigInteger('sbyvgehydq');
    table.boolean('yjemlkmtrx');
  });
  await knex.schema.alterTable('cleqcybglb', function(table) {
    table.string('xuwregkiqy');
    table.timestamp('liwjqlascu');
    table.json('ggdxzpgfzp');
    table.text('ubbtotyfup');
    table.timestamp('ajlltliuom');
    table.string('fjqvblnnix');
    table.json('cqeyynkdvw');
    table.text('cawwjukwoc');
    table.text('vhityyxesh');
    table.bigInteger('lfvmxhjdby');
  });
  await knex.schema.alterTable('erzizpaxph', function(table) {
    table.bigInteger('urjvdislnf');
    table.text('pvfoysbzyf');
    table.bigInteger('cugakwfbuv');
    table.boolean('ttbajvgwpx');
    table.integer('wgtfszptew');
    table.json('rfthvixbbt');
    table.string('btannwcksj');
    table.bigInteger('joiyolpsoh');
    table.integer('nrbksglvwe');
  });
  await knex.schema.alterTable('vskadcxflb', function(table) {
    table.integer('lybgqrawwf');
    table.float('noskziwhai');
    table.float('hksnoyaxqv');
    table.integer('zjnejjplmy');
    table.float('cwozlxiuwq');
    table.integer('pexsmyppmp');
    table.text('xhrjojqmia');
    table.bigInteger('rwwmengmsl');
    table.timestamp('fhlejnzniu');
    table.boolean('rmafjwvrze');
  });
  await knex.schema.alterTable('iqicglimkc', function(table) {
    table.float('soxlsrqkrf');
    table.integer('wxzlyorqah');
    table.float('qvldjdermo');
    table.json('yfwoglrpmp');
    table.float('dlhinlvibf');
    table.text('eqvhvsvcnk');
    table.json('oimmhbsiik');
    table.float('bsfdnocxkw');
    table.string('heziqoaaxi');
  });
  await knex.schema.alterTable('riwpkdxhyr', function(table) {
    table.json('qdmizwyxgl');
    table.boolean('nunazwjpum');
    table.integer('exmaicnbxu');
    table.text('ohihxmwvro');
    table.text('fgjxoxmpzk');
    table.string('vvuytllbds');
    table.timestamp('mhvboofzki');
    table.float('epweobibae');
  });
  await knex.schema.alterTable('merqjgvikz', function(table) {
    table.boolean('nmgjjewvxk');
    table.json('aqoydbudpq');
    table.float('ynsynbrxvz');
    table.boolean('hiookdzmpj');
    table.boolean('yssfczjgcg');
    table.integer('sfolquyjsx');
    table.text('zzzpreuldo');
    table.boolean('ehiofglrpq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};