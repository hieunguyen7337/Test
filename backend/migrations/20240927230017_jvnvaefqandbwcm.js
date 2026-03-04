'use strict';

/**
 * Migration: 20240927230017_jvnvaefqandbwcm
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ayffawtinr', function(table) {
    table.boolean('nrkwiddzwv');
    table.bigInteger('kvvnovsxnq');
    table.integer('ierpfbkzqs');
    table.text('xjwtfsbjmh');
  });
  await knex.schema.alterTable('hzjxsctqtg', function(table) {
    table.json('hhhpmeryxh');
    table.integer('qoqswtnnge');
    table.bigInteger('dvthybplhl');
    table.boolean('abhhcygqjt');
    table.float('xizrnxumqr');
    table.boolean('vowfzwgbkh');
    table.float('zynczdhovo');
    table.boolean('ohunzstutl');
  });
  await knex.schema.alterTable('amjofsofgh', function(table) {
    table.string('jkeruhlkya');
    table.integer('zitdrawatw');
    table.timestamp('rfznzpkzyp');
    table.integer('ickkxlvjya');
    table.text('hehuhzulzb');
  });
  await knex.schema.alterTable('xjnwmxknwc', function(table) {
    table.json('vmnfqwykvv');
    table.timestamp('jkmkgnsxrt');
    table.integer('tucjfvnsir');
    table.boolean('vjmcnftxsk');
    table.integer('wicavcdyqi');
    table.timestamp('twogaipdcv');
    table.text('kgutjinfgd');
  });
  await knex.schema.alterTable('codujgfikd', function(table) {
    table.string('rahzcrhzxq');
    table.float('fqbvvilbgl');
    table.integer('hlewyhaiut');
  });
  await knex.schema.alterTable('ycnteldlvy', function(table) {
    table.float('qbuwviwvia');
    table.text('oesqoqmstm');
    table.bigInteger('zwyleuezhs');
    table.bigInteger('cwgkzjkdtv');
    table.json('itslfjjcrh');
  });
  await knex.schema.alterTable('utcltnduxi', function(table) {
    table.bigInteger('euxlwfmkyn');
    table.integer('sbhhyihqkc');
    table.float('etetuuymkt');
    table.float('ezvjjrgmbn');
  });
  await knex.schema.alterTable('nkpyynpatl', function(table) {
    table.json('cgfxmtkdzv');
    table.json('chqbcsishg');
    table.boolean('oiwpajnful');
    table.text('nepqlvkqeq');
    table.float('wybiogljjo');
  });
  await knex.schema.alterTable('ryrnindrxe', function(table) {
    table.integer('pdyhjgkzwq');
    table.json('cdmmtmsara');
    table.bigInteger('pgsljpmdtr');
    table.json('kzjcwbnlbx');
    table.text('xpwhxqayaf');
    table.integer('izibpavych');
  });
  await knex.schema.alterTable('dkuimchhml', function(table) {
    table.integer('mvrpyehvdl');
    table.bigInteger('hvvapjiihz');
    table.float('qpthqljghl');
    table.string('jkxzulihrn');
  });
  await knex.schema.alterTable('xmtqzlesgt', function(table) {
    table.bigInteger('tghquonirr');
    table.json('iyydomvqwr');
    table.string('euqqvybnyu');
    table.float('fhzwpvdbwt');
    table.text('frrxxgrelf');
    table.json('rxaafeknlk');
    table.float('ayhofovrse');
    table.bigInteger('mlilmaofua');
    table.bigInteger('epyqcxnqyg');
    table.string('yeqqjqxkmd');
  });
  await knex.schema.alterTable('kdispepvyv', function(table) {
    table.boolean('pyhclvwpds');
    table.json('mwvkaiefss');
    table.string('xzhjeyruxj');
    table.timestamp('mjlijmlpan');
    table.bigInteger('aqghonaafv');
    table.json('utdubrstbj');
    table.boolean('ebamkslcmi');
    table.string('gzpyafdnmo');
    table.integer('xkuzqnutsw');
  });
  await knex.schema.alterTable('zyewmiqlri', function(table) {
    table.bigInteger('ksacxodort');
    table.float('edaedyvmix');
    table.boolean('duzxpefkfg');
    table.string('odqlsxddef');
    table.bigInteger('oqzesxqicj');
    table.integer('rwkpqjuhfj');
    table.json('ectemdcnel');
    table.integer('uepmzdxfdr');
    table.timestamp('qnbrurvwda');
    table.boolean('qrsgfspnxc');
  });
  await knex.schema.alterTable('plhavubqez', function(table) {
    table.timestamp('qrlvsuzout');
    table.integer('cvkupgdhhe');
    table.float('asybfbaqex');
    table.json('ixrpostxfx');
  });
  await knex.schema.alterTable('npmoglvwnw', function(table) {
    table.timestamp('bksslpajav');
    table.timestamp('pgqlcizavn');
    table.text('hgeowvdsjr');
    table.timestamp('ujrnehbgos');
    table.boolean('hvunwcoczw');
    table.text('myvjqcqccx');
    table.bigInteger('ptefxpkksh');
    table.bigInteger('sokczexnrr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};