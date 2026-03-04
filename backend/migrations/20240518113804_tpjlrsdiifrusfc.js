'use strict';

/**
 * Migration: 20240518113804_tpjlrsdiifrusfc
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('veyazjclgk', function(table) {
    table.timestamp('nogusbfuxy');
    table.bigInteger('poqdsfhtbx');
    table.string('pyogpdmnjz');
  });
  await knex.schema.alterTable('mgfvdyzikh', function(table) {
    table.boolean('qtcaqfeuzw');
    table.json('fyfujykvib');
    table.text('ykjseqckcx');
  });
  await knex.schema.alterTable('eryviftmay', function(table) {
    table.timestamp('nyirlzyrjm');
    table.text('wiknomepcs');
    table.text('xcdkxdkedp');
    table.bigInteger('yuzspelgcx');
    table.float('okkuigkpwk');
    table.float('ijlcqonhin');
  });
  await knex.schema.alterTable('oomkfzcrdr', function(table) {
    table.float('grfjtfnbwq');
    table.bigInteger('brgmqaqipm');
    table.json('zjrjflpest');
    table.text('jnewssxzcl');
    table.string('oermmminxe');
    table.float('dckpqqrdyz');
    table.string('hnskopmjqh');
    table.string('igveayfnxg');
    table.timestamp('iabpbzoqkm');
    table.text('vlrpuywrcx');
  });
  await knex.schema.alterTable('nidfjvjwuy', function(table) {
    table.boolean('ittujstncl');
    table.bigInteger('facwupdfzw');
    table.bigInteger('myiicbosup');
    table.timestamp('wpvchjwqjw');
    table.float('ipbebswned');
  });
  await knex.schema.alterTable('rfbhtgiobr', function(table) {
    table.bigInteger('gvuzqkbnji');
    table.text('pordrrvhjr');
    table.json('sksnthqddu');
    table.timestamp('ndtwmanmlw');
  });
  await knex.schema.alterTable('vcyhndznbf', function(table) {
    table.bigInteger('urebdyudqk');
    table.integer('dqstcntilv');
    table.integer('wjbjldyavw');
    table.json('csqmwdujdx');
    table.timestamp('viqttxhlps');
  });
  await knex.schema.alterTable('opcijjagul', function(table) {
    table.json('agvjiiwcdm');
    table.float('rcofvfphnv');
    table.json('pnmitwruch');
    table.float('bzvglfhlan');
    table.timestamp('uqnaxtqqni');
    table.bigInteger('gjhptwuygz');
    table.boolean('sscjhofwdk');
    table.string('fxrlypbiqd');
    table.text('phmvhsgwqg');
    table.float('mluinnowug');
  });
  await knex.schema.alterTable('lkeyrznaru', function(table) {
    table.timestamp('bslhyjakve');
    table.json('mnoyqzjtup');
    table.float('xhockhvlbl');
    table.json('ulafspqimh');
    table.timestamp('vztkmoeoaw');
    table.float('gufxpdewlr');
    table.boolean('vfjxbydsbg');
    table.bigInteger('ycpbgfzsnj');
    table.boolean('qmtkxskxoi');
  });
  await knex.schema.alterTable('erlvicwauk', function(table) {
    table.json('djyohqnvfn');
    table.float('npnllrpoew');
    table.timestamp('acitwzmqni');
    table.json('kqqxfglomm');
    table.text('vttrczdgxd');
    table.string('gnkswvkens');
    table.json('cmkcwswllt');
    table.json('sodvirnqxh');
  });
  await knex.schema.alterTable('nuhsmjtnkb', function(table) {
    table.bigInteger('mxaqfqgvpy');
    table.boolean('atkedwqvbu');
    table.json('ffmvvhqfkz');
    table.integer('sdxddrzfat');
    table.text('zveixhdgvq');
  });
  await knex.schema.alterTable('umdbvehpgd', function(table) {
    table.integer('ycwfjgqoxx');
    table.integer('quowcpewti');
    table.json('szdhmgofxk');
    table.timestamp('beupgiasfj');
    table.bigInteger('xcimmvbjvk');
    table.boolean('xmntyznhrm');
    table.text('fdzzcfupxr');
    table.text('qiohcrwlix');
    table.string('fjhzpferco');
    table.json('lxfgncqpqm');
  });
  await knex.schema.alterTable('cqrjqeheac', function(table) {
    table.float('ayhcwhlrcr');
    table.boolean('zdavdcgzjr');
    table.string('vtluyyovot');
    table.integer('cpfctnicav');
  });
  await knex.schema.alterTable('jjruatwirj', function(table) {
    table.string('rzekruvqfb');
    table.integer('poakavztih');
    table.text('huborthtme');
    table.timestamp('bpmklekibd');
    table.json('jeadjfdoup');
  });
  await knex.schema.alterTable('fococodrsp', function(table) {
    table.text('wkdcdadwrx');
    table.integer('zreqwydzzn');
    table.string('zovejmehqd');
    table.timestamp('brldlbhysa');
    table.boolean('knzonpdequ');
    table.timestamp('ujwixcxqjl');
    table.integer('opmxxftlnr');
    table.json('kiijsjpfgo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};