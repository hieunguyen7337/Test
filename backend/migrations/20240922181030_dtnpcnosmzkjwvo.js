'use strict';

/**
 * Migration: 20240922181030_dtnpcnosmzkjwvo
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cqkkonsoxl', function(table) {
    table.timestamp('rtxfqaerqk');
    table.boolean('fvzanmnxmo');
    table.float('slbctfknnt');
    table.json('pghjkiiugp');
  });
  await knex.schema.alterTable('rgnzvievqa', function(table) {
    table.integer('vxpctjcgfi');
    table.text('lzouhrcexb');
    table.bigInteger('alouasvrsy');
    table.string('cdysmfhogp');
    table.bigInteger('guviafgtty');
    table.float('dluywvtttx');
    table.timestamp('ohyixttpig');
    table.integer('ujnutoatpv');
    table.bigInteger('wlnoorqxyo');
  });
  await knex.schema.alterTable('ruhtxwuuoe', function(table) {
    table.float('fkrfwpuwmo');
    table.boolean('ttaodkjknr');
    table.bigInteger('ocyfrlbexe');
    table.bigInteger('rhunfgpvux');
    table.timestamp('egznyjwpuw');
    table.boolean('ztuxjooymj');
    table.json('vwlyvvncnf');
    table.float('wtvvcqfkmi');
  });
  await knex.schema.alterTable('ltcreqgseq', function(table) {
    table.text('nunitzyger');
    table.float('rzxiytqnpb');
    table.text('tqaptybmxo');
    table.boolean('vjuqqeozpb');
  });
  await knex.schema.alterTable('ietgohkchm', function(table) {
    table.float('okzhcofqti');
    table.string('tawlwbycmz');
    table.bigInteger('dmwjfdepmr');
    table.timestamp('cwqtmtalpm');
    table.string('vzipvyicwr');
    table.integer('jmtlwqeqwe');
    table.string('ukkgcizywl');
    table.json('pekjzpvocb');
  });
  await knex.schema.alterTable('rywzjgzxsh', function(table) {
    table.timestamp('vexpovtvds');
    table.string('yhogemdxdt');
    table.bigInteger('vzilyplbpg');
    table.integer('nnuqztbfar');
    table.boolean('rfclejfjqt');
    table.text('jlbxfmcznp');
  });
  await knex.schema.alterTable('royvtthxjw', function(table) {
    table.json('drykayjkpq');
    table.string('plthrikthy');
    table.integer('lrykouvdbg');
  });
  await knex.schema.alterTable('mswnrjeltd', function(table) {
    table.float('wgnayjkzhy');
    table.float('dssinntzkg');
    table.bigInteger('wnfjjtfjfd');
    table.timestamp('qgsmpnvwzq');
    table.timestamp('wcgsgvxipm');
    table.float('ioidebzguc');
    table.text('ecvqrsdxkm');
    table.integer('riliokmbzi');
    table.float('wziqxdvrnl');
    table.string('ovrsmmuzeu');
  });
  await knex.schema.alterTable('zbsqgazpii', function(table) {
    table.float('mpnvxhohkt');
    table.bigInteger('sdhnnxtynt');
    table.boolean('vwzmzlrsvo');
    table.bigInteger('cwxojumpeb');
    table.text('nxpwzbwspl');
    table.string('sgdxfhpwib');
  });
  await knex.schema.alterTable('hehergdyqh', function(table) {
    table.integer('stzrjhksrn');
    table.float('xtfufpdzif');
    table.json('jqxvikuhxb');
    table.string('ipbkpaisgd');
    table.integer('ocpeqfpgnj');
    table.integer('skgwyhefku');
    table.boolean('tqjvixzrgv');
    table.bigInteger('gdnqywwnqb');
  });
  await knex.schema.alterTable('fqvikehyjx', function(table) {
    table.timestamp('gefyefzjxu');
    table.text('acxhtqslka');
    table.integer('fcivudhwwi');
    table.text('aqgiaksopq');
    table.boolean('gidxjzguxw');
    table.string('zfcixkbinx');
    table.integer('wxxmiywjam');
    table.string('awcweipyhe');
  });
  await knex.schema.alterTable('ooyzvdfont', function(table) {
    table.json('uaoywvmvgb');
    table.json('gwzibefglm');
    table.bigInteger('sgmtpgrfxx');
  });
  await knex.schema.alterTable('oiritxjuzx', function(table) {
    table.float('ybiwslwzth');
    table.float('mjznyionsx');
    table.string('ldjoknhfdw');
    table.string('txvdsalzqy');
    table.string('zgvhlseyvl');
    table.float('hldbqraavw');
    table.float('waddmicwfg');
    table.string('pfbuaxeaos');
    table.timestamp('canarrpinb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};