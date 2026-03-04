'use strict';

/**
 * Migration: 20240721043653_cleojapqedsphaa
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qdzahbcopx', function(table) {
    table.string('xvclapkskj');
    table.boolean('fqrkdtjapc');
    table.boolean('wzyemvapnb');
    table.integer('zsucjohkat');
    table.float('ubaacnlyst');
    table.timestamp('tyahwdmjwu');
    table.json('xuvmowbuii');
    table.json('xvfuxsossd');
    table.text('agchinxxnt');
  });
  await knex.schema.alterTable('gzuikrflwr', function(table) {
    table.json('yglvxmgybe');
    table.json('dgvtzrjoce');
    table.text('frxvctvzor');
    table.boolean('xvmnscuaxt');
    table.timestamp('iurvshknjy');
    table.boolean('bdsmpbwvqy');
    table.bigInteger('kyimmoxxpo');
    table.json('pcobnxcmyg');
  });
  await knex.schema.alterTable('atsnpviylr', function(table) {
    table.bigInteger('inqyinhllp');
    table.boolean('eqjnrkgcro');
    table.text('tkoczjgvhe');
    table.integer('zaappqtryj');
    table.text('yzornzgbhx');
    table.float('pxudgzzgct');
    table.float('ymgdbocmfn');
    table.float('bkqelxnzwn');
    table.integer('yhbdbufrwj');
    table.string('ewrixvzcqz');
  });
  await knex.schema.alterTable('jgrmlxsmuk', function(table) {
    table.timestamp('wsrlbqcgdb');
    table.string('xaazhbdrqp');
    table.text('sujxammqdf');
    table.bigInteger('kltdefrwia');
    table.float('tmcfwkzydn');
    table.bigInteger('uusvqglqbs');
    table.float('dbpwbalghu');
    table.float('jevtuwvgrg');
    table.text('zdofamzdim');
    table.string('inftlyulac');
  });
  await knex.schema.alterTable('giqdqbesul', function(table) {
    table.integer('hmtqzyhwgi');
    table.text('gywuwsjoyg');
    table.json('rjzhmhynnx');
    table.float('wpgodxolrx');
    table.timestamp('belkmbhdld');
    table.text('ifapnhfggt');
    table.json('jfkhkecjwn');
    table.float('dqajhqwqhp');
    table.json('dxmabfqqgb');
    table.text('zpxyhrdnju');
  });
  await knex.schema.alterTable('nviywksbtm', function(table) {
    table.bigInteger('netshvqehp');
    table.json('ylslekmuri');
    table.text('snlhlyfssb');
    table.float('uytmtelwyx');
    table.timestamp('oebpgfjncy');
    table.json('bdycjjhsqc');
    table.timestamp('dvwahhyxqo');
  });
  await knex.schema.alterTable('isksxctryh', function(table) {
    table.text('hgppxpwlze');
    table.boolean('rjntjgcspg');
    table.json('pgxsdsplsc');
    table.integer('jkgqiccpjo');
    table.string('xrslthxqbn');
    table.boolean('ikklunaaik');
    table.bigInteger('bkvbmoxfyq');
    table.integer('exugvaktvg');
    table.bigInteger('swewephaaa');
    table.string('wimyfskzyy');
  });
  await knex.schema.alterTable('hpcupluomq', function(table) {
    table.bigInteger('ghqkgraxum');
    table.string('bwdtttadax');
    table.bigInteger('adaqtdlstw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};