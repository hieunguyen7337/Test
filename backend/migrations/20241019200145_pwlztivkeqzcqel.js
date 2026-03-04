'use strict';

/**
 * Migration: 20241019200145_pwlztivkeqzcqel
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mhsdlgykor', function(table) {
    table.boolean('ewjkvynrjn');
    table.float('cmorztpekj');
    table.float('wjdkniqvmt');
    table.integer('onbxytcklx');
    table.string('gtteptkfxm');
    table.float('fzrzboxcrp');
    table.string('cvyiidnoao');
  });
  await knex.schema.alterTable('ybcwbvziyz', function(table) {
    table.string('qxuaroywqb');
    table.json('kpltsbgcat');
    table.bigInteger('ddopwjhkxy');
    table.timestamp('vizrxniioa');
  });
  await knex.schema.alterTable('lxmiqbqwsh', function(table) {
    table.float('qtutlfkztj');
    table.json('pfrgmyeghv');
    table.bigInteger('ztbrazmfgz');
    table.text('stfovzjhlp');
    table.boolean('yhddpkhvmo');
    table.boolean('lmyhhedblp');
    table.text('jwnltxczew');
    table.text('fiyminrxml');
    table.bigInteger('xygazhwawq');
  });
  await knex.schema.alterTable('yzqrjcmnol', function(table) {
    table.boolean('nozkwsrcxu');
    table.bigInteger('hkmewyxdgf');
    table.string('rgiplmekmv');
    table.float('gkmuwydspw');
    table.integer('eznanmcqfz');
    table.float('huuqsxiecv');
  });
  await knex.schema.alterTable('bmtnnpufvy', function(table) {
    table.text('ycviuavydi');
    table.string('xdqtefueee');
    table.float('gumeakbwgn');
    table.json('uooykbojuj');
    table.text('tthvvzloty');
    table.bigInteger('djmvepyknh');
    table.bigInteger('jvqcbnvxio');
  });
  await knex.schema.alterTable('ltdnnajnot', function(table) {
    table.float('ndcedhlqhh');
    table.integer('hgfubkggab');
    table.boolean('zkqskgqvfy');
  });
  await knex.schema.alterTable('bgyvbrerin', function(table) {
    table.timestamp('idnumgsash');
    table.integer('gmbzuaxzci');
    table.bigInteger('krqkllnjaa');
    table.json('dqtfbznrbv');
    table.bigInteger('pixphxqktn');
    table.text('vkmnndgibn');
    table.boolean('ranzwqndis');
    table.bigInteger('kkkjtzaqyo');
  });
  await knex.schema.alterTable('hpmnsbskdw', function(table) {
    table.bigInteger('mndfpeiyfg');
    table.timestamp('mmpnvrosay');
    table.json('dlqgesmoow');
    table.json('balvvemjkr');
    table.boolean('owddkouqib');
    table.string('yrraemnpnw');
    table.json('voxupkjyoo');
  });
  await knex.schema.alterTable('tffkhdnlqc', function(table) {
    table.json('pphswybvcl');
    table.text('pmuowbxdoe');
    table.integer('htvdjtdmxy');
    table.boolean('resqmwfele');
    table.string('whduxmzhuj');
    table.string('sviiloeuug');
    table.text('xixqestqpq');
    table.string('uggtngjrkq');
  });
  await knex.schema.alterTable('qdiswldzwg', function(table) {
    table.timestamp('mkixoaszfl');
    table.text('ikjhjlppti');
    table.string('smdawwitzg');
    table.integer('nnusodjsvt');
  });
  await knex.schema.alterTable('thaqgrhvvn', function(table) {
    table.boolean('dbnlkqpqjd');
    table.json('rhliigeobh');
    table.float('gohmqfanwd');
    table.string('nytawoejkc');
    table.string('zbpujkunly');
    table.float('nxtckdrrmc');
    table.text('owazvdjgzz');
    table.text('utzwletjah');
    table.timestamp('psshrontgp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};