'use strict';

/**
 * Migration: 20240123162840_gyyrunecvkjrlpp
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('agrsqwfsnx', function(table) {
    table.timestamp('kltkylgxmq');
    table.boolean('zstwwgprgl');
    table.json('szjuxxnibu');
    table.float('zekjpoctxm');
    table.float('gqfjhldlcd');
    table.integer('qetgzyvhrb');
  });
  await knex.schema.alterTable('zeqdanlbix', function(table) {
    table.string('xqiyneqitn');
    table.integer('oroxswkbcx');
    table.float('dxyikpacra');
    table.string('ltqigouzsh');
    table.json('mklsviqvso');
    table.timestamp('yavtqsujzu');
    table.bigInteger('smlhvmovru');
    table.text('fseogyvhui');
    table.integer('znqjtvhtka');
  });
  await knex.schema.alterTable('mtuhllhwgv', function(table) {
    table.json('gipvinyeff');
    table.float('bkovixpkpq');
    table.json('aqsbmswrex');
    table.text('btrdjzlbos');
    table.timestamp('ghhpphjtrz');
    table.boolean('xxfncvgwtb');
    table.text('mtjixisaxa');
    table.json('jyccvqxedm');
    table.timestamp('klzhpifroz');
  });
  await knex.schema.alterTable('kikrbphctq', function(table) {
    table.json('cmrhrrmpao');
    table.float('nnmfumghqf');
    table.string('jqutdxmwij');
  });
  await knex.schema.alterTable('kposupayjj', function(table) {
    table.boolean('xpbkjywfiy');
    table.integer('baaojigiiz');
    table.text('lcoismobqu');
    table.float('hpcalhtqth');
    table.integer('wcsnbziqdc');
    table.bigInteger('ulyzaanzzr');
    table.json('balktonnmm');
  });
  await knex.schema.alterTable('irrvvriwsw', function(table) {
    table.json('syucdnhhtr');
    table.float('bygjqmigfo');
    table.float('sgeiwcxigt');
    table.float('zrrtinwthb');
    table.float('unrqxqwvzw');
    table.float('eileojmdry');
    table.string('rdjdgghnrf');
  });
  await knex.schema.alterTable('wyuoesylwt', function(table) {
    table.boolean('vncnpqqmpu');
    table.boolean('ljtkkhpedx');
    table.timestamp('hvvspchoog');
    table.timestamp('qduitaumxr');
    table.bigInteger('qynorjsqbh');
    table.text('xsmnuffsfj');
    table.bigInteger('qlkmydtsti');
    table.string('fncaubnmez');
  });
  await knex.schema.alterTable('kvfovldvro', function(table) {
    table.text('qzfokciqjw');
    table.float('wvpntptvep');
    table.text('feoqlgchri');
  });
  await knex.schema.alterTable('tytkxqogja', function(table) {
    table.text('womtfdymkn');
    table.float('lpwiqrfafx');
    table.text('pksorcxpto');
    table.integer('uhmefahogy');
    table.bigInteger('wunvruzbgm');
  });
  await knex.schema.alterTable('pvoywuodga', function(table) {
    table.bigInteger('lsnehqkxoo');
    table.timestamp('tmfeuinusf');
    table.float('yaigplzsxh');
    table.string('pgnzcrglzu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};