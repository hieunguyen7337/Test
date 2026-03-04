'use strict';

/**
 * Migration: 20240722102023_yojpeielsnhszdq
 * Description: Remove column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rbprvfkmcb', function(table) {
    table.bigInteger('ucxraxkybo');
    table.bigInteger('qmifrlvxgk');
    table.integer('wpsevxlyvw');
    table.json('jddyyreiso');
    table.text('dlentqsuax');
    table.text('qgbtfjarti');
    table.bigInteger('wxspbekmxp');
    table.float('vpsehwxkxh');
  });
  await knex.schema.alterTable('tvjfzruvxr', function(table) {
    table.string('pfnngphdnp');
    table.string('qixxvbkojw');
    table.timestamp('svffwyjlkw');
    table.boolean('nnsxtonpis');
    table.string('hbbqtilfna');
    table.bigInteger('ftuxyalcjq');
    table.string('ixbeliokvf');
    table.bigInteger('xvkkzuanmh');
  });
  await knex.schema.alterTable('jgewdfyrja', function(table) {
    table.text('nqughrdnxb');
    table.boolean('ozewxxmtsq');
    table.bigInteger('nrqvimrdtd');
    table.boolean('xwfnczjltp');
    table.timestamp('xzycojhczm');
    table.integer('qkvwfvqyqo');
    table.float('ynbkfgnedh');
  });
  await knex.schema.alterTable('yjepfmeqxw', function(table) {
    table.float('bcfwixmuuo');
    table.timestamp('qxeggusmla');
    table.float('admvycapmz');
    table.integer('comrrpikzh');
    table.boolean('sjnnqzudhf');
    table.bigInteger('nwpprfbamw');
    table.string('innpwionbp');
  });
  await knex.schema.alterTable('bscpychehs', function(table) {
    table.string('rruqynrhzv');
    table.timestamp('doeatffxxn');
    table.boolean('paqhxkxnuh');
    table.boolean('bfsyjqylel');
  });
  await knex.schema.alterTable('foicrsijbl', function(table) {
    table.bigInteger('zvaamucrmt');
    table.json('vjgdwshmdo');
    table.boolean('bkcezmxxov');
    table.text('maqiirgtzn');
    table.float('utafyrzujo');
  });
  await knex.schema.alterTable('galpwuqrfe', function(table) {
    table.bigInteger('zxbkmhndhj');
    table.integer('skcbwwjrui');
    table.json('pauevlgusr');
    table.boolean('kymzifwjng');
  });
  await knex.schema.alterTable('jrzkaevviy', function(table) {
    table.bigInteger('makgdgwvgj');
    table.bigInteger('kmjifcgzlx');
    table.float('oqgoncgmiq');
    table.text('kprfvebvma');
    table.integer('gqjsmxlbyc');
    table.boolean('gzcaoeysag');
  });
  await knex.schema.alterTable('hfwjyxttky', function(table) {
    table.integer('cqrallager');
    table.string('adkaqisjqk');
    table.boolean('hpcnakxppu');
    table.json('pewzbbqjyw');
  });
  await knex.schema.alterTable('fwftmqnypp', function(table) {
    table.boolean('mxbapbtdwo');
    table.boolean('qzhwbbeaax');
    table.timestamp('dxuzejpwvc');
    table.json('lzrbiagctw');
    table.float('hrirosuowd');
    table.timestamp('fpgavptekb');
    table.json('ifrcsnnmht');
    table.json('fephgmhpmz');
    table.boolean('hmkwmgevgz');
  });
  await knex.schema.alterTable('idyemttgcr', function(table) {
    table.text('edftexbcqp');
    table.string('lsnfbojpix');
    table.float('spmfbzwzgh');
    table.timestamp('jblwdntvwx');
    table.integer('vzhmsoyiyj');
    table.integer('ttofscvpkt');
    table.float('zzvmqxcaav');
    table.integer('jekubvympm');
    table.string('wukoswmggp');
    table.float('rtvirgcjsd');
  });
  await knex.schema.alterTable('uniwftzdez', function(table) {
    table.timestamp('rzfvsaxwyv');
    table.timestamp('vncrxdbfkm');
    table.json('nelggqssia');
    table.boolean('cckqmxwzld');
  });
  await knex.schema.alterTable('nemladcyvp', function(table) {
    table.timestamp('hwvvthnzbb');
    table.integer('dvfyfwvivr');
    table.json('jboajvreyu');
    table.float('fgbzkdheqq');
    table.json('teebdxrgqe');
  });
  await knex.schema.alterTable('mwmidpxffw', function(table) {
    table.string('uatemudsax');
    table.integer('xxkshmmgok');
    table.integer('apwnohfcxv');
  });
  await knex.schema.alterTable('ielsycpmoh', function(table) {
    table.text('brxdqtgbbu');
    table.float('ffdrahenil');
    table.float('gnhictcjni');
    table.json('rnogsmxbvd');
    table.string('xujzhqijvj');
    table.text('fnkafxxtdf');
    table.float('spunbncnrg');
    table.timestamp('ecbiflolqi');
    table.float('jkbhixciea');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};