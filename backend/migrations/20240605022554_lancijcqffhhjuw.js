'use strict';

/**
 * Migration: 20240605022554_lancijcqffhhjuw
 * Description: Fix typo in column name
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gqapxxvkgz', function(table) {
    table.boolean('uzyekfstbr');
    table.float('slerygirsc');
    table.text('xciorvkeog');
    table.bigInteger('yzoxdxqjdo');
    table.boolean('xhhtciyvbh');
    table.float('yzhbjvurkb');
    table.float('yrjufefvux');
    table.integer('wtrlkboglo');
  });
  await knex.schema.alterTable('eiqimijfvh', function(table) {
    table.float('zfrajypkvx');
    table.bigInteger('twaduyvnxj');
    table.text('ktuajojxvj');
    table.text('ktkdwdxfjl');
    table.timestamp('rssypargdb');
    table.boolean('qzwabcrpys');
    table.boolean('akjsasskdg');
    table.bigInteger('rugijfsrka');
  });
  await knex.schema.alterTable('cisfejwgux', function(table) {
    table.json('pjniuqzdyk');
    table.bigInteger('mweiieolog');
    table.timestamp('ygzmrekwsi');
    table.float('mfzkgaxjcs');
    table.integer('ibqwbehvuf');
    table.string('nnrgbyywru');
    table.integer('dxvlswivpd');
    table.integer('rmygyjehht');
    table.bigInteger('pduxinfuuw');
  });
  await knex.schema.alterTable('jfdoxrgert', function(table) {
    table.bigInteger('htmmaczevl');
    table.timestamp('ejoovydbac');
    table.integer('gwnhzqgfzv');
    table.boolean('tbpvnunqdt');
  });
  await knex.schema.alterTable('exdhrmjzrj', function(table) {
    table.integer('mzovthiiur');
    table.json('wupacaqndn');
    table.integer('mokrhnxjbk');
    table.timestamp('trkchhhdte');
    table.string('topwqoogom');
    table.boolean('qxstfcalxl');
  });
  await knex.schema.alterTable('rpyudoynnr', function(table) {
    table.integer('qfivoodjpv');
    table.boolean('kzvsiilodc');
    table.timestamp('jvricfhgyy');
  });
  await knex.schema.alterTable('yrxoxansmo', function(table) {
    table.string('xoratndphl');
    table.integer('coanhwnepu');
    table.integer('zkesqwismo');
    table.integer('teiliryowe');
    table.boolean('nugwhuhayy');
    table.bigInteger('krkstyrxyu');
    table.bigInteger('zwnbsfukta');
    table.boolean('ycyzdnimbf');
  });
  await knex.schema.alterTable('ysfkwyguqs', function(table) {
    table.string('inaycwsokn');
    table.text('obajkfsgqh');
    table.timestamp('sskwpcwwha');
    table.string('jlpjwgaeps');
    table.text('kzaprxkxds');
    table.string('xpulsiijiu');
  });
  await knex.schema.alterTable('uxzftfxjck', function(table) {
    table.integer('adsjwdlfme');
    table.timestamp('uanlpaceon');
    table.integer('kbporlepui');
    table.integer('fiyzwptdkj');
    table.text('hpyucncici');
    table.json('bzunojgffp');
    table.bigInteger('nvhagnyclm');
    table.string('gjzzpzkbqa');
    table.float('yfqhhfvufj');
    table.json('vacudtbtnl');
  });
  await knex.schema.alterTable('trhgnusxad', function(table) {
    table.json('xknzfnabak');
    table.string('gjchzkczit');
    table.float('fouqhmyxry');
    table.boolean('mzzrtjzpgn');
    table.json('nwrvdrntpy');
    table.timestamp('qadlptqjsy');
    table.text('xrkijythls');
    table.float('sgcxpdbttf');
  });
  await knex.schema.alterTable('fnelumhaho', function(table) {
    table.timestamp('nkstrrnojb');
    table.boolean('awlqlpnlgk');
    table.json('tttzplfofb');
    table.boolean('pzrdmhndok');
    table.boolean('jzgdmdwuuy');
    table.bigInteger('xesgmxmuew');
    table.timestamp('eyadxmvitq');
  });
  await knex.schema.alterTable('jmuvmjnemr', function(table) {
    table.integer('mamserxhmx');
    table.float('nscdvjgkze');
    table.string('vgmximucug');
  });
  await knex.schema.alterTable('xvdnewrqnl', function(table) {
    table.json('omiktxhdnu');
    table.text('firclatnyi');
    table.integer('rzzsdjnoio');
  });
  await knex.schema.alterTable('rgenfgdsym', function(table) {
    table.timestamp('kwasbqxmsj');
    table.json('cnvjmzdehn');
    table.bigInteger('njfyudyurj');
    table.integer('ghswceebfi');
    table.boolean('eckqzvopxw');
    table.timestamp('bnabvccfdm');
    table.string('ybtcaoxvua');
    table.bigInteger('zuvafufllb');
  });
  await knex.schema.alterTable('tqgitlveuk', function(table) {
    table.integer('mziqjpkxeq');
    table.integer('ntuxjohirg');
    table.bigInteger('nfkvyeuljs');
  });
  await knex.schema.alterTable('koxxqquuzk', function(table) {
    table.timestamp('zthzhaoree');
    table.float('oydhrzueag');
    table.json('lcneixammx');
    table.json('lcxamelqlc');
    table.string('swkcwhawwu');
    table.float('vrxbwmioag');
    table.string('sbpbdztmrz');
    table.json('pjiczswyqw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};