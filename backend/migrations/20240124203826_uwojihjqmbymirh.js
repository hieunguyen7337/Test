'use strict';

/**
 * Migration: 20240124203826_uwojihjqmbymirh
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xuyivyzwmy', function(table) {
    table.integer('zypscdszsj');
    table.string('dirqpanlpo');
    table.boolean('xdjphswzbe');
  });
  await knex.schema.alterTable('obxsizwmcl', function(table) {
    table.text('lstitvncsm');
    table.text('ryebuvpple');
    table.bigInteger('bowxpjskep');
    table.bigInteger('xxuoiiumkq');
    table.json('imjmcgdnik');
  });
  await knex.schema.alterTable('yeqopwutzo', function(table) {
    table.integer('plrjbdbpvm');
    table.timestamp('mzzehegovj');
    table.integer('kotchamnjw');
    table.boolean('chtwcmbrco');
    table.integer('iqnbdavqio');
    table.string('qbmlkpnbgi');
    table.text('cmvhffmgii');
  });
  await knex.schema.alterTable('beiyfbpiur', function(table) {
    table.bigInteger('bnwcqhcxfl');
    table.text('kcdzzfglzo');
    table.boolean('kdadytqsoz');
    table.boolean('iqrcaiqiee');
    table.json('etlizvkeag');
    table.timestamp('qbdvrazzqm');
    table.text('tcrsishcqg');
  });
  await knex.schema.alterTable('wypkirbrqc', function(table) {
    table.boolean('yujsbmhdcf');
    table.boolean('lzhdyshqzp');
    table.text('toaolytvpz');
    table.bigInteger('veyctjhtsi');
  });
  await knex.schema.alterTable('azppisxics', function(table) {
    table.json('rosvfwymzc');
    table.boolean('dcexykdjhq');
    table.string('ixclqdnxis');
    table.bigInteger('dntqojnlrv');
    table.boolean('rplzefhvzw');
  });
  await knex.schema.alterTable('vhclidqwji', function(table) {
    table.string('taommgzndb');
    table.integer('qnudfviqpu');
    table.string('lgmvngpsti');
    table.bigInteger('tcpvvlksmn');
    table.string('npzkxccybs');
    table.float('hicfwttolt');
    table.bigInteger('putrwredgb');
    table.bigInteger('gzhaogontz');
  });
  await knex.schema.alterTable('gtiosfcipg', function(table) {
    table.boolean('vttszrwled');
    table.integer('qimzcfrwzp');
    table.timestamp('mirpdajpfp');
    table.float('wzkekzsqqn');
    table.integer('yrbxoyzeyb');
    table.text('fumubxmjaw');
    table.boolean('ebihfluoaq');
    table.integer('iutweeoziy');
  });
  await knex.schema.alterTable('carypturfs', function(table) {
    table.bigInteger('qmskhzbgcs');
    table.boolean('icgoawdixr');
    table.bigInteger('ahypsqsdha');
    table.timestamp('wbyhdjfftu');
    table.text('xutoojjrkf');
    table.float('yqecgoynrk');
    table.timestamp('ipmxekklyl');
    table.string('pxhbruvlrj');
    table.timestamp('skbaaansyb');
  });
  await knex.schema.alterTable('sxsapebvlt', function(table) {
    table.integer('qusacjyjdv');
    table.bigInteger('zrfwkxfzux');
    table.json('krxcipmprv');
  });
  await knex.schema.alterTable('bwjchlyxsa', function(table) {
    table.timestamp('ilcdpzjoey');
    table.text('xlwdpiqjog');
    table.boolean('xqkcjrtmyh');
    table.integer('uftmjzsujn');
    table.text('ouxnpuauwc');
    table.bigInteger('iokmqumzvk');
    table.string('tftjdczaad');
  });
  await knex.schema.alterTable('lzsivlnvqb', function(table) {
    table.integer('cnoiimmcez');
    table.timestamp('fpeohdrxyt');
    table.text('hdjzbqyrdy');
    table.string('ijtjhfepxy');
    table.json('iwvmhfngsy');
    table.boolean('qgjwtxpgih');
    table.string('necfelygws');
    table.boolean('eojbdlittd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};