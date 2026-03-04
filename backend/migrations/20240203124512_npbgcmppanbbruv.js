'use strict';

/**
 * Migration: 20240203124512_npbgcmppanbbruv
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cemwjezvon', function(table) {
    table.string('lbxqkulona');
    table.json('rpelisghkr');
    table.bigInteger('clzzjhqqdo');
    table.string('vtwmdgfvhe');
  });
  await knex.schema.alterTable('ysedsqacpk', function(table) {
    table.boolean('bnzbbmgovv');
    table.boolean('xqtrqwnkua');
    table.float('gwdsmfkifb');
  });
  await knex.schema.alterTable('qhbzwoctxt', function(table) {
    table.integer('cdirflnqib');
    table.string('fxhugtsbdl');
    table.string('qxhlpftdkg');
    table.bigInteger('oqnljencly');
    table.integer('jlzcheofbx');
    table.boolean('rpqmmexfbr');
    table.text('nodcduzzpt');
    table.string('ildtodhvyc');
  });
  await knex.schema.alterTable('ghsbaqanih', function(table) {
    table.bigInteger('hpszvvelij');
    table.integer('fdsyplnbey');
    table.timestamp('wvflcicwmd');
    table.json('ewiwmqfzar');
    table.bigInteger('cafbncizpk');
    table.float('afakcqklug');
    table.json('tqijbhwcnv');
    table.integer('ouwnsfkagi');
    table.bigInteger('hgvcxhiwxp');
  });
  await knex.schema.alterTable('stfpdutdxo', function(table) {
    table.string('bvxclmidhw');
    table.integer('bdzlokxaeb');
    table.bigInteger('zppneqdiqi');
    table.float('qjgfsvuyhh');
    table.integer('gjqnziilua');
    table.integer('ohcxdlsjeo');
    table.string('fuqsphgxdn');
    table.string('zevunyqook');
    table.text('adopgmeini');
    table.string('yhmkllxlfj');
  });
  await knex.schema.alterTable('pvfjxglpid', function(table) {
    table.text('qbczykzawf');
    table.float('rzkmekuawc');
    table.timestamp('vtljxrarfz');
    table.json('jznsszgenz');
    table.string('cciebpxpgu');
    table.json('pgotjhqxzu');
    table.string('qevtoxzrqh');
    table.string('atxpsivgcs');
    table.string('ahnstiisor');
    table.integer('fcbrywzzpk');
  });
  await knex.schema.alterTable('hcvkkxkrsp', function(table) {
    table.text('binremchir');
    table.string('xumudxkpsx');
    table.boolean('gymeizoyzr');
  });
  await knex.schema.alterTable('impelentzh', function(table) {
    table.timestamp('ptvxijamlf');
    table.boolean('jpewcuvpgu');
    table.float('vixgrrqxjn');
    table.json('uqjjuxkber');
    table.boolean('gwdtlckwog');
  });
  await knex.schema.alterTable('ghhciksyli', function(table) {
    table.integer('lhefieacyj');
    table.integer('cvtysnhrpb');
    table.float('ghtibbiixx');
    table.boolean('ninejsmacp');
    table.json('bvuuaomjdw');
    table.timestamp('izglfjurbp');
    table.timestamp('ysoelnhxqu');
  });
  await knex.schema.alterTable('jwfgclbmrk', function(table) {
    table.string('sarhgewdyu');
    table.text('tbfusanqhh');
    table.json('gtgrobzjjz');
    table.string('whivzqcuwx');
    table.boolean('xandakafly');
    table.bigInteger('cttbyigzzc');
    table.integer('jiivyeypwv');
    table.text('ocgwjidiqd');
  });
  await knex.schema.alterTable('xkfucagkpi', function(table) {
    table.bigInteger('cdtxbeqbse');
    table.json('zzrdlsaqoa');
    table.integer('kfegraoipk');
    table.float('mkeuooqous');
    table.integer('qbasuedufi');
    table.json('mypaawgmlz');
    table.boolean('iqnczbnefa');
  });
  await knex.schema.alterTable('jlmnyirxgt', function(table) {
    table.timestamp('obakynaxjq');
    table.json('zhqnjoswlm');
    table.boolean('nrpidomcte');
  });
  await knex.schema.alterTable('lavjdxzupg', function(table) {
    table.integer('thyjhoaztp');
    table.string('btoqzivkbf');
    table.timestamp('hqvimixnmh');
    table.json('znucwifnnv');
    table.integer('elwtszerbw');
    table.float('euxmcutnly');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};