'use strict';

/**
 * Migration: 20241028092001_ozajubviodkytun
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nooehftopa', function(table) {
    table.string('xdiikrcwwd');
    table.float('ohwfndklmt');
    table.bigInteger('gfadbbienm');
    table.integer('pxfdkyrtwp');
    table.integer('iciynbqdzn');
    table.json('ychdzrsziq');
    table.boolean('hwdwbtnmfx');
    table.bigInteger('yrgegxullv');
  });
  await knex.schema.alterTable('iribihyfve', function(table) {
    table.timestamp('vbzhljgmmi');
    table.boolean('gdsbffsyqv');
    table.bigInteger('oxfolkphhs');
  });
  await knex.schema.alterTable('nnxvtdeldd', function(table) {
    table.string('smxkgtfbxd');
    table.string('jobrlnxvwc');
    table.text('tyvdwxqklv');
    table.string('cmkhyspdcl');
    table.text('ymulgrbmes');
    table.integer('arerfpqdvp');
  });
  await knex.schema.alterTable('exnlivwbro', function(table) {
    table.text('xakwvbmewl');
    table.string('dvrveapnbb');
    table.timestamp('knlutuhnzx');
    table.integer('eqcizbliid');
  });
  await knex.schema.alterTable('axgvxfyltb', function(table) {
    table.bigInteger('havmrkzguf');
    table.json('cwaejeqbex');
    table.text('mimbxglaya');
  });
  await knex.schema.alterTable('qikjzsuefx', function(table) {
    table.timestamp('ruamcdtwyu');
    table.bigInteger('fwvctharyy');
    table.bigInteger('txbcfvuvao');
    table.float('rnowahbvil');
    table.bigInteger('tdpenkcssa');
    table.boolean('mkduuwaaym');
    table.float('zxnrafvxch');
    table.float('uumzfkekph');
    table.timestamp('keubininox');
    table.string('wyvwbkchgk');
  });
  await knex.schema.alterTable('rqyzcuxnnt', function(table) {
    table.string('dflizbaftb');
    table.integer('zgzcrhpyzw');
    table.bigInteger('fcezdzfooi');
    table.boolean('sfiwtvsglg');
  });
  await knex.schema.alterTable('tmoqobrsmu', function(table) {
    table.json('gpmmmvbxwy');
    table.integer('dlemrgklum');
    table.json('lmmmhhzuck');
    table.boolean('sjvhxsvkit');
    table.string('uonexdynjo');
    table.text('afrlfgwzro');
    table.text('qhkadbmxqy');
    table.float('ruozlcmyhn');
  });
  await knex.schema.alterTable('dfrvaqabwo', function(table) {
    table.float('qdbemdzcsp');
    table.timestamp('bzgbmzjmyw');
    table.float('tnadofuncw');
  });
  await knex.schema.alterTable('klvrakzotj', function(table) {
    table.string('fkardvgczr');
    table.string('mvxqbhfimk');
    table.json('qbkvwybuzj');
    table.json('dlwxytkspm');
    table.text('uxcnrfrcfq');
  });
  await knex.schema.alterTable('orowkfihfx', function(table) {
    table.timestamp('ryubgazrqb');
    table.float('hewubmbnuu');
    table.json('ovhzlyokcd');
    table.json('zwxsxpcunk');
    table.text('smagixxwnx');
    table.integer('wtwtjsmvbj');
  });
  await knex.schema.alterTable('sdgeteldzr', function(table) {
    table.string('jccgtwgnth');
    table.json('jvdgxxmziw');
    table.timestamp('juamigunuq');
    table.float('zkroircxlw');
    table.timestamp('fikybrvuzi');
    table.timestamp('uvpxsdmabx');
    table.string('yusikrbunh');
    table.string('jhwfsgbhej');
    table.boolean('ggczpoplch');
    table.string('pqwmcpqjph');
  });
  await knex.schema.alterTable('znblasxvfo', function(table) {
    table.string('osfcargtzn');
    table.boolean('pstubbqdvh');
    table.boolean('zdjpiefqwk');
    table.float('wzogdoxqfj');
    table.float('sbiyrlyeob');
    table.text('njubgitoym');
    table.integer('xusjuwikwd');
    table.text('birrecvhph');
    table.json('uhxicthexl');
    table.timestamp('xpmqslqwkf');
  });
  await knex.schema.alterTable('wcgoonffvv', function(table) {
    table.boolean('rskexasmjg');
    table.integer('kuqswselpp');
    table.text('gddpslwkbj');
    table.float('svkjdugunt');
    table.float('smfwthjnty');
    table.float('nsapcinnbq');
    table.timestamp('qnsxtfqhgh');
  });
  await knex.schema.alterTable('wabvreyxvf', function(table) {
    table.json('rpqgakozsz');
    table.text('pwsjbdjmik');
    table.string('yslqxdfvem');
    table.integer('wavktazmlj');
    table.string('ojujabpjgv');
  });
  await knex.schema.alterTable('izwczucuku', function(table) {
    table.timestamp('nbegtchvsa');
    table.integer('gjitisnayt');
    table.json('ffyhzfgohq');
    table.float('scswlvdcpr');
    table.float('tdsprioyes');
  });
  await knex.schema.alterTable('gxprbpojhx', function(table) {
    table.json('ildcwrbieu');
    table.integer('ejsubwzjvj');
    table.float('afdesjlhmv');
    table.integer('zikbziaxgd');
    table.timestamp('sljrxmncvj');
    table.float('yrubnnzxvm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};