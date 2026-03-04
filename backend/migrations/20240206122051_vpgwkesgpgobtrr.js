'use strict';

/**
 * Migration: 20240206122051_vpgwkesgpgobtrr
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fllsbspzfi', function(table) {
    table.bigInteger('wsuhobujwz');
    table.integer('dehctgrycy');
    table.bigInteger('efvpgvnjhz');
    table.integer('przidgbaqw');
    table.string('bxclpsgpnk');
    table.integer('yybsebvdpc');
  });
  await knex.schema.alterTable('sjdtngcrqv', function(table) {
    table.string('xdfoiqzgxn');
    table.json('gafhfopvkd');
    table.string('uafqozzcng');
    table.string('rffiufacts');
    table.string('dcdkgevtxl');
    table.timestamp('ljqjyvrgvb');
    table.json('pgqrcadygu');
    table.bigInteger('eltqipjchd');
    table.boolean('sgxqaeapht');
    table.bigInteger('wdukvkqjef');
  });
  await knex.schema.alterTable('sdtbajynqu', function(table) {
    table.timestamp('hykhnhmoiz');
    table.bigInteger('nolvtpgkvp');
    table.json('qspahyafab');
    table.string('rzdimvjqke');
  });
  await knex.schema.alterTable('pvaqvhjift', function(table) {
    table.bigInteger('jxqoghvhew');
    table.string('cfqoypihyz');
    table.boolean('uxyoodddgj');
    table.float('yaotooxhkt');
    table.bigInteger('hhofhrwxcw');
    table.text('ngauaigbch');
  });
  await knex.schema.alterTable('morekgqlqz', function(table) {
    table.boolean('famwibbvxp');
    table.json('gkkmqtfpai');
    table.json('owmpgjbfgf');
    table.float('likjokbxav');
    table.string('uulidsgghw');
    table.json('pzfylbyyqb');
    table.timestamp('bmpfzrbocb');
    table.json('zkcakjrsiz');
    table.boolean('emwfcntkua');
  });
  await knex.schema.alterTable('jbzkvmkgpf', function(table) {
    table.float('wflieckbhj');
    table.float('qaywueizhi');
    table.float('asujiicwod');
    table.text('ylrarfsiji');
    table.timestamp('zrjcmrrsyq');
    table.text('voevoodmxz');
    table.integer('djzdcqpvsl');
    table.string('ohlhfwuaum');
    table.json('uqaxzodlvf');
    table.text('gcuevchuvx');
  });
  await knex.schema.alterTable('euzomcnjlc', function(table) {
    table.bigInteger('hitogqtajd');
    table.bigInteger('awbfexpjsx');
    table.float('sepsnrbwti');
    table.timestamp('axtmmczezy');
    table.bigInteger('rvanvupsob');
    table.string('njanuxkhtf');
    table.boolean('yrdhorcghz');
    table.string('bwqykgyzwz');
    table.string('xfzvqkphpu');
    table.bigInteger('gkitkvdavo');
  });
  await knex.schema.alterTable('xlezfukmvz', function(table) {
    table.timestamp('fenjtowxqa');
    table.text('yhxarfetad');
    table.string('mvbpfrpnex');
  });
  await knex.schema.alterTable('smfelsdfkn', function(table) {
    table.string('akjhzvlrgv');
    table.timestamp('jhvuumajiq');
    table.bigInteger('tfcrxgfpnt');
    table.string('avpakwcrox');
    table.boolean('jmkdkxwwtj');
    table.string('ewqxhcrpov');
    table.float('xxoipmgltd');
    table.bigInteger('bcipynoran');
  });
  await knex.schema.alterTable('aealostndp', function(table) {
    table.float('iwakmecpbz');
    table.bigInteger('lhophemozs');
    table.bigInteger('sjdskhynmf');
    table.boolean('uhvkzevsbm');
    table.string('gketcfsfka');
    table.text('sqdunklhjn');
    table.json('hnlnxucbdy');
    table.boolean('ngwtcshuih');
    table.integer('xxyheuyomi');
    table.string('wpbwsuhswi');
  });
  await knex.schema.alterTable('duqjxvobfm', function(table) {
    table.boolean('laxgqqibgz');
    table.string('qvvqqgktqq');
    table.boolean('ylbldanlzn');
    table.float('psfllsxbbk');
    table.float('pbqxpdwsdf');
    table.json('xibmvksrew');
  });
  await knex.schema.alterTable('yhijacniub', function(table) {
    table.bigInteger('idkrepmcts');
    table.string('cnxbxxbrav');
    table.integer('qnokrozbev');
    table.string('maimwnkoyd');
    table.integer('uxovsgpsjn');
    table.boolean('yzqqgkkktr');
    table.float('zoangzjkwm');
    table.bigInteger('rqhlwkwgur');
    table.timestamp('hvsmfksxcy');
    table.boolean('bgvzjbzght');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};