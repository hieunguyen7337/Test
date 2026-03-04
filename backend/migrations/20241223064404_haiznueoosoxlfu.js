'use strict';

/**
 * Migration: 20241223064404_haiznueoosoxlfu
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pcmcjduvaa', function(table) {
    table.text('yygliizxzb');
    table.json('zgmveqkeqe');
    table.bigInteger('esvhqltbyd');
    table.text('mdakfnborb');
    table.bigInteger('pjwvcmnijo');
    table.json('aiuhfoqovn');
    table.integer('hrcrpfdsdw');
    table.json('gbhszzgaws');
    table.float('gwbalzuenj');
    table.bigInteger('qshajwdecv');
  });
  await knex.schema.alterTable('zdhtpgxvnn', function(table) {
    table.string('frfxzwaegl');
    table.boolean('bqobjjxuwp');
    table.timestamp('mixarcadkn');
    table.string('tlqkceujru');
    table.bigInteger('mjossonpwu');
  });
  await knex.schema.alterTable('lcreftqufk', function(table) {
    table.float('efmryekxml');
    table.json('zvqommkjjb');
    table.float('rizlwdbdhn');
    table.float('aoriuxkvtk');
    table.integer('ihftvxwaar');
    table.string('uyirrdpeqd');
  });
  await knex.schema.alterTable('zbngfrukqc', function(table) {
    table.boolean('caiezpqlbt');
    table.json('fcekhxfbgf');
    table.text('bygkwltqfb');
    table.integer('wmtzwundqf');
    table.bigInteger('bjfzlgcgpc');
    table.integer('wnhnvwrfid');
  });
  await knex.schema.alterTable('yjimdrqihe', function(table) {
    table.bigInteger('brtcaqngso');
    table.text('maelxjpshu');
    table.float('jolfyosnzz');
    table.string('naqcqaavvf');
    table.timestamp('xatrxzjipp');
    table.string('plcxmwpfyv');
    table.float('ixcdvbkdgl');
    table.bigInteger('yqcrqjrqzv');
  });
  await knex.schema.alterTable('amfebguaxk', function(table) {
    table.string('chshqpleoe');
    table.boolean('ggzbaabtsq');
    table.float('dpvgpmwqui');
    table.boolean('xutqxppalt');
    table.string('asqesamwax');
    table.float('cxjhxshpuq');
    table.string('powbsaxunq');
    table.float('avyvmfpdcb');
  });
  await knex.schema.alterTable('jgitfgciwo', function(table) {
    table.integer('mgnzqkldty');
    table.float('svaqlodhvx');
    table.bigInteger('mhpsbwdcuw');
    table.json('npxyewzlst');
  });
  await knex.schema.alterTable('psjkjrnguu', function(table) {
    table.timestamp('ynhwdwlymm');
    table.string('frcvlwkbtu');
    table.string('yjqhufkbxe');
    table.bigInteger('bpinomvehv');
    table.text('bhyuxexasj');
    table.float('jmnubwrxdl');
    table.boolean('hexhnupozk');
    table.text('thrqhlvvch');
  });
  await knex.schema.alterTable('cyqffugcuq', function(table) {
    table.json('tfthitrdlq');
    table.timestamp('cmaposjtoa');
    table.string('ykzjeqczti');
    table.integer('fcrlafnjii');
    table.boolean('kcsdizwaty');
  });
  await knex.schema.alterTable('kmclawffdl', function(table) {
    table.string('kyhoqsskth');
    table.boolean('yxzbuwdnpl');
    table.float('ogxtknyxof');
    table.float('gouwuhljxq');
    table.integer('tibnywlwbu');
    table.json('qeqdutvgkr');
  });
  await knex.schema.alterTable('jaksxqmjjv', function(table) {
    table.integer('qfedmhisck');
    table.integer('hscrogfubo');
    table.timestamp('kmbxhqizfi');
    table.string('yxuemcfkro');
    table.timestamp('mtshdcrspg');
    table.bigInteger('sacundeogw');
    table.float('lpqvzbxxaj');
    table.boolean('rvyjzrkbrb');
  });
  await knex.schema.alterTable('zqpccurykq', function(table) {
    table.boolean('bqvmadbegz');
    table.text('xfpcrvlqrp');
    table.integer('kwcexfqmcp');
    table.boolean('hamzclnxwp');
    table.timestamp('pnlmlhvymf');
    table.timestamp('tlathuwrtd');
  });
  await knex.schema.alterTable('caxwvfigbe', function(table) {
    table.string('yytmzcdjkp');
    table.string('risxnvwezd');
    table.text('jrfaarsnim');
    table.string('sqnqjqvlio');
    table.text('gcwsdhwqyi');
  });
  await knex.schema.alterTable('urgjosjnve', function(table) {
    table.boolean('lubkomydjc');
    table.text('ihflopokzr');
    table.float('rncnzfqzgg');
    table.integer('csrhoffolf');
    table.string('okypjsdrlv');
    table.boolean('lwkujprnnf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};