'use strict';

/**
 * Migration: 20241204150142_iidlgzgfrhtxirq
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ubzofbopfj', function(table) {
    table.integer('nrxanjshcs');
    table.integer('fiacybalms');
    table.text('fxbjkjgkmz');
    table.boolean('hmwquxhsdb');
    table.timestamp('yqhoqniywo');
    table.integer('hzrbkuxgkl');
    table.text('pjzxqohdub');
    table.timestamp('owirrgwdhf');
    table.boolean('bdbqhgcaol');
    table.json('ltmpochvmb');
  });
  await knex.schema.alterTable('vyjmkyqfsc', function(table) {
    table.boolean('ucwwfryhtd');
    table.timestamp('lffvgjpiim');
    table.json('wnymmyoaaq');
    table.json('hktbuclrqf');
    table.timestamp('ygadcgsskj');
  });
  await knex.schema.alterTable('gbgawjbdcs', function(table) {
    table.text('vkvkzjjczb');
    table.bigInteger('lztoriqzoy');
    table.float('xozhwhpqxs');
    table.integer('hxepnvdzru');
    table.float('zfnsoqrxvq');
    table.text('czvvlftbxu');
    table.json('tpxzfnottm');
  });
  await knex.schema.alterTable('jxzklaqxho', function(table) {
    table.text('tdspknoati');
    table.integer('tmuibenauk');
    table.float('nqtwzpxlqj');
    table.boolean('wwwqczrnxu');
    table.text('bykpgzqqiu');
    table.string('mqrzibocwy');
    table.integer('welvydqoyj');
    table.json('bkqpdunzur');
    table.boolean('mogddzjztt');
  });
  await knex.schema.alterTable('hqegjinuzl', function(table) {
    table.text('wpqfmvoynv');
    table.bigInteger('txhnbmtfdt');
    table.timestamp('adpmuzlfat');
    table.bigInteger('wfiwvohuvp');
    table.timestamp('iiosddezke');
    table.boolean('tkazpasbrs');
    table.timestamp('ztmaidwipi');
  });
  await knex.schema.alterTable('lazipqycgo', function(table) {
    table.float('ihzopvjiru');
    table.timestamp('bpauizrefw');
    table.timestamp('wewuxuaokq');
    table.integer('wizierptiq');
    table.string('vgfvirjbqi');
    table.integer('lklxpqmdyc');
    table.timestamp('iagdthdvxy');
    table.json('rvllytrqaj');
  });
  await knex.schema.alterTable('ljstzwbwes', function(table) {
    table.string('paiakcuxyy');
    table.boolean('avsyzqattl');
    table.float('teldckcfpj');
    table.timestamp('fsugadhltm');
    table.json('zjnxydgcer');
    table.timestamp('xenozftbxo');
    table.float('zajxiryyzm');
    table.bigInteger('wvdjihrizi');
    table.string('ysilziolol');
    table.string('rlcynxrorq');
  });
  await knex.schema.alterTable('koqsrshmgi', function(table) {
    table.bigInteger('nprlenrpub');
    table.text('uecqpnwocq');
    table.json('lbgmtkjxci');
    table.bigInteger('hvfknlstzv');
    table.boolean('fteyfguurr');
    table.integer('fuuosbujmy');
  });
  await knex.schema.alterTable('lvbpkpvmbe', function(table) {
    table.string('gpbvedjiyd');
    table.timestamp('mugyinwcdd');
    table.json('ldewbglgzk');
    table.json('ukquzmesxb');
  });
  await knex.schema.alterTable('epjdnlbyaz', function(table) {
    table.json('byktslukpr');
    table.float('lmhbxyykoa');
    table.bigInteger('sfotcdkhbt');
    table.boolean('kjbnkgtlwh');
    table.text('oyuaezwijv');
  });
  await knex.schema.alterTable('qfaemxmlbg', function(table) {
    table.text('iiciignqtr');
    table.float('ipbvorattk');
    table.timestamp('mveilbqqln');
    table.text('qmssgziipe');
    table.text('khjcscpdyv');
    table.bigInteger('lpbpabhtve');
    table.text('mskdmffaog');
    table.text('cbqzrxfhkx');
    table.bigInteger('zdimjweide');
    table.bigInteger('mgmqyvmibv');
  });
  await knex.schema.alterTable('zuyvvrayhy', function(table) {
    table.bigInteger('obvngpzspm');
    table.float('awumcjbuyd');
    table.text('kezvjeqkln');
    table.text('pqrjyvfyqi');
    table.boolean('zvikjcxsos');
    table.boolean('bwlxtnsdfl');
    table.integer('hdmbfrsouf');
    table.float('kmvhqouvnz');
    table.string('pkvbrjxcrw');
    table.string('tfvlihhvmd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};