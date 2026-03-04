'use strict';

/**
 * Migration: 20240915002345_fkxbtxenswnevit
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('srdewtbkgp', function(table) {
    table.text('zhgzwcdhvo');
    table.text('xtaiocnmvh');
    table.integer('cyzeviwisz');
    table.timestamp('awtokjkolw');
    table.timestamp('uxbtcczyui');
    table.float('pftnazqxho');
    table.boolean('ylbyyyqxzq');
    table.boolean('cvfrimkgud');
  });
  await knex.schema.alterTable('zkrkwmskhq', function(table) {
    table.string('krrsmmjums');
    table.float('qvhnnzlwzy');
    table.bigInteger('ifnzrjjgrn');
    table.float('gdheifnrql');
    table.integer('oczerhrxyw');
    table.string('wctpivayrb');
    table.json('kzoofvdrgn');
    table.timestamp('kkpurkqqar');
  });
  await knex.schema.alterTable('lyllkrcjhh', function(table) {
    table.timestamp('gnkguektvk');
    table.float('bjsucdvjrx');
    table.boolean('pmcruiramj');
    table.boolean('ezqmkskljs');
    table.timestamp('cjslzqthjm');
    table.string('tyxtyjfgop');
    table.json('zlgkzpltsg');
    table.timestamp('jonwbsyfas');
  });
  await knex.schema.alterTable('ntntpijrgr', function(table) {
    table.integer('woyvsxcanj');
    table.string('wgkgjprfba');
    table.text('brxexauvwv');
    table.timestamp('euqpoorpau');
  });
  await knex.schema.alterTable('grgbduucyp', function(table) {
    table.json('iftmapucjg');
    table.text('zfdrnrwtdr');
    table.bigInteger('wdfgbmstju');
  });
  await knex.schema.alterTable('gortvwtzej', function(table) {
    table.bigInteger('wpkyeffeig');
    table.timestamp('ttfkppwzqu');
    table.json('brmzqzmssx');
    table.text('zhwtyesdml');
    table.integer('rheucmeplx');
    table.boolean('vndecsorcd');
    table.float('lnmyaqiarg');
  });
  await knex.schema.alterTable('tnjiknzxgm', function(table) {
    table.float('jutjxormpj');
    table.json('atqgwjwugl');
    table.timestamp('dgoaeryohd');
    table.integer('vvjpjwkunm');
    table.json('oupbhizzjk');
    table.float('ubmppmzpzb');
    table.float('tzhchqviag');
    table.text('scbilridrg');
  });
  await knex.schema.alterTable('vbyobsoadp', function(table) {
    table.timestamp('ihjpflmpbj');
    table.json('pruetwzqkl');
    table.timestamp('ftfeyennln');
    table.boolean('gtbydtjhqn');
  });
  await knex.schema.alterTable('lgqiibsfut', function(table) {
    table.string('jpuiyyvozh');
    table.integer('ogcbailtjl');
    table.bigInteger('fmwogjetnv');
    table.boolean('pglgotofaz');
    table.json('lwzbngprhr');
  });
  await knex.schema.alterTable('qdmjbjtldx', function(table) {
    table.bigInteger('zdxgqvlfbx');
    table.boolean('fqsutgdefc');
    table.bigInteger('ouwconrnin');
    table.integer('jplnmaebfm');
    table.bigInteger('pempdojmyb');
    table.timestamp('zzhrynxldm');
    table.integer('alsujrfyhn');
  });
  await knex.schema.alterTable('odnckbckhu', function(table) {
    table.float('eifliuvwgk');
    table.json('jkesstiehg');
    table.boolean('vlfkdtnzbz');
  });
  await knex.schema.alterTable('ouewfsloyw', function(table) {
    table.boolean('tlvhhhiwcz');
    table.float('wivhknfckk');
    table.json('rjqexjrdby');
    table.text('epglbnzaxz');
    table.json('tvzksdqngf');
    table.bigInteger('ktgzmpnzjn');
    table.timestamp('nmkljkcovk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};