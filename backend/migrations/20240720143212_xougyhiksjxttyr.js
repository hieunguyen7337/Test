'use strict';

/**
 * Migration: 20240720143212_xougyhiksjxttyr
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tfqvxtovgp', function(table) {
    table.float('arzuymlstx');
    table.float('fyujcvrqvk');
    table.boolean('rvhwebesww');
    table.timestamp('dfkutwzkqk');
    table.text('qhowtfupka');
    table.string('kxevhgjhwd');
    table.integer('zfnelycpno');
    table.bigInteger('qvcjsibtdj');
    table.boolean('eyuhruqmes');
  });
  await knex.schema.alterTable('akefzialgn', function(table) {
    table.text('ingjlnfngy');
    table.bigInteger('vurpslrmyb');
    table.boolean('kbjhcarzel');
    table.boolean('pbzlrobjzf');
    table.text('uhydrowidi');
    table.bigInteger('oawlchnhfz');
    table.integer('spitlymblh');
    table.boolean('ixvgtojrvx');
    table.string('xgwvuvzcfp');
  });
  await knex.schema.alterTable('sqxxqeepzr', function(table) {
    table.bigInteger('wdbjiaanqe');
    table.integer('mevllwsrvz');
    table.timestamp('qedgrwrrgs');
    table.boolean('tllemsdeuq');
    table.bigInteger('bjclsdftgf');
  });
  await knex.schema.alterTable('nkilmryvqr', function(table) {
    table.float('pmzqoacvsu');
    table.timestamp('wgjlljfrln');
    table.text('gxlohrvprs');
    table.text('oebydlhqgt');
    table.bigInteger('fvuvttiigx');
  });
  await knex.schema.alterTable('biyzmepjer', function(table) {
    table.timestamp('qqrpuimpmp');
    table.timestamp('mkhezgfmmz');
    table.text('uiyishzmmb');
    table.float('mpalxuvvea');
    table.bigInteger('dtihefqvou');
    table.string('kmattsxyos');
    table.json('scftaqufnm');
  });
  await knex.schema.alterTable('xzouhvbmxg', function(table) {
    table.json('yedezpweaz');
    table.timestamp('cefpppjcbu');
    table.timestamp('xcorsssrqr');
  });
  await knex.schema.alterTable('noryxxuisf', function(table) {
    table.integer('vmjijzxbqg');
    table.boolean('ygtnxlymjm');
    table.float('qsjoqdtcwn');
  });
  await knex.schema.alterTable('muyyiicsqm', function(table) {
    table.boolean('odktopionx');
    table.bigInteger('yyaowssdbi');
    table.json('kcykylywxo');
    table.json('onnlakxysm');
    table.text('qywfylnpyv');
    table.boolean('swxzkixvxy');
    table.integer('bjeahyqhrw');
    table.timestamp('intucfggva');
    table.json('jtadfemeuz');
  });
  await knex.schema.alterTable('ufycdzqopn', function(table) {
    table.float('qetbzqmuvx');
    table.text('mmcypnqmnx');
    table.integer('tcmrpgwgih');
    table.boolean('mavzrsmsuw');
  });
  await knex.schema.alterTable('brnplvsjid', function(table) {
    table.float('ezwlaqjiga');
    table.timestamp('rnqnwzybne');
    table.float('xthietugpy');
    table.text('ffgamzgdlm');
    table.float('bychmxaqxv');
    table.boolean('zyeqzkoubh');
    table.json('oudvlgihbq');
    table.string('rlelcsrepp');
    table.json('yfucveizmf');
    table.bigInteger('jnrbujfnkx');
  });
  await knex.schema.alterTable('jombyiclwu', function(table) {
    table.text('dwrcxltnqa');
    table.timestamp('rsatmdedka');
    table.integer('khqazvjhyt');
    table.boolean('bmqxoxyvnz');
    table.float('wgnyyqicqr');
    table.timestamp('ztgrpftujj');
    table.float('zonwmpkqlt');
    table.bigInteger('saqnzjquvd');
  });
  await knex.schema.alterTable('nthpxblmwa', function(table) {
    table.timestamp('hcnjimsbia');
    table.timestamp('dcjwovkjei');
    table.bigInteger('plnwgchoor');
    table.string('auiufldjxx');
  });
  await knex.schema.alterTable('ozcdtogwwo', function(table) {
    table.integer('jsilqyidqr');
    table.text('cwwhxbsjsy');
    table.json('vzkjunoyoz');
    table.boolean('rsykppteit');
    table.timestamp('zssutqfmkw');
    table.boolean('hqnbofcmxe');
    table.json('cugxbwjmgy');
    table.bigInteger('czcolmqcgg');
  });
  await knex.schema.alterTable('vnqvapsuzw', function(table) {
    table.integer('irjyslqbhl');
    table.string('lpelwwuihy');
    table.bigInteger('nfdialjlng');
    table.string('obhddhgfgl');
  });
  await knex.schema.alterTable('fiidxmjxtn', function(table) {
    table.text('cmckhffcvw');
    table.integer('avxtbewtdv');
    table.json('vonjmaycmu');
    table.boolean('weuockyoms');
    table.bigInteger('wblflsgmbg');
  });
  await knex.schema.alterTable('jvnrwjjxgz', function(table) {
    table.integer('nauoyivqht');
    table.string('ncytusyjzg');
    table.string('cyxbmbxodd');
    table.boolean('piwormcagk');
    table.boolean('epgrpiriti');
    table.float('lgdmghslud');
    table.float('urrjiaclvy');
    table.timestamp('xzslvxwtyi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};