'use strict';

/**
 * Migration: 20240908050853_wrwlsuezhjzefhu
 * Description: Fix typo in column name
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qrglrnoktp', function(table) {
    table.integer('qdndpwwmhd');
    table.boolean('txkqjolhqx');
    table.bigInteger('yowcolpirz');
  });
  await knex.schema.alterTable('cpnwzqluoh', function(table) {
    table.boolean('uxdnwgatod');
    table.text('syzgkdcwkd');
    table.json('fziowkrgby');
    table.json('gxrrkenajv');
    table.text('ntbrrqnpoy');
    table.bigInteger('yvzjjeciud');
    table.float('cyupamteph');
    table.bigInteger('wqkyzuuybw');
    table.boolean('vjdhxtklnh');
    table.boolean('vejhatjbrc');
  });
  await knex.schema.alterTable('ttcgfukgtv', function(table) {
    table.text('qwfrhfqrru');
    table.float('ipdliwmcfo');
    table.float('rhryedvoni');
  });
  await knex.schema.alterTable('vllylrsgus', function(table) {
    table.timestamp('vknkseadnl');
    table.json('mzhovbhsgn');
    table.timestamp('bdtehlqawn');
    table.boolean('goxpdqjnyh');
    table.integer('sfrebajtqr');
    table.json('doayeigyzv');
  });
  await knex.schema.alterTable('yddnrioyby', function(table) {
    table.integer('tpksklqnye');
    table.text('gnrvyxiqjr');
    table.boolean('ltcfrvoefl');
    table.integer('wlaiwejvax');
    table.integer('pisbvkznpy');
    table.boolean('covugviqnp');
    table.text('xwftothwvy');
    table.float('wvrtczzyha');
    table.boolean('gmobkafqvo');
    table.timestamp('yfvteyisyy');
  });
  await knex.schema.alterTable('hfmbmhxlbh', function(table) {
    table.string('jtxyjesmdl');
    table.integer('wuytoeomqw');
    table.integer('xfvuauvxux');
    table.boolean('ntncozmgxf');
    table.integer('tjtxtqypmw');
    table.text('nuzvtmwlte');
  });
  await knex.schema.alterTable('xonmxrfjjf', function(table) {
    table.bigInteger('ufspekuozz');
    table.string('fnkvpwfayh');
    table.timestamp('dlhppedlcq');
    table.text('gyuixzxlsm');
    table.integer('lcjfhwmoaw');
    table.text('qsjzwuhati');
    table.boolean('jjvcfjodlj');
    table.json('xfnjdrdnyd');
    table.string('msujzagjov');
    table.float('jxfdhrzlxs');
  });
  await knex.schema.alterTable('mflisltwcv', function(table) {
    table.bigInteger('rfydknijhu');
    table.timestamp('uegnyectoo');
    table.json('rtnktosymg');
    table.json('sfnzoargot');
    table.json('gkttqfqsla');
  });
  await knex.schema.alterTable('avarqmjdeu', function(table) {
    table.timestamp('kywhfuknwa');
    table.json('bpixrfnsrb');
    table.boolean('xfpyundjte');
    table.text('svhgqyawov');
    table.bigInteger('rksbpmkebl');
    table.float('xjnoknmnyw');
    table.json('lsnznhccte');
    table.bigInteger('awihvsoxwv');
    table.float('zkunckmrcp');
    table.json('zggxzjamjz');
  });
  await knex.schema.alterTable('jlqpjvmjko', function(table) {
    table.string('izgfpggdsu');
    table.float('ubsqosgciz');
    table.integer('ynrrjmacag');
    table.json('kzffbxbqre');
    table.bigInteger('pkwpzasatk');
    table.timestamp('mrumpgxwne');
    table.json('uuchczdpxj');
    table.text('ffdfwwgmix');
  });
  await knex.schema.alterTable('nispdphewf', function(table) {
    table.float('ozfzsedcew');
    table.string('vtyytlgcxz');
    table.boolean('krqnyzpwjl');
    table.bigInteger('njtjhzjpcd');
    table.string('rznabisakt');
    table.text('yheecjolva');
  });
  await knex.schema.alterTable('avhtgqdvzs', function(table) {
    table.timestamp('ipewsjhhvt');
    table.integer('dzswvwfsuc');
    table.boolean('nsuydrsrwb');
  });
  await knex.schema.alterTable('xlbljplwul', function(table) {
    table.float('qsrbchbpuo');
    table.bigInteger('glgqvjqbzz');
    table.float('xonngqblbg');
    table.string('riqzqkdyll');
    table.timestamp('rfndanprvh');
    table.json('driacgmzbc');
  });
  await knex.schema.alterTable('rxplamfsxa', function(table) {
    table.string('kqyoyyshms');
    table.bigInteger('bchfvkwgya');
    table.float('mqjvacudjm');
    table.string('cafdnfelty');
  });
  await knex.schema.alterTable('cthehkkhlf', function(table) {
    table.json('hxinuuqzik');
    table.integer('kpjeedrkib');
    table.bigInteger('fryjhtxlou');
    table.float('cllfstrbzb');
    table.integer('poofyjopzd');
    table.integer('bnsdmthrbp');
    table.string('polzxwqywj');
    table.boolean('ovcbxdqawh');
    table.float('klkohsfsxj');
  });
  await knex.schema.alterTable('wojdrqekqr', function(table) {
    table.json('exhbcoxupq');
    table.timestamp('xkmhniekeb');
    table.float('ievneqfwzg');
    table.float('immxnyxfae');
    table.timestamp('bulfmvmafu');
    table.string('brgnbkxuzr');
    table.timestamp('bawnqhbeye');
    table.json('ockoogpzpx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};