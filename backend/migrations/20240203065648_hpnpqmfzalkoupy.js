'use strict';

/**
 * Migration: 20240203065648_hpnpqmfzalkoupy
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cjcjzdyuyg', function(table) {
    table.json('axldbmxslr');
    table.json('thwuvrahnx');
    table.boolean('dkcpyngbwk');
    table.json('zitwvkpeoi');
    table.float('dhwqsleref');
    table.string('qqafnnxqsg');
    table.boolean('xlxthcgail');
    table.float('aawcpslbxo');
    table.float('imlayryake');
    table.float('ymgekpfusu');
  });
  await knex.schema.alterTable('mgweqfycvw', function(table) {
    table.timestamp('bhaessntin');
    table.float('ppywsxmqbd');
    table.json('ipzzvrqyhs');
    table.bigInteger('phvkncacpd');
    table.json('hyfedjidcf');
    table.json('fdfilwhkje');
    table.timestamp('gqumejmlyt');
    table.text('fmlwqdzvde');
    table.bigInteger('cpbmuljhac');
  });
  await knex.schema.alterTable('pflsiutrty', function(table) {
    table.bigInteger('lwoshrueqe');
    table.json('rxireosizp');
    table.boolean('kjckvtymam');
    table.timestamp('ejeozyxzga');
    table.timestamp('rasdwgwzys');
  });
  await knex.schema.alterTable('zsodiyqokm', function(table) {
    table.text('zrbkwatbyl');
    table.text('aettkdezfx');
    table.integer('hjogburqms');
    table.bigInteger('divcwxrkwa');
    table.json('cttsmcsesh');
    table.float('mxauterbuu');
    table.bigInteger('gulqqiytwu');
    table.timestamp('fwvuqiqwgl');
  });
  await knex.schema.alterTable('gvfpalkyow', function(table) {
    table.text('prffqcajmw');
    table.boolean('gjdmaolrfi');
    table.bigInteger('xfqlpggxbj');
    table.timestamp('nprcwhvmsw');
    table.timestamp('qvwhiykdrj');
    table.boolean('zcroyzugkp');
    table.timestamp('jszmknjidk');
  });
  await knex.schema.alterTable('ghvnkqeyvx', function(table) {
    table.json('qvxjpofayi');
    table.bigInteger('mayclayozi');
    table.text('akdxtvhywc');
    table.integer('geyikjxucb');
    table.json('rvfvjuntvl');
    table.boolean('dznvrmsxzt');
    table.string('lxcmfmoqsl');
    table.string('vmnerollvi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};