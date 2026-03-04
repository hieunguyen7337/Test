'use strict';

/**
 * Migration: 20240716064627_xhmqpdricotuotg
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hfyzvajvhb', function(table) {
    table.boolean('jlcynsdaox');
    table.text('hmthyfiaim');
    table.integer('xmegccuhyq');
    table.timestamp('hfbpdmyckn');
    table.bigInteger('fahrjchycm');
    table.json('oxnggzejmi');
    table.float('snyagppztt');
  });
  await knex.schema.alterTable('hcmalbqaix', function(table) {
    table.integer('preioaxkph');
    table.json('wlsnntuvsd');
    table.bigInteger('kubcojukuv');
    table.boolean('lghrsshsgb');
    table.string('qbgjqiltsc');
    table.text('owrekmteci');
    table.float('lpqfechcwl');
  });
  await knex.schema.alterTable('ipaoqolgon', function(table) {
    table.bigInteger('bgzvpndfwi');
    table.boolean('ihrtwuotys');
    table.bigInteger('apgwyybrxm');
    table.float('unwdquqouk');
    table.string('mxsndhhpmu');
    table.string('wvwpvqlcxw');
    table.bigInteger('wcjusewrmu');
  });
  await knex.schema.alterTable('lckeqfwtan', function(table) {
    table.integer('ldzvxibdft');
    table.string('gjvelltaoh');
    table.text('avfgevxuda');
    table.boolean('oowsiixmdj');
    table.bigInteger('mwywirymao');
    table.json('sukytnjoxh');
    table.float('tpbwmsmzcq');
    table.boolean('uqgkjzmtvx');
  });
  await knex.schema.alterTable('gatvouauxv', function(table) {
    table.integer('ncyddmtvkp');
    table.float('gpjfwfhkvd');
    table.bigInteger('ajtphorutn');
    table.integer('jqybfhcqjc');
    table.json('xbccjigknt');
  });
  await knex.schema.alterTable('vhmkhnggea', function(table) {
    table.boolean('wygqlgzbrx');
    table.text('olvwiqpxmu');
    table.string('uynpuhkimy');
    table.bigInteger('yqxbbgvxca');
  });
  await knex.schema.alterTable('ucluyxgtuj', function(table) {
    table.boolean('ankzznidzq');
    table.timestamp('vjlwgpzfmk');
    table.float('tgfdvlojbi');
    table.float('djmemfanss');
    table.timestamp('sdhgtejayd');
    table.text('vevykpynsg');
    table.integer('dgucyzgwgl');
  });
  await knex.schema.alterTable('gxonliqbef', function(table) {
    table.text('tqqafvmqol');
    table.string('hjrqabgkrj');
    table.timestamp('ltkdnvkcal');
    table.float('oteswczoku');
    table.bigInteger('lvukebdiaj');
    table.text('lvzmqlrong');
    table.boolean('ucfebrrqet');
    table.json('mzbyjymluo');
    table.float('zomikrhxnn');
    table.boolean('igwcwxcfwx');
  });
  await knex.schema.alterTable('riauzzbkij', function(table) {
    table.json('ptoyizdxql');
    table.bigInteger('kvoaiuzjrj');
    table.string('yefdgxujcj');
    table.integer('icewhgywjo');
    table.boolean('lubnwghnzb');
  });
  await knex.schema.alterTable('vgoympsmfa', function(table) {
    table.float('nkifyrmzeo');
    table.text('utxsmwrthz');
    table.boolean('kxglvdtigj');
    table.string('vvcoiacflo');
    table.integer('tvjsualesi');
    table.json('xruyxrqliu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};