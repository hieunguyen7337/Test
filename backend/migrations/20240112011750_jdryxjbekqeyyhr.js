'use strict';

/**
 * Migration: 20240112011750_jdryxjbekqeyyhr
 * Description: Rename field
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vsrxwyjtva', function(table) {
    table.bigInteger('zrqohzgpej');
    table.integer('lpzgpjyaro');
    table.string('lqqqypkddv');
    table.boolean('sqqfsxnzmg');
    table.boolean('hkikpsreiy');
    table.string('vigagaagqc');
    table.json('uwmbixyelt');
    table.json('uglyvxzxkv');
    table.text('lnffxhrygt');
  });
  await knex.schema.alterTable('mfzyirkowt', function(table) {
    table.json('gsxfctrxvx');
    table.bigInteger('csfztwxpoi');
    table.json('sgbkaorpve');
    table.string('cnvbozvygd');
    table.bigInteger('oboqbycgcp');
    table.json('qmkscgoyzw');
    table.integer('oopwxbsmzu');
    table.boolean('jkmwsltiwu');
  });
  await knex.schema.alterTable('xpaemkgaer', function(table) {
    table.timestamp('jikquqjtzx');
    table.json('ayrzkskaka');
    table.boolean('pogepiskae');
    table.integer('sagkosbxrw');
    table.timestamp('jtghgnjndc');
    table.string('gcscwguzpp');
  });
  await knex.schema.alterTable('zwiwqksqmi', function(table) {
    table.float('lyanjeeikm');
    table.bigInteger('zavwslysjg');
    table.integer('zronztvhqa');
    table.bigInteger('vhndkcpjqt');
    table.timestamp('mdgvvavznv');
    table.bigInteger('ygmscgtcds');
    table.text('dywxshmbbi');
    table.boolean('yaedjsxcmd');
  });
  await knex.schema.alterTable('rkctheynvl', function(table) {
    table.json('sfmjvwqbxl');
    table.bigInteger('stradqtooi');
    table.boolean('rbzipngkuf');
    table.boolean('fytbkxkkfp');
    table.bigInteger('bmupyxtzsi');
    table.boolean('ptcuxcnfhj');
  });
  await knex.schema.alterTable('khjaehngbb', function(table) {
    table.integer('ftatjkhlfm');
    table.text('omxorpflcr');
    table.float('mfgxjinavh');
    table.json('ooocdddhif');
    table.integer('lnffkouews');
    table.string('kygeldsvxo');
    table.json('mzfbxeuzjt');
    table.timestamp('zkvqumrmgg');
    table.string('hudphhovqf');
    table.bigInteger('keqjifehha');
  });
  await knex.schema.alterTable('ccbmysmkyq', function(table) {
    table.json('zwjmwcgchg');
    table.boolean('wvwcknenft');
    table.text('csmkutyurj');
    table.text('lvmzulvuwy');
    table.text('safyebkatm');
    table.integer('mvxvnyvgjh');
  });
  await knex.schema.alterTable('qvfgrvyqxt', function(table) {
    table.boolean('qykhblhbvl');
    table.boolean('dsvjdrgsiq');
    table.timestamp('nlcgfwbjhr');
    table.string('capqcditga');
    table.bigInteger('hesrjguixq');
  });
  await knex.schema.alterTable('dvzkmrnrhj', function(table) {
    table.string('qwnjmhvyed');
    table.bigInteger('dwjzhhxonk');
    table.bigInteger('bxzqrscstk');
    table.string('wbtzxwryib');
    table.string('xbuamqzitl');
  });
  await knex.schema.alterTable('xwtkvefvrj', function(table) {
    table.string('evufrnyqix');
    table.integer('thlrnaxgus');
    table.timestamp('sxlksjhkko');
    table.json('anuzhupjnj');
    table.timestamp('dduaomcmww');
  });
  await knex.schema.alterTable('jpwaxolgjb', function(table) {
    table.text('isscdrcbkt');
    table.timestamp('djlhhrvudk');
    table.bigInteger('jsejamcdhw');
    table.string('zcolbaskki');
    table.boolean('ybtzmtdbzw');
    table.boolean('krlfiavcng');
  });
  await knex.schema.alterTable('cbhuxlfmsj', function(table) {
    table.timestamp('qgutfxzdbm');
    table.timestamp('vtvepbnvrj');
    table.integer('scmfrfseva');
    table.text('iwucrhwdxj');
    table.float('btvwhrioty');
    table.integer('exlauizcoa');
    table.timestamp('qxblbknavx');
    table.string('wfhsbjbiqe');
    table.text('nftxpdimzs');
  });
  await knex.schema.alterTable('ldsvzpfvpa', function(table) {
    table.float('vzukqnpghx');
    table.boolean('wvmxfywvod');
    table.bigInteger('vrfrxdvpxy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};