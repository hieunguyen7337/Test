'use strict';

/**
 * Migration: 20240322030247_wskkcqsqmotsnnc
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ohvsozgxxr', function(table) {
    table.string('atasqtycfw');
    table.text('bwefskswqz');
    table.text('vyobdxgglz');
    table.string('wefwbsxkid');
  });
  await knex.schema.alterTable('xhzbzrugvy', function(table) {
    table.boolean('shcznifwdg');
    table.timestamp('wioobeajwg');
    table.text('dolgjfxcqa');
    table.bigInteger('cmpctcjyaq');
    table.integer('hxugnwpsjr');
    table.json('huukemeeul');
  });
  await knex.schema.alterTable('mhctiicczv', function(table) {
    table.boolean('gwswmyorpb');
    table.boolean('enftfaixuz');
    table.bigInteger('zitzjdvqjt');
    table.json('cqgvesydbl');
    table.bigInteger('wtdvtvpjlb');
    table.string('syfjzbfajb');
    table.integer('akgkwwzcoo');
    table.json('ruvctvoqdb');
    table.string('gbtddlfjie');
  });
  await knex.schema.alterTable('pksaogtklz', function(table) {
    table.text('blekxokfrf');
    table.json('exffnasooe');
    table.boolean('ifefaairkd');
    table.float('aiwjbosrmg');
    table.string('tnkasmjzab');
    table.bigInteger('asoxbetqbr');
    table.json('gbkiotnxvh');
  });
  await knex.schema.alterTable('ubsuztkqmh', function(table) {
    table.bigInteger('oxxsqbxbdf');
    table.float('szigsltpzs');
    table.timestamp('ypkkemucel');
    table.float('hqbalaanxd');
    table.string('bjasmkeook');
    table.boolean('agsmqecxrx');
    table.text('fjppcgnngq');
    table.integer('jwdvfkixgj');
  });
  await knex.schema.alterTable('zdfnfglqfz', function(table) {
    table.boolean('zpzjvsmfnd');
    table.integer('odzhnxswup');
    table.timestamp('fbljnalvet');
    table.boolean('cfoednjgjh');
    table.string('htyyszppvf');
    table.text('iuqdtnhkmn');
    table.timestamp('urbyvjaakr');
    table.text('rsciutdkas');
    table.float('hzuvlzakph');
  });
  await knex.schema.alterTable('matrbznsel', function(table) {
    table.timestamp('lhqnzawagc');
    table.json('rjdbuauugh');
    table.boolean('pjtnvkzipk');
    table.float('kiejbqngar');
  });
  await knex.schema.alterTable('kvthymbudi', function(table) {
    table.string('aiakzfnumc');
    table.bigInteger('pwovdtxeom');
    table.timestamp('opeirvulrq');
    table.boolean('qzdrlmmyjl');
    table.float('nolkdtsuyn');
    table.integer('fuwtxsxcmj');
    table.integer('oygrunsucj');
    table.string('upyacgsrqq');
  });
  await knex.schema.alterTable('cjqpxkmorw', function(table) {
    table.timestamp('zxavamhxuf');
    table.bigInteger('vjsgxjonei');
    table.integer('adxfxdrpfd');
    table.timestamp('rsylsagmhn');
    table.timestamp('vgbwadviqw');
    table.timestamp('nkhnvaqgvd');
  });
  await knex.schema.alterTable('uyfyrniqzm', function(table) {
    table.bigInteger('eehcovjnce');
    table.integer('kgehxymsqp');
    table.integer('ijbemlhjus');
    table.float('saflyiydxz');
  });
  await knex.schema.alterTable('dcjjuvexxk', function(table) {
    table.string('ivizypeaoz');
    table.timestamp('niiwwtwnlc');
    table.text('xehqraijdh');
  });
  await knex.schema.alterTable('vwvyevfqbz', function(table) {
    table.json('qszdqgcmnk');
    table.json('hsqbzuuext');
    table.boolean('izfqwoueap');
    table.bigInteger('xkfrfydjej');
    table.integer('tvwbosyjvf');
    table.json('sfygpdnegl');
    table.float('wzmvferbem');
  });
  await knex.schema.alterTable('xubiobmctc', function(table) {
    table.integer('fxucnkvwyq');
    table.boolean('rxwbgzhrcz');
    table.bigInteger('hbccwhbqht');
    table.integer('wjclvrhtvg');
    table.text('vhlskabcou');
  });
  await knex.schema.alterTable('gmitniybob', function(table) {
    table.json('rjvfucutpn');
    table.json('kuezbwetcn');
    table.boolean('gzbcuthwfg');
    table.text('hikwywhwve');
    table.float('eapuuofvfc');
    table.string('pmipozyflp');
    table.boolean('fzztzlubjr');
    table.bigInteger('sszfyjalhj');
    table.text('ltuogiosxb');
    table.text('wtbpuqxmiq');
  });
  await knex.schema.alterTable('nslrvfbxla', function(table) {
    table.float('yjpgyejdjd');
    table.timestamp('lshdhvxbjh');
    table.json('kosemaelds');
    table.integer('rwuhlmhbdq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};