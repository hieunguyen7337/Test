'use strict';

/**
 * Migration: 20240819002750_jmmhlkkvltcisue
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bpawdqccax', function(table) {
    table.bigInteger('ojhwjrbbby');
    table.json('afihjnzalm');
    table.timestamp('rzruzhtqoo');
    table.timestamp('fitmlrupqj');
    table.text('fcwtyhghum');
    table.timestamp('apwerzzhif');
    table.string('guqocxljox');
    table.integer('smagjfyicu');
  });
  await knex.schema.alterTable('rlvtljvzro', function(table) {
    table.text('cikeneaqaz');
    table.json('wqtsuzijyo');
    table.integer('gfflqlbkag');
  });
  await knex.schema.alterTable('uodbiruvhw', function(table) {
    table.integer('iolgzhgerb');
    table.text('ononluvezl');
    table.timestamp('ifxaqrrgzg');
    table.bigInteger('wbxpogkgfp');
    table.bigInteger('cjpbeplvty');
    table.integer('brnqiolspu');
    table.bigInteger('skvoxekipg');
    table.json('wdwrrxmqzl');
    table.boolean('qmwdgzfbbq');
    table.float('ssyeygunpn');
  });
  await knex.schema.alterTable('vrejquwtuh', function(table) {
    table.boolean('vsstncchcd');
    table.string('jexmwhqfxk');
    table.string('mtjofgscgs');
    table.text('etvhrywgum');
    table.float('vwfxuocsit');
    table.boolean('kpdayuxmor');
    table.float('pnyrsuuyie');
    table.text('hszdvciafh');
    table.bigInteger('rcroqwmccg');
  });
  await knex.schema.alterTable('nrepahczxi', function(table) {
    table.string('gjicwkpxqo');
    table.json('ucycuuvdeq');
    table.float('adzffjhbtl');
  });
  await knex.schema.alterTable('jbxqfcztbj', function(table) {
    table.string('bbixhywfew');
    table.bigInteger('ezsjwlvcim');
    table.json('iqtmieapdr');
    table.string('budzffltxr');
    table.timestamp('mfuaitrlel');
    table.string('mfhsuylnbz');
    table.timestamp('bjtjpbrjyb');
    table.timestamp('hilgotwtlg');
    table.text('npbxpoxrbu');
    table.text('dxtigopukv');
  });
  await knex.schema.alterTable('ipdrhqnbkh', function(table) {
    table.text('bvijpslufu');
    table.string('nxertmfzdy');
    table.integer('miaxxebals');
    table.text('bayqamfgjj');
    table.integer('zsxwduqqds');
    table.bigInteger('vvawazjwot');
    table.json('ygoiosnmwa');
    table.timestamp('yeocrmvbot');
    table.boolean('khlrvtrojn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};