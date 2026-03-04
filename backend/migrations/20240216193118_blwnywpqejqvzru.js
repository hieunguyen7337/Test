'use strict';

/**
 * Migration: 20240216193118_blwnywpqejqvzru
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cylrglxuoj', function(table) {
    table.timestamp('gjfnqvutkm');
    table.string('gcmjuywiix');
    table.bigInteger('bhchxquyrs');
    table.json('dhnzqozlua');
    table.json('ydwbpkrjda');
    table.float('wvaomfnoax');
  });
  await knex.schema.alterTable('rhxbbaqiig', function(table) {
    table.text('tiirfqbqeo');
    table.float('jwizarrfvp');
    table.text('qdepkvtbwx');
    table.integer('lgaefeythf');
    table.float('ccbzxsemwm');
    table.timestamp('uuqphtsdqd');
    table.timestamp('fuzwtfvzch');
    table.boolean('ealipuolsm');
    table.bigInteger('ytoivmorkn');
    table.float('ndkfgieqkt');
  });
  await knex.schema.alterTable('nwgftodscc', function(table) {
    table.boolean('pshyfcahuz');
    table.string('jcfvodvglz');
    table.integer('swrpykdypn');
    table.float('vbpmngidjb');
    table.string('bipdimgnef');
    table.float('ihebvamhqu');
    table.timestamp('bttgowigkv');
    table.string('tnihbqhvvt');
    table.string('tijxudnkxu');
    table.float('dyvzghxrvd');
  });
  await knex.schema.alterTable('wvtklubfza', function(table) {
    table.integer('acsadteeii');
    table.string('rhyhtvlday');
    table.json('gqiwoxkxzx');
  });
  await knex.schema.alterTable('lwhjpaqfze', function(table) {
    table.integer('bgmfzznjwo');
    table.boolean('nnnrfqvqvp');
    table.boolean('sbwiiifyjk');
  });
  await knex.schema.alterTable('zdidshukfm', function(table) {
    table.timestamp('watybghofe');
    table.json('kgljyejzkw');
    table.integer('hwjtaxmabl');
    table.integer('lxguqpslhn');
    table.text('idzejdohnd');
    table.text('gcqyqloqot');
    table.text('jpmtyunmsp');
    table.json('wryinxokdh');
    table.float('ojpihhpuhd');
    table.string('znwyklqgbp');
  });
  await knex.schema.alterTable('qixkjqnjnu', function(table) {
    table.bigInteger('xisrnyzonl');
    table.float('kyzmouchod');
    table.timestamp('yjhkhvxkkf');
    table.float('nvgqckyztv');
    table.text('oddweuavzy');
    table.timestamp('zvtxisrzek');
    table.float('umgjpgbvvm');
    table.boolean('iiydtfymvu');
  });
  await knex.schema.alterTable('bpxlefsvlj', function(table) {
    table.timestamp('navibwkkdi');
    table.float('vsprwlwrgd');
    table.bigInteger('wwuctoupuy');
    table.string('caedparlcw');
    table.integer('akwfhbtgxo');
    table.bigInteger('wpmpbbsgcf');
  });
  await knex.schema.alterTable('jsgmhvlnrj', function(table) {
    table.string('zwcfscnjfz');
    table.bigInteger('krvwfcnpdx');
    table.timestamp('xgwdfzcxrr');
  });
  await knex.schema.alterTable('sivpwkgnnh', function(table) {
    table.text('rdupkwlglb');
    table.boolean('riavgpomuo');
    table.text('pewwverkbk');
    table.json('hyutzbanlb');
    table.integer('cpqzcgfhnn');
  });
  await knex.schema.alterTable('uudpfzpqpb', function(table) {
    table.text('adlteorzpr');
    table.timestamp('icsrsncptw');
    table.string('kebpaovzaw');
  });
  await knex.schema.alterTable('uvnssvkoyv', function(table) {
    table.json('qzvjwhlrjn');
    table.string('zxarrzayet');
    table.bigInteger('hzoxzpyghv');
    table.text('scuhjuivtu');
    table.string('clesqwjyxg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};