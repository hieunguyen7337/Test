'use strict';

/**
 * Migration: 20240116012006_suufzepvkfklyqk
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zseslqmcuo', function(table) {
    table.bigInteger('lbpatafqvx');
    table.integer('ucuohubkyf');
    table.float('glwecurgag');
    table.timestamp('jragfukwww');
    table.string('zkchovikox');
    table.float('gqqlrtfwwn');
  });
  await knex.schema.alterTable('kggiygbpcf', function(table) {
    table.text('yzhquixuwk');
    table.string('jeysndaxnd');
    table.boolean('sfjmhygevj');
    table.bigInteger('waimbxinvh');
    table.string('mksgtqqome');
    table.json('umglsnaiau');
    table.text('zqedvydohh');
    table.bigInteger('kqewbwmpeo');
    table.json('eaaqrqunee');
    table.string('sdmswzuzqy');
  });
  await knex.schema.alterTable('rxzfulojsm', function(table) {
    table.float('lftwenrhmi');
    table.text('ozmgyilqet');
    table.boolean('wccrkjldxa');
    table.text('tmbeafoisa');
    table.bigInteger('qjnsgglxai');
    table.integer('ymhisjdibm');
    table.text('gsuhofeuvi');
  });
  await knex.schema.alterTable('aaxiyblyec', function(table) {
    table.integer('izzowgkykb');
    table.timestamp('btgutjotlc');
    table.text('jllkmspbtn');
    table.integer('mzgmooxtui');
    table.integer('vxhdfmyipr');
    table.float('lbtkyvhstk');
    table.integer('zusdcbgjxn');
    table.json('bsreupusgj');
  });
  await knex.schema.alterTable('jnzyzbmshm', function(table) {
    table.bigInteger('mxynbdbjjy');
    table.text('vhxqdxbqjl');
    table.text('vjaglbgkzc');
    table.string('xtwlntypam');
    table.float('ewetvhtyaq');
    table.bigInteger('rbsvqqzlni');
    table.timestamp('mzpalhlqps');
    table.timestamp('xskopxjhtk');
    table.string('xeljjzvvhs');
  });
  await knex.schema.alterTable('nzxgwrjsmv', function(table) {
    table.float('xytfzxhgjv');
    table.boolean('fcskfcrqyd');
    table.integer('ezncwrsgwv');
    table.timestamp('qxldzpxndq');
    table.string('aungggypnd');
    table.integer('arbqrneroe');
    table.boolean('gcyfovppki');
    table.text('hyanntqgph');
  });
  await knex.schema.alterTable('ijsxuxuyof', function(table) {
    table.json('vylrubigjv');
    table.integer('svqjnvsjmu');
    table.float('ugfbjpygzq');
    table.timestamp('kmydkscbpj');
    table.integer('dgkklmdfox');
    table.string('fspnfqboma');
    table.text('powpdmvoib');
    table.float('jyaopsxypz');
    table.string('aphxfpmhsp');
  });
  await knex.schema.alterTable('ibxamnkwpt', function(table) {
    table.integer('mjitoglvkt');
    table.timestamp('pbolwziyfd');
    table.json('jireyfpiek');
    table.float('osjvtbmkbu');
    table.string('vizzpfhhlq');
    table.float('rkqondxvce');
    table.json('npahevhrwk');
    table.float('qsdiyyfutz');
  });
  await knex.schema.alterTable('jbevvcrfxk', function(table) {
    table.text('xpdsbsjnpc');
    table.boolean('vltfsfkqpx');
    table.json('wdjnzafcuo');
    table.boolean('lnofaounzu');
    table.json('aiipzosvhe');
    table.text('xjwyfexpbw');
    table.string('gdpbuoohez');
    table.integer('hpfvdzsnob');
  });
  await knex.schema.alterTable('coqodwnebo', function(table) {
    table.string('petkmwsqqx');
    table.timestamp('pmrnqmleoi');
    table.boolean('cpybohluhl');
    table.boolean('zwjffzopsh');
    table.json('ighetqcldm');
    table.boolean('iptxyuktcz');
    table.bigInteger('ipokcyijhp');
    table.timestamp('gxagtuarob');
    table.string('nfenbnyyes');
  });
  await knex.schema.alterTable('ejtvgazkiu', function(table) {
    table.json('hunlowglgv');
    table.text('idocetqzuu');
    table.json('fijuudkozc');
    table.boolean('rmfkogfbbu');
    table.integer('ounvftosnx');
    table.timestamp('hhbqvpghwo');
    table.integer('ywtoxiwfmv');
  });
  await knex.schema.alterTable('isclxndymy', function(table) {
    table.bigInteger('pgnrpoyfff');
    table.timestamp('xvcqlprtcj');
    table.timestamp('sxdltoxspu');
    table.boolean('cmsoxyehkx');
    table.boolean('pnufhblnij');
  });
  await knex.schema.alterTable('gzoimvivol', function(table) {
    table.integer('mltvgbycde');
    table.json('ahybtvkxjs');
    table.string('uucypmhiuz');
    table.integer('paiujrwqlp');
    table.float('osxoplrify');
    table.json('sqzpkscuwp');
    table.timestamp('fqltbmaxrb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};