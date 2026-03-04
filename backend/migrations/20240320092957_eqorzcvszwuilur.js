'use strict';

/**
 * Migration: 20240320092957_eqorzcvszwuilur
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ayuakzlghr', function(table) {
    table.float('yggwnoiacm');
    table.bigInteger('zeblkbiyzf');
    table.bigInteger('qvxrxupxrq');
    table.string('nkwvdbocju');
    table.integer('gvybbrynqq');
    table.text('afljntlmtn');
    table.boolean('moisylequo');
    table.float('eaocswafiu');
    table.string('bkavvcgsee');
    table.string('kxujjqgxvy');
  });
  await knex.schema.alterTable('byvcvkdyps', function(table) {
    table.bigInteger('zhkwvoynpt');
    table.integer('hjvakaurei');
    table.integer('nsxiekqjon');
    table.json('prikzjmcqq');
    table.boolean('skgnrrdzxj');
  });
  await knex.schema.alterTable('heqrnqkkvm', function(table) {
    table.text('rahjbbkelg');
    table.boolean('nwpdolfvep');
    table.string('dwmqaacrfh');
  });
  await knex.schema.alterTable('rqewseastr', function(table) {
    table.float('fonwnbrdkg');
    table.json('zzhjzexzaq');
    table.bigInteger('ttiuqwtdfu');
    table.boolean('xbaazujwqi');
    table.integer('etlybktzqn');
    table.integer('humctbuiys');
    table.text('zjlinchzod');
  });
  await knex.schema.alterTable('hkfxskoghi', function(table) {
    table.json('dzlhnvjivw');
    table.float('pcdhixfpoj');
    table.integer('uwxpymrlzb');
    table.text('kfpfopjsoj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};