'use strict';

/**
 * Migration: 20240624191318_mlpwnirovgcpsof
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jalacypcku', function(table) {
    table.string('lmbslzhygt');
    table.json('mhmbmhqnzi');
    table.timestamp('inwlhsomyb');
    table.string('bxofwwpjse');
    table.integer('xartgnfpzt');
    table.float('koqgfhbwhl');
    table.timestamp('uldecqjmzi');
    table.float('idavgbebhr');
    table.timestamp('lupjctksda');
  });
  await knex.schema.alterTable('wwqtlcxzqv', function(table) {
    table.bigInteger('xlgjmyocqs');
    table.bigInteger('ddvdmawckl');
    table.text('qtadllqxmm');
    table.boolean('vgsfqyftbb');
    table.boolean('hqybqnvgje');
    table.json('wdnborkdwu');
  });
  await knex.schema.alterTable('snrvsnhgvy', function(table) {
    table.float('kbepzjirhr');
    table.bigInteger('dklkzbjzal');
    table.text('zlmwxqbmoc');
    table.json('buklckyoqu');
    table.timestamp('gcbxuxgoql');
    table.text('yhyqjmaybe');
  });
  await knex.schema.alterTable('mjwspujjai', function(table) {
    table.text('yyuscpjsye');
    table.string('fkbrmhpmfs');
    table.float('skuxbbwbzl');
    table.text('xtlgxaawla');
    table.json('afgqrpotqd');
    table.integer('guonilnhlu');
    table.timestamp('uapwgulrjq');
    table.float('exixetffrf');
  });
  await knex.schema.alterTable('stlicajlve', function(table) {
    table.timestamp('zrywwsfjyd');
    table.string('olxrmixpio');
    table.string('fjlzxkjqjz');
    table.bigInteger('ssgdmjcpqd');
    table.json('dkayxrsvit');
    table.text('hdfomjmxdv');
    table.boolean('ikpmrljraw');
    table.json('nfomtarbil');
    table.text('zyvklbqxkp');
  });
  await knex.schema.alterTable('bmxeqlpdpo', function(table) {
    table.float('ripnyyjntx');
    table.float('ewoulbdrqh');
    table.bigInteger('rebbyxihok');
    table.timestamp('zqtybhfmpf');
    table.string('dfleixaimb');
    table.integer('hhvbkjnddu');
    table.json('pulxzidogf');
    table.text('elbpfyncas');
    table.bigInteger('ntfflinrkt');
  });
  await knex.schema.alterTable('sjtfryhqua', function(table) {
    table.bigInteger('hwlmdsrmei');
    table.json('srzvkhygdy');
    table.bigInteger('nfxtnzphxz');
    table.integer('oaxwtijxnt');
    table.timestamp('ivdfiijrrg');
    table.json('hdephmrgol');
    table.text('fwicrfpbyi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};