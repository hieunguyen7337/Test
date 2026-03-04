'use strict';

/**
 * Migration: 20240109141606_bwlfgolonnmbyuv
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yeznkklnda', function(table) {
    table.float('bzgayuihgp');
    table.json('hgrxjhykpe');
    table.json('gigulngltx');
  });
  await knex.schema.alterTable('lomabnfnbl', function(table) {
    table.integer('uvnldozjie');
    table.json('rmcglozkoj');
    table.bigInteger('rendirjawp');
    table.text('bcwclzfezn');
    table.json('mxoxoxzonb');
    table.timestamp('siyyjuizlk');
    table.text('oimtyrigkq');
    table.json('hqjxjnjymp');
    table.json('xfvevnlqmg');
    table.integer('qqntlbizrq');
  });
  await knex.schema.alterTable('hwngdovuzv', function(table) {
    table.float('ilmubluyac');
    table.string('eyoyfkswkc');
    table.integer('oofiyoxhae');
    table.timestamp('mjkyzycbmo');
    table.text('pbufhovskb');
    table.timestamp('rrgfwzktew');
  });
  await knex.schema.alterTable('hfgiaqssnt', function(table) {
    table.text('gbwjksolle');
    table.timestamp('pxsrlorcnt');
    table.float('mcswnfypgp');
    table.timestamp('wsbvhdoegd');
    table.integer('heyngnqelp');
    table.string('gzprxqlczu');
    table.boolean('yxpoqtgdyr');
    table.string('ixlmvflxim');
  });
  await knex.schema.alterTable('oxdwwtslkz', function(table) {
    table.boolean('nzxqgyauvj');
    table.timestamp('vudeqkmyui');
    table.text('ebocurjalx');
    table.float('wpzrwhgtyf');
    table.float('jiesvnsqry');
    table.float('tvzvsjgynu');
  });
  await knex.schema.alterTable('sgldteicba', function(table) {
    table.timestamp('uhhpnrwjnc');
    table.bigInteger('chqtofguzb');
    table.boolean('vqyskobmzh');
    table.boolean('hxycpgrzfy');
    table.json('ghfsxmwrcd');
    table.integer('ekbneqmnic');
    table.string('lvlfnwsbup');
    table.integer('qtvxhpocqq');
    table.string('mibrdarnoq');
    table.integer('zvileqmeye');
  });
  await knex.schema.alterTable('hvjhmctyni', function(table) {
    table.timestamp('wsurqmlsgr');
    table.float('qbtruobhyd');
    table.string('ffvscsuchn');
  });
  await knex.schema.alterTable('ktehnkvajd', function(table) {
    table.text('dfjfnvqujf');
    table.text('vziwszesgx');
    table.json('wjlwnrilzc');
  });
  await knex.schema.alterTable('yqyxnslvdp', function(table) {
    table.text('bnxzcweskt');
    table.boolean('yitzraflzp');
    table.boolean('miroooeafx');
    table.text('nqchyrbzpj');
    table.json('rpermeastq');
    table.bigInteger('nrsrhwmcud');
  });
  await knex.schema.alterTable('zuixkkuvmd', function(table) {
    table.string('zaldtfvjoy');
    table.float('mykdlfetlj');
    table.timestamp('hxazzmpnxb');
    table.integer('jukbngkurh');
    table.timestamp('gymqphickw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};