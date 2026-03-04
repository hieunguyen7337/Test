'use strict';

/**
 * Migration: 20240909183915_zwvsugrmjdzhmbx
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lailvhukdu', function(table) {
    table.boolean('blfimifacn');
    table.text('wkuzllvmrj');
    table.bigInteger('cvctsypdja');
    table.float('iiiwsyfljt');
    table.float('wzqqzxqarv');
    table.integer('iuosrsrlnh');
    table.integer('qleyvxfany');
    table.text('eaknqofdpj');
    table.json('izlewxelnc');
  });
  await knex.schema.alterTable('mkaxtwrxra', function(table) {
    table.bigInteger('hbxnkoeufn');
    table.bigInteger('rhavupzmns');
    table.text('bcdktvodur');
  });
  await knex.schema.alterTable('pmxwyywpon', function(table) {
    table.text('wbolfnkffu');
    table.boolean('gcacjvxtyk');
    table.integer('dpmdgrpjnn');
    table.bigInteger('ogpopcedsa');
  });
  await knex.schema.alterTable('pihkvzsxro', function(table) {
    table.string('hcjcyipdcx');
    table.timestamp('myswyhojiw');
    table.float('iqnxcssfyy');
    table.json('vqkpziomou');
    table.text('hdnnowckyl');
    table.integer('ynjxwtqxvj');
    table.boolean('xfhzlyowld');
  });
  await knex.schema.alterTable('psjwmmqbjt', function(table) {
    table.timestamp('odkmhjkbcl');
    table.float('vimbvbipfh');
    table.string('zvsxstzpvt');
  });
  await knex.schema.alterTable('japcgqdvnk', function(table) {
    table.timestamp('knmokaezlt');
    table.integer('ymewdnfgnl');
    table.float('mdcfmmgvez');
    table.integer('pswhzkmtim');
    table.string('gcbitioqpu');
    table.string('mcojkkhevm');
    table.text('uqbkbssalc');
    table.bigInteger('moeifkbzdt');
    table.json('kasnnttuvc');
    table.string('mdldljmsym');
  });
  await knex.schema.alterTable('keqdfrbtgk', function(table) {
    table.text('wxylzuewox');
    table.boolean('kwyyqicyge');
    table.boolean('tplwodwlhe');
    table.timestamp('drqhbojcyr');
    table.float('nifyusyseo');
    table.text('vsrskfxwzd');
    table.json('xjymaycehs');
  });
  await knex.schema.alterTable('ddvsjgomzb', function(table) {
    table.string('auimijomlt');
    table.json('qltxeuxeol');
    table.json('gjecnkcxwp');
    table.string('rzuwojqoki');
  });
  await knex.schema.alterTable('kisowwsnbv', function(table) {
    table.timestamp('vbhoehvden');
    table.float('otntpsivim');
    table.integer('tkyyweqgvu');
  });
  await knex.schema.alterTable('afvptfuwwq', function(table) {
    table.timestamp('kossegkime');
    table.json('yrrvsjahhn');
    table.boolean('llbtckjkqy');
  });
  await knex.schema.alterTable('ozcjeoepah', function(table) {
    table.float('eryhediemf');
    table.float('yavqwmglxt');
    table.integer('cseonecbdp');
    table.string('xboavzjdvf');
    table.bigInteger('pstmnfshih');
  });
  await knex.schema.alterTable('zlclupdtqz', function(table) {
    table.string('qvliokmnqb');
    table.timestamp('iihrvisdze');
    table.timestamp('jokofykpeq');
    table.json('oqlexmrofv');
    table.float('jyqiirdnkb');
    table.integer('afqjgczpwa');
    table.string('wrrcelpiss');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};