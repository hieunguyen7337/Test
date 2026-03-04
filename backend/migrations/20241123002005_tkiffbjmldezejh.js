'use strict';

/**
 * Migration: 20241123002005_tkiffbjmldezejh
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ifvildocir', function(table) {
    table.boolean('abqiojjqna');
    table.string('mowlsiwfms');
    table.string('alrsyxinfv');
    table.integer('erzafktxlu');
    table.float('jswhlrjalg');
    table.integer('czjnexikzd');
    table.timestamp('dcvweqjnpg');
    table.timestamp('kwofvyehmm');
  });
  await knex.schema.alterTable('iamxlxmyan', function(table) {
    table.json('geebpqkrbo');
    table.bigInteger('ontwfpcsvr');
    table.bigInteger('pqlcyqrepv');
    table.text('oulyqdsuxk');
    table.json('afutnlkgyd');
    table.text('tllvyvnpvv');
    table.json('jahiuxrhef');
    table.timestamp('jnmfqprynb');
  });
  await knex.schema.alterTable('mvrtracmrv', function(table) {
    table.integer('avzdxefkda');
    table.float('blowzvtann');
    table.timestamp('opakbuoomw');
    table.boolean('ajeakjwowk');
    table.timestamp('dvmqvvlztb');
    table.float('zheimhtwsr');
    table.float('tazmnudptf');
    table.bigInteger('ztliqzfheo');
    table.bigInteger('diwfaxnutu');
  });
  await knex.schema.alterTable('lkjrsgplxs', function(table) {
    table.float('nqgerytrdo');
    table.integer('bxfllkcxok');
    table.integer('qvsgxaovan');
    table.text('fszaldkhfu');
    table.integer('bppjtxybdu');
    table.timestamp('ptnpcuceua');
    table.string('mylpsquwka');
    table.timestamp('vupzhibqrw');
    table.integer('dcvanpedyg');
    table.json('kxfvpqjgxh');
  });
  await knex.schema.alterTable('wrseecinck', function(table) {
    table.float('tnaxorvsut');
    table.timestamp('kqhmhvuxdg');
    table.float('ozjzfnffxe');
  });
  await knex.schema.alterTable('gprmdmbmyp', function(table) {
    table.json('yitzngjusb');
    table.timestamp('olancbodrw');
    table.integer('xgijghmyjc');
    table.bigInteger('pkocqwnosh');
  });
  await knex.schema.alterTable('uonmsnwmbd', function(table) {
    table.timestamp('lzwzpevfmm');
    table.boolean('qllafvkjli');
    table.timestamp('jihrpvtgwp');
    table.float('wvdtidxuqc');
  });
  await knex.schema.alterTable('pwyujdavya', function(table) {
    table.string('vtelwglejc');
    table.float('whpxqfgrxo');
    table.boolean('ftedeuxsdj');
    table.float('uytftsrcqf');
    table.json('lgunlefnnh');
    table.boolean('mmzyoftkak');
    table.float('gcbjznlamj');
    table.string('kouplualox');
    table.integer('dqwasuxqdn');
    table.json('sbqgphnnzm');
  });
  await knex.schema.alterTable('bauaqwnsdo', function(table) {
    table.text('pkheitizrx');
    table.timestamp('urjnkvcuor');
    table.float('nkxthqsqyc');
    table.boolean('nxfaftvwna');
    table.float('jjksiijbzn');
    table.bigInteger('bwuqvxjfjd');
    table.string('kgnkpxvyrt');
    table.integer('fauyclqzwy');
    table.integer('haietctpyc');
    table.text('qmbkuaigoi');
  });
  await knex.schema.alterTable('vlgjnnxhzp', function(table) {
    table.json('spgqbjglgf');
    table.timestamp('dgzizimxpd');
    table.string('nmqxcvzkqy');
    table.float('pjkxwadizw');
    table.boolean('txwxvwdvbw');
    table.integer('ixvoczywuh');
    table.timestamp('kovviddwmm');
    table.boolean('uxdwrsxchf');
    table.json('ykatnllleg');
    table.boolean('ihkprcxnub');
  });
  await knex.schema.alterTable('htarbmzbzj', function(table) {
    table.boolean('gpjtlpajwt');
    table.integer('hxumrlvdhv');
    table.text('prlfqfntvu');
    table.timestamp('kzfuuojfjj');
    table.text('rabwtbyxon');
    table.json('swucvolbie');
    table.integer('yluhohspud');
    table.string('zgjfufxnmb');
    table.string('rjdukijmaq');
  });
  await knex.schema.alterTable('mpzrdgkukv', function(table) {
    table.float('jnnugjqqlo');
    table.float('pkfdkzdfjr');
    table.integer('acrefvygto');
    table.text('ixiqzfbini');
    table.integer('dhvkfqncru');
    table.text('kvmlxfgshy');
    table.bigInteger('qyhqqgayql');
    table.float('mzyffmhsab');
    table.float('rnuwaofkqm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};